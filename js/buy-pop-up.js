/**** Modal func ****/
//TODO-0 > check callback
var isSendRes = new rxjs.Subject();

function handleModalResponse(_className) {

    if (_className.indexOf('submit-modal') > -1) {
        isSendRes.next(true);
    }
}


/*yaman code*/
function showConfirmModal() {
    $("body").css("overflow-y","hidden");
    $(".pop-back").css("display", "block");
    $('.pop-up-container').show(0);
    $('.pop-up').fadeIn(500);
}

/*yaman code*/
function hideConfirmModal() {
    $("body").css("overflow-y","unset");
    $(".pop-back").css("display", "none");
    $('.pop-up-container').fadeOut();
    $('.pop-up').fadeOut();
}
/**** end modal func ****/

//document click events
document.addEventListener('click', function (e) {


    var className = e.target.className;
    //show
    if (className.indexOf('pop-up-button') > -1) {
        showConfirmModal();
    }
    //hide
    if (className.indexOf('submit-modal') > -1 ||
        className.indexOf('pop-back') > -1 ||
        className.indexOf('pop-up-container') > -1 ||
        className.indexOf('modal-close-custom') > -1
    ) {
        hideConfirmModal();
    }
    handleModalResponse(className);
});