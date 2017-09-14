import render from './app/render'
import Events from './app/event'
import Cart from './app/cart'
import Menu from './app/menu'

/* Render Storaged Data */
render();

/* Events - bu fonkiyonlar bir classın constructerında çalıştırılsa burası daha temiz olsa? */
let Event = new Events();

/* Add Item */
Event.onKeyPress();
Event.addButtonClick();

/* Check Item */
Event.checkEvent();

/* Delete Item */
Event.deleteEvent();

/* Delete Cart */
Event.deleteCart();

/* Select Another Cart */
Event.selectCart();

/* Cart Processes */
new Cart();

/* Menu Toggle */
new Menu();

/*
  deleteCart() -> eğer seçili kart siliniyorsa yeni seçilen carttaki to-do-itemler listelenirken toDoList() kullanılıyor burada sidebar hide oluyor
  aynı şekilde selectCart yapıldığında cart itemleri boş ise toDoList() fonks. çalıştırılmıyor item varsa çalışınca sidebar hide oluyor
*/

/*
x.addEventListener('click', xFunction);
function xFunction(e){
	//tıklanan şey input değilse boş geç - yani bir tıklamada birden çok element yakalanırsa sadece inputu kayda alır
	if(e.target.matches('input')) return; 
}
*/

//Firebase Integration
