/******************** Start Read More RTL Function ********************/
function firstReadMore() {
    var firstDots = document.getElementById("dots-1");
    var firstMoreText = document.getElementById("more-1");
    var firstBtnText = document.getElementById("myBtn-1");

    if (firstDots.style.display === "none")
    {
        firstDots.style.display = "inline";
        firstBtnText.innerHTML = "اقرأ المزيد +";
        firstMoreText.style.display = "none";
    }
    else
    {
        firstDots.style.display = "none";
        firstBtnText.innerHTML = "اقرأ اقل -";
        firstMoreText.style.display = "inline";
    }
}
/******************** End Read More RTL Function ********************/