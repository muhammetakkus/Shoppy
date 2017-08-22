
import localStorage from './localStorage'
import View from './view'

let Views = new View();
let lStore = new localStorage();

//Old Data Obj
/* let data = (lStore.get('todo')) ? JSON.parse(lStore.get('todo')):{
    todo: [],
    complated: []
}; */

//Empty Data Obj
let item = {
    todo: [],
    complated: []
};

//All Data
let carts = (lStore.get('carts')) ? JSON.parse(lStore.get('carts')):[];
//Cart Names
let cartNames = (lStore.get('cartNames')) ? JSON.parse(lStore.get('cartNames')):[];
//Current Cart Name
let currentCart = (lStore.get('currentCart')) ? JSON.parse(lStore.get('currentCart')):"";

export default class Storage {
    /*constructor(){
        this.data;
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
        let indexOfCurrentCart = cartNames.indexOf(currentCart);
        
        /* if(typeof carts[indexOfCurrentCart][0] == 'undefined'){
            carts[indexOfCurrentCart].push(item);
        } */

        carts[indexOfCurrentCart]["0"].todo.push(text);
        carts[indexOfCurrentCart]["0"].complated.push(false);    
        
        //sync
        this.objectCartDataLocalStorage();
    }

    /* CART */
    createNewCart(name){
        let cartAvailableStatus = true;

        //eğer eklenen ilk cart değilse cart isimlerini tutan cartNa
        if(cartNames.length > 0){
            cartNames.map((e) => {
                if(e === name)
                    cartAvailableStatus = false //eklenmek istenen kart isminde bir kart zaten mevcut
            });
        }

        if(cartAvailableStatus === true){
            /**/
            let newCart = Array();
            carts.push(newCart);

            /* Cart Name */
            this.addCartName(name);

            /* */
            this.objectCartDataLocalStorage();

            /* Clear to-do-list */
            Views.clearList();

            return true;
        }else {
            return false;
        }

        console.log(carts);
    }
    addCartName(name){
        cartNames.push(name);
        currentCart = name;

        /* currenCart sync */
        this.objectCurrentCartLocalStorage();

        /*  cartNames[] sync */
        this.objectCartNameLocalStorage();
    }

    /* Change Current Cart */
    changeCurrentCart(newCartName){
        currentCart = newCartName;
        this.objectCurrentCartLocalStorage();
    }
    
    getAll() {
        //return data;
        let indexOfCurrentCart = cartNames.indexOf(currentCart);

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
        let indexOfCurrentCart = cartNames.indexOf(currentCart);
        return carts[indexOfCurrentCart][0].todo[id];
    }

    /**
     * @param {*} id 
     * @param {*} complated 
     */
    updateItem(id, complated){
        //data.complated[id] = complated;
        
        let indexOfCurrentCart = cartNames.indexOf(currentCart);
        carts[indexOfCurrentCart][0].complated[id] = complated;

        //sync carts
        this.objectCartDataLocalStorage();
    }

    /**
     * @param id
     */
    deleteItem(id){
        //data objesi ile işlem yapıp data yı localSotarege da todo keyine atama işlemini tekrarlıyoruz
        //her data objesi üzerinde değişiklikte bu update işlemini yapıyoruz
        //böylece data == localSroge oluyor
        
        //for carts data
        let indexOfCurrentCart = cartNames.indexOf(currentCart);
        carts[indexOfCurrentCart][0].complated.splice(id, 1);
        carts[indexOfCurrentCart][0].todo.splice(id, 1);

        //sync carts
        this.objectCartDataLocalStorage();
    }

    
    
    getCartNames(){
        return cartNames;
    }

    getCurrentCart(){
        return currentCart;
    }

    deleteCart(name){
        //cart isimleri içerisindeki index'ini bul
        let indexOfCart = cartNames.indexOf(name);
        
        //cart içerisinden index numarasına sahip array'i kaldır
        cartNames.splice(indexOfCart,1)
        carts.splice(indexOfCart,1)

        //sync data
        this.objectCartDataLocalStorage();
        //sync cartNames 
        this.objectCartNameLocalStorage();

        return true;
    }

    /* data - Local Storage Set-Update-Sync */
    /* objectDataLocalStorage() {
        lStore.set('todo', JSON.stringify(data));
    } */

    /* carts - set|sync Cart */
    objectCartDataLocalStorage() {
        lStore.set('carts', JSON.stringify(carts));
    }

    /* addCartName - set|sync todo list */
    objectCartNameLocalStorage() {
        lStore.set('cartNames', JSON.stringify(cartNames));
    }

    /* currentCart - set|sync */
    objectCurrentCartLocalStorage() {
        lStore.set('currentCart', JSON.stringify(currentCart));
    }
}
