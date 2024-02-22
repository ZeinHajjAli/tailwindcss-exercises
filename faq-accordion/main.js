const accordions = document.getElementsByClassName("accordion");
const accordionText = document.getElementsByClassName("accordionText");
const accordionImagePlus =
    document.getElementsByClassName("accordionImagePlus");
const accordionImageMinus = document.getElementsByClassName(
    "accordionImageMinus"
);

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", (e) => {
        accordionText[i].classList.toggle("hidden");
        accordionImagePlus[i].classList.toggle("hidden");
        accordionImageMinus[i].classList.toggle("hidden");
    });
}
