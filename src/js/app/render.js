import {qs, on} from './helpers'
import Storage from './storage'
import View from './view'
import localStorage from './localStorage'

let DB = new Storage();
let Views = new View();
let lStore = new localStorage();


export default function render(){
    /* constructor
    {

    } */

    //Eğer daha önce cart oluşturulmuşsa desktop'daki Create Cart butonu görünmesin
    if(DB.getCartName().length > 0){
        qs('.create-cart-button-desktop').style.display = 'none';
    }

    //lStore.clear();

    console.log(DB.getCartName());
    console.log(DB.getAll());
    
    /* Get and List the Data */
    let data = DB.getAll();
    Views.listToDo(data);

    /* List Carts */
    let carts = DB.getCartName();
    let currentCart = DB.getCurrentCart();
    let countCart = carts.length;
    if(countCart > 0){
        let cart;
        carts.forEach(function(element) {
            cart = `<li 
                        class='cart-item ${(element == currentCart)?"selected-cart":""}' 
                        cart-name=${element}>
                        <span class='cart-text'>${element}</span>
                        <span class='cart-delete'>x</span>
                    </li>`;
            qs(".panel .carts").insertAdjacentHTML("afterbegin", cart);
        }, this);
    }

}