import React, {Component, PropTypes} from 'react';
import {
    Editor,
    EditorState,
    Entity,
    RichUtils,
    ContentState,
    CompositeDecorator,
    AtomicBlockUtils
} from 'draft-js';
import {
    getSelectionRange,
    getSelectedBlockElement,
    getSelectionCoords
} from '../utils/selection';
import SideToolbar from './SideToolbar';
import InlineToolbar from '../InlineToolbar';
import ImageComponent from '../ImageComponent';

import '../../../../scss/editor.scss';


class RichEditor extends Component {
    constructor(props) {
        super(props);

        this.defaultProps = {
            text: "Fake text"
        };

        this.state = {
            editorState: EditorState.createEmpty(),
            inlineToolbar: {show: false},
            text: this.props.text
        };

        this.onChange = (editorState) => {
            if (!editorState.getSelection().isCollapsed()) {
                const selectionRange = getSelectionRange();
                const selectionCoords = getSelectionCoords(selectionRange);
                this.setState({
                    inlineToolbar: {
                        show: true,
                        position: {
                            top: selectionCoords.offsetTop,
                            left: selectionCoords.offsetLeft
                        }
                    }
                });
            } else {
                this.setState({inlineToolbar: {show: false}});
            }

            this.setState({editorState});
            setTimeout(this.updateSelection, 0);
        }
        this.focus = () => this.refs.editor.focus();
        this.updateSelection = () => this._updateSelection();
        this.handleKeyCommand = (command) => this._handleKeyCommand(command);
        this.handleFileInput = (e) => this._handleFileInput(e);
        this.handleUploadImage = () => this._handleUploadImage();
        this.toggleBlockType = (type) => this._toggleBlockType(type);
        this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
        this.insertImage = (file) => this._insertImage(file);
        this.blockRenderer = (block) => {
            if (block.getType() === 'atomic') {
                return {
                    component: ImageComponent
                };
            }
            return null;
        }
        this.blockStyler = (block) => {
            if (block.getType() === 'unstyled') {
                return 'paragraph';
            }
            return null;
        }
    }

    _updateSelection() {
        const selectionRange = getSelectionRange();
        let selectedBlock;
        if (selectionRange) {
            selectedBlock = getSelectedBlockElement(selectionRange);
        }
        this.setState({
            selectedBlock,
            selectionRange
        });
    }

    _handleKeyCommand(command) {
        const {editorState} = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    _toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }

    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }

    _insertImage(file) {
        const entityKey = Entity.create('atomic', 'IMMUTABLE', {src: URL.createObjectURL(file)});
        this.onChange(AtomicBlockUtils.insertAtomicBlock(
            this.state.editorState,
            entityKey,
            ' '
        ));
    }

    _handleFileInput(e) {
        const fileList = e.target.files;
        const file = fileList[0];
        this.insertImage(file);
    }

    _handleUploadImage() {
        this.refs.fileInput.click();
    }

    render() {
        const {editorState, selectedBlock, selectionRange} = this.state;
        let sideToolbarOffsetTop = 0;

        if (selectedBlock) {
            const editor = document.getElementById('richEditor');
            const editorBounds = editor.getBoundingClientRect();
            const blockBounds = selectedBlock.getBoundingClientRect();

            sideToolbarOffsetTop = (blockBounds.bottom - editorBounds.top)
                - 31; // height of side toolbar
        }

        sideToolbarOffsetTop = 5;

        return (
            <div className="text-editor">
                <div className="editor" id="richEditor" onClick={this.focus}>
                    {selectedBlock
                        ? <SideToolbar
                            editorState={editorState}
                            style={{top: sideToolbarOffsetTop}}
                            onToggle={this.toggleBlockType}
                            onUploadImage={this.handleUploadImage}
                        />
                        : null
                    }
                    {this.state.inlineToolbar.show
                        ? <InlineToolbar
                            editorState={editorState}
                            onToggle={this.toggleInlineStyle}
                            position={this.state.inlineToolbar.position}
                        />
                        : null
                    }
                    <Editor
                        blockRendererFn={this.blockRenderer}
                        blockStyleFn={this.blockStyler}
                        editorState={editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        onChange={this.onChange}
                        placeholder="Write something..."
                        spellCheck={true}
                        readOnly={this.state.editingImage}
                        ref="editor"
                    />
                    <input type="file" ref="fileInput" style={{display: 'none'}}
                           onChange={this.handleFileInput}/>
                </div>
            </div>
        );
    }
}

export default RichEditor;
