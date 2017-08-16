
import localStorage from './localStorage'

import View from './view'
let Views = new View();

let lStore = new localStorage();


let data = (lStore.get('todo')) ? JSON.parse(lStore.get('todo')):{
    todo: [],
    complated: []
};

let item = {
    todo: [],
    complated: []
};

//seçili karta o anki datalar push edilecek
let carts = (lStore.get('carts')) ? JSON.parse(lStore.get('carts')):[];

let cartName = (lStore.get('cartName')) ? JSON.parse(lStore.get('cartName')):[];
let currentCart = (lStore.get('currentCart')) ? JSON.parse(lStore.get('currentCart')):"";

export default class Storage {
    /*constructor(){
        
    }*/

    addItem(text, id){
        console.log(carts);
        console.log(currentCart);

        /* Store  */
        this.store(text);

        /* Add HTML Item */
        Views.addToDOM(text, false, id);

        
    }

    store(text){
        //aynı text varsa push edilmesin
        let indexOfCurrentCart = cartName.indexOf(currentCart);
        
        /* if(typeof carts[indexOfCurrentCart][0] == 'undefined'){
            carts[indexOfCurrentCart].push(item);
        } */

        carts[indexOfCurrentCart]["0"].todo.push(text);
        carts[indexOfCurrentCart]["0"].complated.push(false);

        console.log(carts);
        
        //data.todo.push(text);
        //data.complated.push(false);
        
        
        //sync
        this.objectDataLocalStorage();

        this.objectCartDataLocalStorage();
    }

    /* Change Current Cart */
    changeCurrentCart(newCartName){
        currentCart = newCartName;
        this.objectCurrentCartLocalStorage();
    }
    /**
     * @returns data
     */
    getAll() {
        //return data;
        let indexOfCurrentCart = cartName.indexOf(currentCart);

        if(indexOfCurrentCart > -1){
            /* Sadece kart oluşturulmuşsa o kartın içine boş obj push et */
            if(typeof carts[indexOfCurrentCart][0] == 'undefined'){
                carts[indexOfCurrentCart].push(item);
            }

            return carts[indexOfCurrentCart][0];
        }
    }

    /**
     * @param id
     * @returns {*}
     */
    getItem(id){
        return data.todo[id];
    }

    updateItem(id, complated){
        /* */
        //data.complated[id] = complated;

        let indexOfCurrentCart = cartName.indexOf(currentCart);
        carts[indexOfCurrentCart][0].complated[id] = complated;

        //sync data obj
        this.objectDataLocalStorage();

        //sync carts
        this.objectCartDataLocalStorage();

        console.log(data);
    }

    /**
     * @param id
     */
    deleteItem(id){
        //data objesi ile işlem yapıp data yı localSotarege da todo keyine atama işlemini tekrarlıyoruz
        //her data objesi üzerinde değişiklikte bu update işlemini yapıyoruz
        //böylece data == localSroge oluyor
        
        //for data obj
        data.complated.splice(id, 1);
        data.todo.splice(id, 1);
        
        //for carts data
        let indexOfCurrentCart = cartName.indexOf(currentCart);
        carts[indexOfCurrentCart][0].complated.splice(id, 1);
        carts[indexOfCurrentCart][0].todo.splice(id, 1);

        //sync data obj
        this.objectDataLocalStorage();

        //sync carts
        this.objectCartDataLocalStorage();

        console.log(data);
    }

    /* CART */
    createNewCart(name){
        /**/
        let newCart = Array();
        carts.push(newCart);

        /* Cart Name */
        this.cartName(name);

        /* */
        this.objectCartDataLocalStorage();

        /* Clear to-do-list */
        Views.clearList();

        console.log(carts);
    }
    cartName(name){
        cartName.push(name);
        currentCart = name;

        /* currenCart sync */
        this.objectCurrentCartLocalStorage();

        /*  cartName[] sync */
        this.objectCartNameLocalStorage();
        console.log(cartName);
    }
    
    getCartName(){
        return cartName;
    }

    getCurrentCart(){
        return currentCart;
    }


    /* data - Local Storage Set-Update-Sync */
    objectDataLocalStorage() {
        lStore.set('todo', JSON.stringify(data));
    }

    /* carts - set|sync Cart */
    objectCartDataLocalStorage() {
        lStore.set('carts', JSON.stringify(carts));
    }

    /* cartName - set|sync todo list */
    objectCartNameLocalStorage() {
        lStore.set('cartName', JSON.stringify(cartName));
    }

    /* currentCart - set|sync */
    objectCurrentCartLocalStorage() {
        lStore.set('currentCart', JSON.stringify(currentCart));
    }
}
