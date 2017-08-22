import {qs, on} from './app/helpers'
import Events from './app/event'
import render from './app/render'
import Cart from './app/cart'
import Menu from './app/menu'

/* Render Storaged Data */
render();

/* Events - bu fonkiyonlar bir classın contructerında çalıştırılsa burası daha temiz olsa?*/
let Event = new Events();
Event.onKeyPress();
Event.checkEvent();
Event.deleteEvent();
Event.deleteCart(); //?
Event.selectCart();

/* Cart Processes */
new Cart();

/* Menu Toggle */
new Menu();

//PUSH - LOCAL - storage işlemlerinde bir sorun var 

