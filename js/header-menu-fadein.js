$(document).ready(function() {
    var
        tl = new TimelineLite();

    //original Timeline
    tl
        .set('.appmax-header-menu', {autoAlpha: 1})
        .from('.inside-li-1', .3, { y: -15, autoAlpha: 0, ease:Power1.easeOut}, .5)
        .from('.inside-li-2', .3, { y: -15, autoAlpha: 0, ease:Power1.easeOut}, .7)
        .from('.inside-li-3', .3, { y: -15, autoAlpha: 0, ease:Power1.easeOut}, .9)
        .from('.inside-li-4', .3, { y: -15, autoAlpha: 0, ease:Power1.easeOut}, 1.1)
        .from('.inside-li-5', .3, { y: -15, autoAlpha: 0, ease:Power1.easeOut}, 1.3);
});