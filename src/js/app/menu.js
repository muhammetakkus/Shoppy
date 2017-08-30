import {qs, on} from './helpers'

let burgerMenu = qs(".hamburger");
let panel = qs(".panel");
let panelElements = document.querySelectorAll(".panel *");

export default class Menu{
    constructor(){
        //
        on(burgerMenu, 'click', () => {
            panel.classList.toggle('hide');
        });

        //.panel dışında bir şeye tıklandığında .panel hide olsun nasıl deriz? bu yöntem ne kadar doğru?
        //1- .panel içerisindeki bütün elementleri seç
        //2- document nesnesini kontrol et click olduğunda eğer içerisinden biri veya kendisi(.panel) veya '.hamburger' veya '.hamburger span' tıklandıysa status 1 olsun
        //3- status 1 ise panel kapanmasın 0 ise kapansın
        on(document, 'click', (el) => {
            let status = 0;

            panelElements.forEach((element) => {
                if(el.target.classList == element.classList || el.target.classList == "panel" || el.target.classList.contains('hamburger') || el.target.parentElement.classList.contains('hamburger') || el.target.classList.contains('hamburger') || el.target.classList.contains('create-cart-button-desktop')){
                    status = 1;
                }
            }, this);

            if(status == 0){
                panel.classList.add('hide');
            }
        });
    }
}