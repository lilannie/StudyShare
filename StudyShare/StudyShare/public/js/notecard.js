function rotateCard(id, side){
    let back = $("#notecard-back-"+id);
    let front = $("#notecard-front-"+id);
    if(back.hasClass('rotate-back')){
        back.removeClass('rotate-back');
    } else {
        back.addClass('rotate-back');
    }
    if(front.hasClass('rotate-front')){
        front.removeClass('rotate-front');
    } else {
        front.addClass('rotate-front');
    }

}