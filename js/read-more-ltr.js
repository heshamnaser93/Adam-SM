/******************** Start Read More LTR Function ********************/
function firstReadMore() {
    var firstDots = document.getElementById("dots-1");
    var firstMoreText = document.getElementById("more-1");
    var firstBtnText = document.getElementById("myBtn-1");

    if (firstDots.style.display === "none")
    {
        firstDots.style.display = "inline";
        firstBtnText.innerHTML = "Read More +";
        firstMoreText.style.display = "none";
    }
    else
    {
        firstDots.style.display = "none";
        firstBtnText.innerHTML = "Read Less -";
        firstMoreText.style.display = "inline";
    }
}
/******************** End Read More LTR Function ********************/