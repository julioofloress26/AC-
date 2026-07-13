/* =====================================
        INICIALIZACIÓN
===================================== */


document.addEventListener("DOMContentLoaded", ()=>{


    console.log("Página Inclusión+ cargada correctamente");


    AOS.init({

        duration:1000,
        once:true,
        offset:100

    });


});/* =====================================
        MODO OSCURO
===================================== */


const darkModeBtn = document.getElementById("darkMode");

const body = document.body;



// Comprobar si había una configuración guardada

if(localStorage.getItem("modoOscuro") === "activo"){


    body.classList.add("dark");


}




// Activar botón si existe

if(darkModeBtn){


    const icon = darkModeBtn.querySelector("i");



    // Cambiar icono al cargar

    if(body.classList.contains("dark")){


        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");


    }




    darkModeBtn.addEventListener("click", ()=>{


        body.classList.toggle("dark");



        // Guardar elección del usuario


        if(body.classList.contains("dark")){


            localStorage.setItem(
                "modoOscuro",
                "activo"
            );



            icon.classList.remove(
                "fa-moon"
            );


            icon.classList.add(
                "fa-sun"
            );



        }else{


            localStorage.setItem(
                "modoOscuro",
                "desactivado"
            );



            icon.classList.remove(
                "fa-sun"
            );


            icon.classList.add(
                "fa-moon"
            );


        }



    });



}/* =====================================
        MENÚ RESPONSIVE
===================================== */


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");



if(menuBtn && navLinks){



    const menuIcon = menuBtn.querySelector("i");



    // Abrir y cerrar menú

    menuBtn.addEventListener("click", ()=>{


        navLinks.classList.toggle("active");



        if(navLinks.classList.contains("active")){


            menuIcon.classList.remove(
                "fa-bars"
            );


            menuIcon.classList.add(
                "fa-xmark"
            );



        }else{


            menuIcon.classList.remove(
                "fa-xmark"
            );


            menuIcon.classList.add(
                "fa-bars"
            );


        }


    });






    // Cerrar menú al seleccionar una opción

    const navItems = document.querySelectorAll(
        ".nav-links a"
    );



    navItems.forEach(item=>{


        item.addEventListener("click", ()=>{


            navLinks.classList.remove(
                "active"
            );



            menuIcon.classList.remove(
                "fa-xmark"
            );


            menuIcon.classList.add(
                "fa-bars"
            );



        });


    });



}/* =====================================
        SCROLL SUAVE
===================================== */


const scrollLinks = document.querySelectorAll(
    'a[href^="#"]'
);



scrollLinks.forEach(link=>{


    link.addEventListener("click",(e)=>{


        const target = document.querySelector(
            link.getAttribute("href")
        );



        if(target){


            e.preventDefault();



            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });


        }



    });



});







/* =====================================
        NAVBAR AL HACER SCROLL
===================================== */


const header = document.querySelector(
    ".header"
);



if(header){



    window.addEventListener("scroll", ()=>{


        if(window.scrollY > 60){


            header.classList.add(
                "sticky"
            );



        }else{


            header.classList.remove(
                "sticky"
            );



        }



    });



}/* =====================================
        CONTADORES ANIMADOS
===================================== */


const counters = document.querySelectorAll(
    ".stat-box h2"
);


let countersActivated = false;



function startCounters(){


    counters.forEach(counter=>{


        const finalValue = counter.innerText;


        const number = parseInt(
            finalValue.replace(/\D/g,"")
        );



        let current = 0;



        const speed = Math.ceil(
            number / 80
        );



        const updateCounter = ()=>{


            current += speed;



            if(current < number){


                counter.innerText =
                "+" + current;



                setTimeout(
                    updateCounter,
                    20
                );


            }else{


                counter.innerText =
                finalValue;


            }



        };



        updateCounter();



    });



}






// Activar contadores al aparecer la sección


const stats = document.querySelector(
    ".stats"
);



if(stats){



    window.addEventListener(
        "scroll",
        ()=>{


            const position =
            stats.getBoundingClientRect().top;



            if(
                position <
                window.innerHeight - 100
                &&
                !countersActivated
            ){


                startCounters();


                countersActivated = true;


            }



        }
    );



}








/* =====================================
        BOTÓN VOLVER ARRIBA
===================================== */


const topButton = document.createElement(
    "button"
);



topButton.className =
"top-button";



topButton.innerHTML =
`
<i class="fa-solid fa-arrow-up"></i>
`;



document.body.appendChild(
    topButton
);






// Mostrar botón cuando baja la página


window.addEventListener(
    "scroll",
    ()=>{


        if(window.scrollY > 500){


            topButton.classList.add(
                "show"
            );


        }else{


            topButton.classList.remove(
                "show"
            );


        }


    }
);






// Subir al inicio


topButton.addEventListener(
    "click",
    ()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    }
);