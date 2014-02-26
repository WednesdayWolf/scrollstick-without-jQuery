/* Made by Wednesday Wolf
*  http://wednesdaywolf.com
*  contact@wednesdaywolf.com
*/

//Select the header, set it to header variable
var header= document.querySelector('header');

function scrollTop(){
    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}
function defaultHead(){
    if(scrollTop() >= 500){
        header.style.top="0";
        header.style.position="fixed";
    }
    else{
        header.style.top="";
        header.style.position="absolute";
    }
}

//Find when a user has scrolled to a location
function stick(){
        //If the body is bigger than whenever we want to trigger the small event
        if(((window.innerWidth > 0) ? window.innerWidth : screen.width) > 900){
            defaultHead();
            // Set a scroll event
            window.onscroll = function(){
                defaultHead();
            }
        }
        else{
            window.onscroll=function(){}
            header.style.position="";
            header.style.top="0";
        }
}

// Start the stick event
if(((window.innerWidth > 0) ? window.innerWidth : screen.width) > 900){
stick();
}
// Resize event
window.addEventListener('resize', stick);
