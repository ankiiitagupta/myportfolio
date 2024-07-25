if ($(".text").length == 1) {
    var typed_strings = 
        $(".text-slider").text();

    var typed = new Typed(".text", {
        strings: typed_strings.split(", "),
        typeSpeed: 50,
        loop: true,
        backDelay: 900,
        backSpeed: 30,
    });
}

// var typed= new typed(".text",{
//     Strings:["Full Stack Developer","Web Developer"],
//     typeSpeed:100,
//     backSpeed: 100, 
//     backDelay:1000,
//     loop:true
// });