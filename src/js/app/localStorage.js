export default class localStorage {
    constructor(){

    }

    set(key, val){
        window.localStorage.setItem(key, val);
    }

    get(key){
        return window.localStorage.getItem(key);

    }

    getAll(){
		//key(index) — Retrieves the name of the value in the given numeric position.
        let archive = {}, // Notice change here
            keys = Object.keys(window.localStorage),
            i = keys.length;

        while ( i-- ) {
            archive[ keys[i] ] = window.localStorage.getItem( keys[i] );
        }

        return archive;
    }

    remove(key){
        window.localStorage.removeItem(key);
    }

    clear(){
        window.localStorage.clear();
    }
}
