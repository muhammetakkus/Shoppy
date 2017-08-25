import {qs, on, addClass, removeClass} from './helpers'
import Storage from './storage'
import View from './view'

let DB = new Storage();
let Views = new View();

let input = qs(".to-do-input");

export default class Events {
    onKeyPress(){
        on(input, 'keypress', (e) => {

            if (e.charCode === 13) {
                /* Get to-do Value */
                let toDoValue = input.value;
                
                if (toDoValue != ""){
                    /* LAST ID */
                    let data = DB.getAll();
                    let id = data.todo.length;
                    
                    /* INSERT */
                    DB.addItem(toDoValue, id);

                    input.value = '';
                }
            }

            return false;

        });
    }

    addButtonClick(){
        /* Get to-do Value */
        let toDoValue = input.value;

        if (toDoValue != "")
        {
            /* LAST ID */
            let data = storage.list();
            let id = data.todo.length;
            
            /* INSERT */
            DB.addItem(toDoValue, id);

            input.value = '';
        }
    }
    
    checkEvent(){
        on(document, 'change', function(event){
            if(event.target && event.target.className === 'to-do-checkbox')
            {
                let id = event.target.getAttribute("data-id");

                if (event.target.checked === true)
                {
                    //event.target.parentElement.classList.add("check");
                    addClass(event.target.parentElement, "check");

                    if (id > -1){
                        DB.updateItem(id, true);
                    }
                }
                else
                {
                    //event.target.parentElement.classList.remove("check");
                    removeClass(event.target.parentElement, "check");

                    if (id > -1){
                        DB.updateItem(id, false);
                    }
                }
            }
        });
    }

    /* Delete Item */
    deleteEvent(){       
        on(qs("body"), 'click', function(event){
            if(event.target && event.target.className === 'delete')
            {
                if(event.target.hasAttribute("id") === true)
                {
                    let id = event.target.getAttribute("id");

                    console.log("deleted id:" + id);

                    if (id > -1){
                        /* DELETE */
                        DB.deleteItem(id);

                        //remove element
                        event.target.parentElement.remove();
                    }
                }
            }
        });
    }

    /* Select Cart on the Panel */
    selectCart(){
        //bu kart sadece o anki cartları seçiyor yeni bir kart eklendiği zaman cart arrayine dahil değil
        //her kart eklendşiğinde yeni kart bu arraya push edilebilir mi 
        //veya yeniden seçim yapılsa cart değişkenine atılsa bu array tazelenir?
        //Event Delegation DOM Load olduğunda zaten sayfada olan bir elementi dinleyip evet.target ile hedef elementimizse olayları gerçekleştirmekmiş (aşağıdaki gibi)
        //sanırım en iyi event delegation dynamic ögelerde parent veya sabit olan child elementleri dinlemek
        let cart = document.querySelectorAll(".panel .carts li");
        let cartsWrapper = qs('ul.carts')
        let cartName;
        //event delegation
        //cart.forEach(function(element) {
            on(cartsWrapper, 'click', (event) => {
                console.log("xx");
                if(event.target && event.target.classList.contains('cart-item') || event.target.className == "cart-text"){
                    
                    //eğer tıklanan cart-text ise cartName'i almak için parent li'ye ulaş
                    if(event.target.className == "cart-text"){
                        cartName = event.target.parentElement.getAttribute('cart-name');
                    }else{
                        cartName = event.target.getAttribute('cart-name');
                    }
                    
                    //remove .selected-cart class all cart
                    document.querySelectorAll(".panel .carts li").forEach(function(item){
                        removeClass(item, "selected-cart");
                    });

                    //tıklanan eğer span.cart-text ise parent li'sine select-cart class'ını ata
                    if(event.target.className == "cart-text"){
                        addClass(event.target.parentElement, "selected-cart");
                    }else{
                        addClass(event.target, "selected-cart");
                    }

                    //clear to-do-list-items
                    Views.clearList();

                    //currentCart'ı seçilen ile değiştir
                    DB.changeCurrentCart(cartName);

                    /* Yeni listeyi al ve listele */
                    let data = DB.getAll();
                    Views.listToDo(data);
                }
            });
        //}, this);
    }

    /* List Carts */
    cartList(name){
        //
        let previousSelectedCart = document.querySelectorAll(".cart-item");
        if(typeof previousSelectedCart[0] !== "undefined"){
            removeClass(previousSelectedCart[0], "selected-cart");
        }

        //
        let cart = `<li class='cart-item selected-cart' cart-name='${name}'>
                        <span class='cart-text'>${name}</span>
                        <span class='cart-delete'>x</span>    
                    </li>`;
        qs(".panel .carts").insertAdjacentHTML("afterbegin", cart);        
    }

    /* Delete Cart */
    deleteCart(){
        on(qs("body"), 'click', function(event){
            if(event.target && event.target.className === 'cart-delete')
            {
                if(event.target.parentElement.hasAttribute("cart-name") === true)
                {
                    let cartName = event.target.parentElement.getAttribute("cart-name");

                    console.log("deleted cart:" + cartName);

                    let delCart = DB.deleteCart(cartName);
                    
                    //remove in DOM
                    if(delCart === true){
                        //
                        let deletedCartElement = qs(`ul.carts li[cart-name='${cartName}']`);
                        deletedCartElement.remove();

                        //silinen cart o an seçili cart ise
                        if(DB.getCurrentCart() === cartName){
                            //get cart names
                            let availableCarts = DB.getCartNames();
                            let countAvailableCarts = availableCarts.length;

                            //eğer silinen karttan sonra 1 den fazla kart kalmışsa
                            if(countAvailableCarts > 0){
                                //son eklenen kartı currentCart yap
                                let newCartName = availableCarts[countAvailableCarts-1];
                                DB.changeCurrentCart(newCartName);

                                //to-do-list itemleri kaldır
                                let toDoListParent = qs(".to-do-list");
                                while (toDoListParent.firstChild) {
                                    //toDoListParent.removeChild(toDoListParent.firstChild);
                                    toDoListParent.firstChild.remove();
                                }

                                //list new selected cart
                                Views.listToDo(DB.getAll());

                                
                                
                                //Add .selected-cart Class
                                addClass(qs(`ul.carts li[cart-name='${DB.getCurrentCart()}']`), "selected-cart");
                            }else {
                                DB.changeCurrentCart("");
                            }                            
                        }                        
                    }
                }
            }
        });
    }

}