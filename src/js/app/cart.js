import {qs, on} from './helpers'
import Storage from './storage'
import Event from './event'
let Events = new Event;
let DB = new Storage;


let menuCreateCartButton = qs('.create-cart-wrap .new-cart');
let menuCartInputWrap = qs('.create-cart-wrap .cart-input-wrap');
let menuCartNameAddButton = qs('.create-cart-wrap .add-button');
let menuCartInput = qs('.create-cart-wrap .cart-input');
let panel = qs(".panel");

export default class Cart{
    constructor(){
        /* Desktop Create Cart Button - Eğer Cart Yoksa Anasayfada Menüyü Açacak Olan Create Butonu*/
        let desktopCreateCartButton = qs('.create-cart-button-desktop');
        on(desktopCreateCartButton, 'click', () => {
            panel.classList.remove('hide');
        });

        /* Menu Create Button Click Event */
        on(menuCreateCartButton, 'click', (e) => {
            menuCreateCartButton.style.display = "none";
            menuCartInputWrap.style.display = "block";
            menuCartInput.focus();
        });

        /* Add Cart | Add Button Click */
        on(menuCartNameAddButton, 'click', (e) => {
            let cartName = menuCartInput.value;
            this.addCart(cartName);

            //
            menuCreateCartButton.style.display = "block";
            menuCartInputWrap.style.display = "none";

            //
            menuCartInput.value = "";

            //
            qs(".panel").classList.add('hide');
        });

        /* Add Cart | Cart Input Enter Keypress */
        on(menuCartInput, 'keypress', (e) => {
            if (e.charCode === 13){
                let cartName = menuCartInput.value;
                this.addCart(cartName);

                //
                menuCreateCartButton.style.display = "block";
                menuCartInputWrap.style.display = "none";
                
                //
                menuCartInput.value = "";

                //
                qs(".panel").classList.add('hide');
            }
        });
    }

    addCart(name){
        DB.createNewCart(name);

        /* Add To DOM new cart */
        Events.cartList(name);
    }
}