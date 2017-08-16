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

var sum = [1, 2, 3].reduce(
  function(total, num){ return total + num }, 0);

//üst üste kart ekleme seçme ve üst üste to-do-item ekleme check etme vs işlemlerinde sıkıntılar var
//bu işlemleri takip ederek yap sorunu debug et
//cart delete and css processes

/**
 * JS WORK
 * dökümantasyon
 * */

 /* Kaynak kodu okuma trickleri */
 /**
  * çok kullanılan düğüm noktaları bul oradan başla
  * bir library inceleyeceksen eski sürümlerinden birine git ile ulaş onu oku ~ basic halinin okumak için
  * dosya isimlerinden dosyaların bir biri ile ilişkisi düşünülebilir
  * en çok bağımlılık olan dosyalara bakılabilir
  */











