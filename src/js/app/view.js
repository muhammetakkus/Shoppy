
import {qs, on, addClass} from './helpers'
import localStorage from './localStorage'



let lStore = new localStorage();



export default class View {
    /* render(){

        render function neden burada sıkıntı oldu???

    }  */

    /* Add to-do Item */
    addToDOM(text, complate, id){
        /* LIST */
        let li = `<li ${(complate == true) ? "class=check": ""}>
                    <input type="checkbox" id="${id}" class="to-do-checkbox" data-id="${id}" ${(complate == true) ? "checked" : "" } />
                    <label for="${id}">
                        <span class="to-do-text" data-id="${id}">${text}</span>
                        <span class="done-line"></span>
                    </label>
                    <span class="delete" id="${id}">x</span>
                  </li>`;

        /* li 'yi başa ekle */
        qs(".to-do-list").insertAdjacentHTML('afterbegin', li);
    }

    /* Clear to-do List Items */
    clearList(){
        let toDoListParent = qs(".to-do-list");
        while (toDoListParent.firstChild) {
            //toDoListParent.removeChild(toDoListParent.firstChild);
            toDoListParent.firstChild.remove();
        }
    }

    /* Gelen To-Do objesini listeler */
    listToDo(data){
        //
        qs(".panel").classList.add('hide');

        //
        if(typeof data !== 'undefined'){
            let count = data.todo.length;

            if(count > 0){
                for (let i = 0; i < count; i++){
                    /* */
                    let val = data.todo[i];
                    let complate = data.complated[i];

                    /* List New Cart's Items*/
                    this.addToDOM(val, complate, i);
                }

                //
                if(qs("span.text") != null)
                    qs("span.text").classList.add('hide');
            }else {
                //
                if(qs("span.text") != null)
                    qs("span.text").classList.remove('hide');
            }
        }else {
            //
            if(qs("span.text") != null)
                qs("span.text").classList.remove('hide');
        }

    }

    /**
     * @param string status add || remove - cartta item durumu için uyarı mesajının ekle/kaldır durumunu ayarlamak için
     */
    itSeemsEmpty(status){
        if(status === "add"){
            if(qs("span.text") != null) qs("span.text").classList.remove('hide');
        } else if(status === "remove"){
            if(qs("span.text") != null) qs("span.text").classList.add('hide');
        }
    }

}
