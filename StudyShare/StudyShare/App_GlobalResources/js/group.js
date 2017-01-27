function toggleGroupSidebar(){
    let sidebar = $(".sidebar-wrapper");
    console.log(sidebar);
    if(sidebar.hasClass('open')){
        console.log("Closing");
        sidebar.removeClass('open');
    } else {
        console.log("Opening");
        sidebar.addClass('open');
    }
}