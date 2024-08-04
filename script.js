let email = document.querySelector("#email");
        let form = document.querySelector(".form");
        let btn = document.querySelector("#butt");

        btn.addEventListener("click", function(event) {
            event.preventDefault();
            if(email.value.includes("@")) {
                alert("Your Email is valid");
            } else {
                alert("Please Enter '@' this sign in the email box");
            }
        });
 
        $('#menuBtn').click(function(){
            $('nav .navigation ul').addClass('active')
         }) 

        $('#menuClose').click(function(){
           $('nav .navigation ul').removeClass('active')
        }) ;