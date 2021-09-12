/**** Private Modal func ****/
//TODO-0 > check callback
var isSendRes = new rxjs.Subject();

function handleModalResponse(_className) {

    if (_className.indexOf('submit-modal') > -1) {
        isSendRes.next(true);
    }
}

/* yaman code*/
function showPrivateModal() {
    $("html").css("overflow-y","hidden");
    $(".private-pop-back").css("display", "block");
    $('.private-pop-up-container').show(0);
    $('.private-pop-up').fadeIn(500);
}

/*yaman code*/
function hidePrivateModal() {
    $("html").css("overflow-y","unset");
    $(".private-pop-back").css("display", "none");
    $('.private-pop-up-container').fadeOut();
    $('.private-pop-up').fadeOut();
}
/**** end Private modal func ****/

//document click events
document.addEventListener('click', function (e) {


    var className = e.target.className;
    //show
    if (className.indexOf('private-pop-up-button') > -1) {
        showPrivateModal();
        hideConfirmModal();
    }
    //hide
    if (className.indexOf('submit-modal') > -1 ||
        className.indexOf('private-pop-back') > -1 ||
        className.indexOf('private-pop-up-container') > -1 ||
        className.indexOf('private-modal-close') > -1
    ) {
        hidePrivateModal();
    }
    handleModalResponse(className);
});