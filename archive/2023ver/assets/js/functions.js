

// const menuOptions = ["Home", "Blog", "Projects", "Settings"];

// const menuOption = document.getElementsByClassName("menuOption");

// for (let i = 0, j = -1 + menuOptions.length; i < menuOption.length; i++, j--) {
//     menuOption[i].innerHTML = menuOptions[j];
// }

// for (let i = menuOptions.length; i < menuOption.length; i++) {
//     menuOption[i].style.display = "none";
// }

// for (let i = 0; i < menuOption.length; i++) {
//     if (menuOption[i].innerHTML == "Settings") {

//         menuOption[i].addEventListener("click", display_settings_now);
//         var showSettings = false;
//         function display_settings_now() {

//             if (showSettings == false) {
//                 showSettings = true;
//             } else {
//                 showSettings = false;
//             }

//             if (showSettings == true) {

//                 if (document.getElementById("dark-toggle").checked == true) {
//                     menuOption[i].style.border = "3px solid #fff";
//                 }
//                 else {
//                     menuOption[i].style.border = "3px solid #000";
//                 }

//                 document.getElementById("assistant").style.display = "block";

//             } else {

//                 if (document.getElementById("dark-toggle").checked == true) {
//                     menuOption[i].style.border = "3px solid #333";
//                 }
//                 else {
//                     menuOption[i].style.border = "3px solid #eee";
//                 }

//                 for (let i = assistant.length; i < assistant.length; i++) {
//                     assistant[i].style.display = "none";
//                 }

//                 document.getElementById("assistant").style.display = "none";
//             }


//         }



//     }
// }

// const menu = document.getElementsByTagName("nav")[0].childNodes;

// for (let i = 0; i < menu.length; i++) {
//     menu[i].innerHTML = menuOptions[i];
// }

// for (let i = 0, j = -1 + menuOptions.length; i < menu.length; i++, j--) {
//         menu[i].innerHTML = menuOptions[j];
//     }


// window.addEventListener("keydown", function (event) {
//     if (event.defaultPrevented) {
//         return; // Should do nothing if the default action has been cancelled
//     }

//     var handled = false;
//     if (
//         event.key.toLowerCase() === "d"
//         && event.altKey

//     ) {
//         // Handle the event with KeyboardEvent.key and set handled true.
//         document.getElementById("dark-toggle").click();
//         handled = true;

//     } else if (
//         event.keyCode.toLowerCase() === "d"
//         && event.altKey

//     ) {
//         // Handle the event with KeyboardEvent.keyCode and set handled true.
//         document.getElementById("dark-toggle").click();
//         handled = true;
//     }

//     if (handled) {
//         // Suppress "double action" if event handled
//         event.preventDefault();
//     }
// }, true);

document.getElementById("outputhEight").addEventListener("click", () => { 
    document.getElementById("releaseNotes").style.display = "block";
 });
 document.getElementById("outputhEightC").addEventListener("click", () => { 
    document.getElementById("releaseNotes").style.display = "none";
 });
 

const articles = document.getElementsByTagName("article");
const briefblock = document.getElementsByClassName("briefblock");

var clickedArticle = false;
var clickedArticleIs = 0;

for (let i = 0; i < articles.length; i++) {

    articles[i].addEventListener("click", () => {
        clickedArticle = true;
        if (clickedArticleIs == i) {
            clickedArticle = false;
        }

        articles[i].classList.add("microinteraction");

        articles[i].classList.toggle("active");

        briefblock[clickedArticleIs].style.display = "none";

        briefblock[i].style.display = "block";

        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.getElementById("color_inversion_notice_box").style.display = "block";
        } else {
            document.getElementById("color_inversion_notice_box").style.display = "none";
        }

        let mainSections = document.querySelectorAll('main section');
        for (let index = 0; index < mainSections.length; index++) {
            mainSections[index].classList.remove("mainSectionOnArticleHover");
        }

        document.getElementById("blurFocusScreen").style.display = "none";

        // articles[i].className = 'microinteraction';

        console.log(i + " is the key");
        removeActive(i);
        clickedArticleIs = i;
    });

    function removeActive(j) {
        for (let i = 0; i < articles.length; i++) {

            if (i !== j) {
                articles[i].classList.remove("active");
                articles[i].classList.remove("microinteraction");
            }

            setTimeout(function () { articles[i].classList.remove("microinteraction"); }, 300);

            console.log(j + " is the second key");
        };


    }

    articles[i].addEventListener("mouseover", () => {

        if (clickedArticle == 0) {

            setTimeout(function () {

                briefblock[clickedArticleIs].style.display = "none";
                briefblock[0].style.display = "none";


                briefblock[i].style.display = "inline";
            }, 000);

            // briefblock[i].style.display = "inline";


            document.getElementById("viewPort").style.zIndex = 5;

            let mainSections = document.querySelectorAll('main section');
            for (let index = 0; index < mainSections.length; index++) {
                mainSections[index].classList.add("mainSectionOnArticleHover");
            }

            document.getElementById("blurFocusScreen").style.display = "block";

            // document.getElementsByTagName("viewportContent")[i].style.display = "block";

            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.getElementById("color_inversion_notice_box").style.display = "block";
                document.getElementById("show_color-inversion-toggle_view").style.display = "block";
                document.getElementById("color_inversion_for_viewport_embedded_content_toggle").checked = 1;

                for (let embed = 0; embed < document.getElementsByClassName("embedded_in_lighttheme").length; embed++) {

                    if (
                        document.getElementById("color_inversion_for_viewport_embedded_content_toggle").checked == 0
                    ) {
                        document.getElementsByClassName("embedded_in_lighttheme")[embed].style.filter = "invert(0%)";
                    }
                    else {

                        document.getElementsByClassName("embedded_in_lighttheme")[embed].style.filter = "invert(92%)";
                    }
                }



                // for (embed = 0; embed < embedded_in_lighttheme.length; embed++) {
                //     document.getElementsByClassName("embedded_in_lighttheme")[embed].style.filter = "invert(92%)";
                // }


                // document.getElementById("color_inversion_alert").innerHTML = "<p>The dark theme is achieved on the above embedded content by a color inversion technique. If you find any image or content a bit off, turn off the color inversion using this switch.</p> ";

            } else {
                document.getElementById("color_inversion_notice_box").style.display = "none";
            }

        }

        // document.getElementById("linkedin_post").src = "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6830070522202718208";
    });

    articles[i].addEventListener("mouseout", () => {
        if (clickedArticle == 0) {

            setTimeout(function () {

                briefblock[i].style.display = "none";
                briefblock[clickedArticleIs].style.display = "none";
                briefblock[0].style.display = "inline";

            }, 00);

            // briefblock[0].style.display = "inline";

            document.getElementById("color_inversion_notice_box").style.display = "none";

            let mainSections = document.querySelectorAll('main section');
            for (let index = 0; index < mainSections.length; index++) {
                mainSections[index].classList.remove("mainSectionOnArticleHover");
            }

            document.getElementById("blurFocusScreen").style.display = "none";

        }
    });

    // element.classList.remove("offline");

}



document.getElementById("contact_focus_trigger").addEventListener("click", () => {
    document.getElementById("contact_section").classList.toggle("focus_element");
    setTimeout(function () { document.getElementById("contact_section").classList.remove("focus_element"); }, 4000);
});



// viewport functions

// document.getElementsByClassName("backgroundHover")[0].addEventListener("mouseover", () => {

//     document.getElementById("defaultView").style.display = "block";
//     document.getElementById("linkedin_6830070522202718208").style.display = "none";


// });

// document.getElementById("testblock").addEventListener("mouseover", () => {


//     if (clickedArticle == 0) {

//         document.getElementById("viewPort").style.zIndex = 4;
//         document.getElementById("blurFocusScreen").style.display = "block";
//         if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//             document.getElementById("color_inversion_notice_box").style.display = "block";

//             document.getElementsByClassName("embedded_in_lighttheme")[0].style.filter = "invert(92%)";

//             document.getElementById("color_inversion_for_viewport_embedded_content_toggle").checked = 1;
//             document.getElementById("color_inversion_alert").innerHTML = "<p>The dark theme is achieved on the above embedded content by a color inversion technique. If you find any image or content a bit off, turn off the color inversion using this switch.</p> ";
//         } else {
//             document.getElementById("color_inversion_notice_box").style.display = "none";
//         }

//     }

// document.getElementById("linkedin_post").src = "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6830070522202718208";

// });

// document.getElementById("course_linkedin_6830070522202718208").addEventListener("mouseout", () => {


//     if (clickedArticle == 0) {
//         // document.getElementById("defaultView").style.display = "block";
//         // document.getElementById("linkedin_post").style.display = "none";
//         document.getElementById("color_inversion_notice_box").style.display = "none";
//         document.getElementById("blurFocusScreen").style.display = "none";

//     }
//     // if (true) {
//     //     document.getElementById("linkedin_6830070522202718208").style.filter = "invert(100%)";
//     // os-win artdeco windows theme--dark-lix
//     // }

// });
// var mainSection = document.getElementsByTagName("section");
var mainSection = document.getElementsByClassName("mainSection");

document.getElementById("expandAll").addEventListener("click", () => {


    for (let selSection = 0; selSection < mainSection.length; selSection++) {

        if (
            document.getElementById("expandAll").checked == 1
        ) {
            // document.getElementsByClassName("embedded_in_lighttheme")[embed].style.height = "auto";
            mainSection[selSection].style.maxHeight = "none";
        }
        else {
            // document.getElementsByClassName("embedded_in_lighttheme")[embed].style.height = "500px";
            mainSection[selSection].style.maxHeight = "500px";
        }
    }
}
);

document.getElementById("close_preview_button").addEventListener("click", () => {

    document.getElementById("viewPort").classList.toggle("close_preview_button");

    let mainSections = document.querySelectorAll('main section');
    for (let index = 0; index < mainSections.length; index++) {
        mainSections[index].classList.toggle("mainSectionOnAsideClose");
    }
    const main = document.getElementsByTagName("main");
    main[0].classList.toggle("mainOnAsideClose");

    let mainSpan = document.querySelectorAll('main span');
    for (let index = 0; index < mainSpan.length; index++) {
        mainSpan[index].classList.toggle("mainSpanOnAsideClose");
    }

    document.getElementById("close_preview_button").classList.add("microinteraction");
    setTimeout(function () { document.getElementById("close_preview_button").classList.remove("microinteraction"); }, 400);
});

document.getElementById("color_inversion_for_viewport_embedded_content_toggle").addEventListener("click", () => {


    for (let embed = 0; embed < document.getElementsByClassName("embedded_in_lighttheme").length; embed++) {

        if (
            document.getElementById("color_inversion_for_viewport_embedded_content_toggle").checked == 0
        ) {
            document.getElementsByClassName("embedded_in_lighttheme")[embed].style.filter = "invert(0%)";
        }
        else {

            document.getElementsByClassName("embedded_in_lighttheme")[embed].style.filter = "invert(92%)";
        }
    }
});

// // function removeAside() {
// //     document.getElementById("viewPort").style.display = "none";
// //     document.getElementById("main").style.width = "calc(100% - 85px)";
// //     document.getElementById("testtgb").classList.add("three-repeat-main-section");



// // }
var makeitFullScreen = 0;
document.getElementById("fullScreenViewPort").addEventListener("click", () => {
    openFullscreenViewPort();
});

var elemviewPort = document.getElementById("viewPort");
function openFullscreenViewPort() {

    document.getElementById("fsexitclick").style.display = "inline";
    document.getElementById("fsenterclick").style.display = "none";

    if (elemviewPort.requestFullscreen) {
        elemviewPort.requestFullscreen();
    } else if (elemviewPort.webkitRequestFullscreen) { /* Safari */
        elemviewPort.webkitRequestFullscreen();
    } else if (elemviewPort.msRequestFullscreen) { /* IE11 */
        elemviewPort.msRequestFullscreen();
    }
    if (makeitFullScreen == 1) {
        makeitFullScreen = 0;
        document.onclick = function (event) {
            if (document.fullscreenElement) {
                document.exitFullscreen()
                    .then(() => console.log("Document Exited from Full screen mode"))
                    .catch((err) => console.error(err))
            } else {
                document.documentElement.requestFullscreen();
            }
            document.getElementById("fsexitclick").style.display = "none";
            document.getElementById("fsenterclick").style.display = "inline";
        }
    } else {
        makeitFullScreen = 1;

    }


}

