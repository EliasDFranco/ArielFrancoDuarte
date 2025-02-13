document.addEventListener("DOMContentLoaded", () => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector("body"),
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
        lerp: 0.1 
    });
});
