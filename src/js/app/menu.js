import {qs, on} from './helpers'

let burgerMenu = qs(".hamburger");
let panel = qs(".panel");
let panelElements = document.querySelectorAll(".panel *");

export default class Menu{
    constructor(){
        on(burgerMenu, 'click', () => {
            panel.classList.toggle('hide');
            console.log();
        });

        on(document, 'click', (e) => {
            //tıklanan şey .panel değilse ve .haburger classını'da içermiyorsa
            if(e.target.nodeName === "HTML" || e.target.nodeName === "H4"){
                if(!panel.classList.contains('hide')){
                    panel.classList.add('hide');
                }
            }
            
            //console.log(panel.childNodes);
            /* panelElements.forEach(function(elem) {
                console.log(elem)
            }, this); */

           
        })
    }
}