// const galleryEl = document.querySelector(".gallery");
// const allGalleryWrappers = document.querySelectorAll(".img-wrapper");
//
// galleryEl.addEventListener("click", function (evt) {
//     evt.stopPropagation();
//     evt.preventDefault();
//
//     const $target = evt.target;
//     console.log($target.nodeName);
//
//     if ($target && $target.nodeName === "FIGURE") {
//         const name = $target.children[0];
//
//         if (Array.prototype.includes.call($target.classList, "img-wrapper--open")) {
//             $target.classList.remove("img-wrapper--open");
//             name.classList.remove("img-wrapper__name--hide");
//         } else {
//             /*Remove every "open" class from every img-wrapper*/
//             allGalleryWrappers.forEach(el => el.classList.remove("img-wrapper--open"));
//             /*Add "open" class only to the "img-wrapper that we clicked*/
//             $target.classList.toggle("img-wrapper--open");
//             name.classList.toggle("img-wrapper__name--hide");
//         }
//     }
// }, true);

const gallery = document.querySelector(".gallery");
const allGalleryWrappers = document.querySelectorAll(".img-wrapper");

function removeClass(el, className) {
    el.classList.remove(className);
}

function addClass(el, className) {
    el.classList.add(className);
}

function galleryMechanism($target) {
    if (Array.prototype.includes.call($target.classList, "img-wrapper--open")) {
        // remove class "open" from $target element
        removeClass($target, "img-wrapper--open");
        removeClass($target.children[0], "img-wrapper__name--hide");
    } else {
        // remove class open from every figure element and add the same class only to the $target element
        allGalleryWrappers.forEach((wrapper => {
            removeClass(wrapper, "img-wrapper--open");
            removeClass(wrapper.children[0], "img-wrapper__name--hide");
        }));

        addClass($target, "img-wrapper--open");
        addClass($target.children[0], "img-wrapper__name--hide");
    }
}

allGalleryWrappers.forEach(el => {
    el.addEventListener("click", function (evt) {
        const $target = evt.target;

        if ($target && $target.nodeName === "FIGURE") {
            return galleryMechanism($target);
        }
        galleryMechanism($target.parentElement);
    });
});