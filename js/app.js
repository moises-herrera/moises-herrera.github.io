$(".hamburger-menu, .link-nav").on("click", function () {
    $(".sidebar-menu").toggleClass("d-block");
    $(".sidebar-menu").toggleClass("visible");
    $(".bar").toggleClass("animate");
});
