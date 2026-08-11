// Animação dos cards

const cards = document.querySelectorAll(".card");

cards.forEach((card, index)=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";

    setTimeout(()=>{

        card.style.transition=".6s ease";

        card.style.opacity="1";

        card.style.transform="translateY(0)";

    },150*index);

});

// Efeito ao clicar

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        card.style.transform="scale(.95)";

        setTimeout(()=>{

            card.style.transform="";

        },150);

    });

});

// Ícones sociais

const social=document.querySelectorAll(".social a");

social.forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.style.transition=".4s";

    });

});

// Animação do título

const titulo=document.querySelector("h1");

let brilho=0;

setInterval(()=>{

    brilho++;

    titulo.style.textShadow=`0 0 ${10+brilho}px rgba(212,175,55,.7)`;

    if(brilho>10){

        brilho=0;

    }

},180);