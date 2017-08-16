//import {qs, on} from './app/helpers'
import Events from './app/event'
import render from './app/render'
import Cart from './app/cart'
import Menu from './app/menu'

/* Render Storaged Data */
render();

/* Events */
let Event = new Events();
Event.onKeyPress();
Event.checkEvent();
Event.deleteEvent();
Event.selectCart();

/* Menu Toggle */
new Menu();

/* Cart Processes */
new Cart();










