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

//cart eklendiği zaman Create Cart butonu ekrandan kalksın
//eğer seçilen kart boş ise menu kapanmıyor?
//menuye tekrar bakılacak
//son kart silindiği zaman itemleri kaldırılmıyor
//yeni cart oluşturulduğunda menu kapanıp input.focus olsun - focus ayrı bir func olsun
//redesign

//bu storage daki getAll nereden nasıl çalışıyor sayfa açılışında?

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