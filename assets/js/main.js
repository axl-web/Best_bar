
let close = document.querySelectorAll(".close");

close.forEach(function(closer){

    closer.addEventListener("click", function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");

        content.classList.remove("animated");
        content.classList.remove("fadeInDown");

        content.classList.add("animated");
        content.classList.add("fadeOutUp");

        setTimeout(function(){
            location.href="../../index.html";
        },800 );
    })
})

// animated fadeInDown fadeOutUp