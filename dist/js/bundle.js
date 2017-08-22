/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "C:\\wamp64\\www\\Shoppy\\dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = $;
exports.qs = qs;
exports.on = on;
exports.addClass = addClass;
exports.removeClass = removeClass;
/**
 * querySelector, jQuery style
 *
 * @param selector
 * @returns {Element}
 */
function $(selector) {
  return document.querySelector(selector);
}

/**
 * querySelector wrapper
 *
 * @param {string} selector Selector to query
 * @param {Element} [scope] Optional scope element for the selector
 */
function qs(selector, scope) {
  return (scope || document).querySelector(selector);
}

/**
 * addEventListener wrapper
 *
 * @param {Element|Window} target Target Element
 * @param {string} type Event name to bind to
 * @param {Function} callback Event callback
 */
function on(target, type, callback) {
  target.addEventListener(type, callback);
}

/**
 * addClass
 *
 * @param selector
 * @param className
 */
function addClass(selector, className) {
  selector.classList.add(className);
}

/**
 * removeClass
 *
 * @param selector
 * @param className
 */
function removeClass(selector, className) {
  selector.classList.remove(className);
}

/**
 * Encode less-than and ampersand characters with entity codes to make user-
 * provided text safe to parse as HTML.
 *
 * @param {string} s String to escape
 *
 * @returns {string} String with unsafe characters escaped with entity codes
 */
var escapeForHTML = exports.escapeForHTML = function escapeForHTML(s) {
  return s.replace(/[&<]/g, function (c) {
    return c === '&' ? '&amp;' : '&lt;';
  });
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _localStorage = __webpack_require__(2);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _view = __webpack_require__(3);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Views = new _view2.default();
var lStore = new _localStorage2.default();

/* let data = (lStore.get('todo')) ? JSON.parse(lStore.get('todo')):{
    todo: [],
    complated: []
}; */

var item = {
    todo: [],
    complated: []
};

var carts = lStore.get('carts') ? JSON.parse(lStore.get('carts')) : [];
var _cartNames = lStore.get('cartNames') ? JSON.parse(lStore.get('cartNames')) : [];
var currentCart = lStore.get('currentCart') ? JSON.parse(lStore.get('currentCart')) : "";

var Storage = function () {
    function Storage() {
        _classCallCheck(this, Storage);
    }

    _createClass(Storage, [{
        key: 'addItem',

        /*constructor(){
            this.data;
        }*/

        value: function addItem(text, id) {
            console.log(carts);
            console.log(currentCart);

            /* Store  */
            this.store(text);

            /* Add HTML Item */
            Views.addToDOM(text, false, id);

            //
            console.log(carts);
        }
    }, {
        key: 'store',
        value: function store(text) {
            var indexOfCurrentCart = _cartNames.indexOf(currentCart);

            /* if(typeof carts[indexOfCurrentCart][0] == 'undefined'){
                carts[indexOfCurrentCart].push(item);
            } */

            console.log(carts[indexOfCurrentCart]["0"]);

            carts[indexOfCurrentCart]["0"].todo.push(text);
            carts[indexOfCurrentCart]["0"].complated.push(false);

            console.log(carts);

            //sync
            this.objectCartDataLocalStorage();
        }

        /* Change Current Cart */

    }, {
        key: 'changeCurrentCart',
        value: function changeCurrentCart(newCartName) {
            currentCart = newCartName;
            this.objectCurrentCartLocalStorage();
        }
    }, {
        key: 'getAll',
        value: function getAll() {
            //return data;
            var indexOfCurrentCart = _cartNames.indexOf(currentCart);

            if (indexOfCurrentCart > -1) {
                /* Sadece kart oluşturulmuşsa o kartın içine boş obj push et */
                if (typeof carts[indexOfCurrentCart][0] == 'undefined') {
                    carts[indexOfCurrentCart].push(item);
                }

                return carts[indexOfCurrentCart][0];
            }
        }

        /**
         * @param id
         * @returns {*}
         */

    }, {
        key: 'getItem',
        value: function getItem(id) {
            var indexOfCurrentCart = _cartNames.indexOf(currentCart);
            return carts[indexOfCurrentCart][0].todo[id];
        }

        /**
         * @param {*} id 
         * @param {*} complated 
         */

    }, {
        key: 'updateItem',
        value: function updateItem(id, complated) {
            //data.complated[id] = complated;

            var indexOfCurrentCart = _cartNames.indexOf(currentCart);
            carts[indexOfCurrentCart][0].complated[id] = complated;

            //sync carts
            this.objectCartDataLocalStorage();
        }

        /**
         * @param id
         */

    }, {
        key: 'deleteItem',
        value: function deleteItem(id) {
            //data objesi ile işlem yapıp data yı localSotarege da todo keyine atama işlemini tekrarlıyoruz
            //her data objesi üzerinde değişiklikte bu update işlemini yapıyoruz
            //böylece data == localSroge oluyor

            //for carts data
            var indexOfCurrentCart = _cartNames.indexOf(currentCart);
            carts[indexOfCurrentCart][0].complated.splice(id, 1);
            carts[indexOfCurrentCart][0].todo.splice(id, 1);

            //sync carts
            this.objectCartDataLocalStorage();
        }

        /* CART */

    }, {
        key: 'createNewCart',
        value: function createNewCart(name) {
            /**/
            var newCart = Array();
            carts.push(newCart);

            /* Cart Name */
            this.cartNames(name);

            /* */
            this.objectCartDataLocalStorage();

            /* Clear to-do-list */
            Views.clearList();

            console.log(carts);
        }
    }, {
        key: 'cartNames',
        value: function cartNames(name) {
            _cartNames.push(name);
            currentCart = name;

            /* currenCart sync */
            this.objectCurrentCartLocalStorage();

            /*  cartNames[] sync */
            this.objectCartNameLocalStorage();
            console.log(_cartNames);
        }
    }, {
        key: 'getCartNames',
        value: function getCartNames() {
            return _cartNames;
        }
    }, {
        key: 'getCurrentCart',
        value: function getCurrentCart() {
            return currentCart;
        }
    }, {
        key: 'deleteCart',
        value: function deleteCart(name) {
            //cart isimleri içerisindeki index'ini bul
            var indexOfCart = _cartNames.indexOf(name);

            //cart içerisinden index numarasına sahip array'i kaldır
            _cartNames.splice(indexOfCart, 1);
            carts.splice(indexOfCart, 1);

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

    }, {
        key: 'objectCartDataLocalStorage',
        value: function objectCartDataLocalStorage() {
            lStore.set('carts', JSON.stringify(carts));
        }

        /* cartNames - set|sync todo list */

    }, {
        key: 'objectCartNameLocalStorage',
        value: function objectCartNameLocalStorage() {
            lStore.set('cartNames', JSON.stringify(_cartNames));
        }

        /* currentCart - set|sync */

    }, {
        key: 'objectCurrentCartLocalStorage',
        value: function objectCurrentCartLocalStorage() {
            lStore.set('currentCart', JSON.stringify(currentCart));
        }
    }]);

    return Storage;
}();

exports.default = Storage;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var localStorage = function () {
    function localStorage() {
        _classCallCheck(this, localStorage);
    }

    _createClass(localStorage, [{
        key: "set",
        value: function set(key, val) {
            window.localStorage.setItem(key, val);
        }
    }, {
        key: "get",
        value: function get(key) {
            return window.localStorage.getItem(key);
        }
    }, {
        key: "getAll",
        value: function getAll() {
            //key(index) — Retrieves the name of the value in the given numeric position.
            var archive = {},
                // Notice change here
            keys = Object.keys(window.localStorage),
                i = keys.length;

            while (i--) {
                archive[keys[i]] = window.localStorage.getItem(keys[i]);
            }

            return archive;
        }
    }, {
        key: "remove",
        value: function remove(key) {
            window.localStorage.removeItem(key);
        }
    }, {
        key: "clear",
        value: function clear() {
            window.localStorage.clear();
        }
    }]);

    return localStorage;
}();

exports.default = localStorage;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = __webpack_require__(0);

var _localStorage = __webpack_require__(2);

var _localStorage2 = _interopRequireDefault(_localStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lStore = new _localStorage2.default();

var View = function () {
    function View() {
        _classCallCheck(this, View);
    }

    _createClass(View, [{
        key: 'addToDOM',

        /* render(){
              render function neden burada sıkıntı oldu???
          }  */

        /* Add to-do Item */
        value: function addToDOM(text, complate, id) {
            /* LIST */
            var li = '<li ' + (complate == true ? "class=check" : "") + '>\n                    <input type="checkbox" id="' + id + '" class="to-do-checkbox" data-id="' + id + '" ' + (complate == true ? "checked" : "") + ' />\n                    <label for="' + id + '">\n                        <span class="to-do-text" data-id="' + id + '">' + text + '</span>\n                        <span class="done-line"></span>\n                    </label>\n                    <span class="delete" id="' + id + '">x</span>\n                  </li>';

            /* li 'yi başa ekle */
            (0, _helpers.qs)(".to-do-list").insertAdjacentHTML('afterbegin', li);
        }

        /* Clear to-do List Items */

    }, {
        key: 'clearList',
        value: function clearList() {
            var toDoListParent = (0, _helpers.qs)(".to-do-list");
            while (toDoListParent.firstChild) {
                //toDoListParent.removeChild(toDoListParent.firstChild);
                toDoListParent.firstChild.remove();
            }
        }

        /* Gelen To-Do objesini listeler */

    }, {
        key: 'listToDo',
        value: function listToDo(data) {
            if (typeof data !== 'undefined') {
                var count = data.todo.length;

                for (var i = 0; i < count; i++) {
                    /* */
                    var val = data.todo[i];
                    var complate = data.complated[i];

                    /* List New Cart's Items*/
                    this.addToDOM(val, complate, i);

                    //
                    (0, _helpers.qs)(".panel").classList.add('hide');
                }
            }
        }
    }]);

    return View;
}();

exports.default = View;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = __webpack_require__(0);

var _storage = __webpack_require__(1);

var _storage2 = _interopRequireDefault(_storage);

var _view = __webpack_require__(3);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DB = new _storage2.default();
var Views = new _view2.default();

var input = (0, _helpers.qs)(".to-do-input");

var Events = function () {
    function Events() {
        _classCallCheck(this, Events);
    }

    _createClass(Events, [{
        key: 'onKeyPress',
        value: function onKeyPress() {
            (0, _helpers.on)(input, 'keypress', function (e) {

                if (e.charCode === 13) {
                    /* Get to-do Value */
                    var toDoValue = input.value;

                    if (toDoValue != "") {
                        /* LAST ID */
                        var data = DB.getAll();
                        var id = data.todo.length;

                        /* INSERT */
                        DB.addItem(toDoValue, id);

                        input.value = '';
                    }
                }

                return false;
            });
        }
    }, {
        key: 'addButtonClick',
        value: function addButtonClick() {
            /* Get to-do Value */
            var toDoValue = input.value;

            if (toDoValue != "") {
                /* LAST ID */
                var data = storage.list();
                var id = data.todo.length;

                /* INSERT */
                DB.addItem(toDoValue, id);

                input.value = '';
            }
        }
    }, {
        key: 'checkEvent',
        value: function checkEvent() {
            (0, _helpers.on)(document, 'change', function (event) {
                if (event.target && event.target.className === 'to-do-checkbox') {
                    var id = event.target.getAttribute("data-id");

                    if (event.target.checked === true) {
                        //event.target.parentElement.classList.add("check");
                        (0, _helpers.addClass)(event.target.parentElement, "check");

                        if (id > -1) {
                            DB.updateItem(id, true);
                        }
                    } else {
                        //event.target.parentElement.classList.remove("check");
                        (0, _helpers.removeClass)(event.target.parentElement, "check");

                        if (id > -1) {
                            DB.updateItem(id, false);
                        }
                    }
                }
            });
        }

        /* Delete Item */

    }, {
        key: 'deleteEvent',
        value: function deleteEvent() {
            (0, _helpers.on)((0, _helpers.qs)("body"), 'click', function (event) {
                if (event.target && event.target.className === 'delete') {
                    if (event.target.hasAttribute("id") === true) {
                        var id = event.target.getAttribute("id");

                        console.log("deleted id:" + id);

                        if (id > -1) {
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

    }, {
        key: 'selectCart',
        value: function selectCart() {
            var cart = document.querySelectorAll(".panel .carts li");
            var cartName = void 0;
            cart.forEach(function (element) {
                (0, _helpers.on)((0, _helpers.qs)('body'), 'click', function (event) {
                    if (event.target && event.target.classList.contains('cart-item') || event.target.className == "cart-text") {

                        //eğer tıklanan cart-text ise cartName'i almak için parent li'ye ulaş
                        if (event.target.className == "cart-text") {
                            cartName = event.target.parentElement.getAttribute('cart-name');
                        } else {
                            cartName = event.target.getAttribute('cart-name');
                        }

                        //remove .selected-cart class all cart
                        document.querySelectorAll(".panel .carts li").forEach(function (item) {
                            (0, _helpers.removeClass)(item, "selected-cart");
                        });

                        //tıklanan eğer span.cart-text ise parent li'sine select-cart class'ını ata
                        if (event.target.className == "cart-text") {
                            (0, _helpers.addClass)(event.target.parentElement, "selected-cart");
                        } else {
                            (0, _helpers.addClass)(event.target, "selected-cart");
                        }

                        //clear to-do-list-items
                        Views.clearList();

                        //currentCart'ı seçilen ile değiştir
                        DB.changeCurrentCart(cartName);

                        /* Yeni listeyi al ve listele */
                        var data = DB.getAll();
                        Views.listToDo(data);
                    }
                });
            }, this);
        }

        /* List Carts */

    }, {
        key: 'cartList',
        value: function cartList(name) {
            //
            var previousSelectedCart = document.querySelectorAll(".cart-item");
            if (typeof previousSelectedCart[0] !== "undefined") {
                (0, _helpers.removeClass)(previousSelectedCart[0], "selected-cart");
            }

            //
            var cart = '<li class=\'cart-item selected-cart\' cart-name=\'' + name + '\'>\n                        <span class=\'cart-text\'>' + name + '</span>\n                        <span class=\'cart-delete\'>x</span>    \n                    </li>';
            (0, _helpers.qs)(".panel .carts").insertAdjacentHTML("afterbegin", cart);
        }

        /* Delete Cart */

    }, {
        key: 'deleteCart',
        value: function deleteCart() {
            (0, _helpers.on)((0, _helpers.qs)("body"), 'click', function (event) {
                if (event.target && event.target.className === 'cart-delete') {
                    if (event.target.parentElement.hasAttribute("cart-name") === true) {
                        var cartName = event.target.parentElement.getAttribute("cart-name");

                        console.log("deleted cart:" + cartName);

                        var delCart = DB.deleteCart(cartName);

                        //remove in DOM
                        if (delCart === true) {
                            //
                            var deletedCartElement = (0, _helpers.qs)('ul.carts li[cart-name=' + cartName + ']');
                            deletedCartElement.remove();

                            //silinen kart eğer kart yoksa boş - kart varsa ilk kartın cart-name'i alıp gönder
                            if (DB.getCurrentCart() === cartName) {
                                var availableCarts = DB.getCartNames();
                                var countAvailableCarts = availableCarts.length;
                                if (countAvailableCarts > 0) {
                                    var newCartName = availableCarts[countAvailableCarts - 1];
                                    DB.changeCurrentCart(newCartName);
                                } else {
                                    DB.changeCurrentCart("");
                                }

                                //eğer seçili kart silinirse to-do-list itemleri kaldır
                                var toDoListParent = (0, _helpers.qs)(".to-do-list");
                                while (toDoListParent.firstChild) {
                                    //toDoListParent.removeChild(toDoListParent.firstChild);
                                    toDoListParent.firstChild.remove();
                                }

                                //list new selected cart
                                Views.listToDo(DB.getAll());
                            }
                        }
                    }
                }
            });
        }
    }]);

    return Events;
}();

exports.default = Events;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helpers = __webpack_require__(0);

var _event = __webpack_require__(4);

var _event2 = _interopRequireDefault(_event);

var _render = __webpack_require__(6);

var _render2 = _interopRequireDefault(_render);

var _cart = __webpack_require__(7);

var _cart2 = _interopRequireDefault(_cart);

var _menu = __webpack_require__(8);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Render Storaged Data */
(0, _render2.default)();

/* Events - bu fonkiyonlar bir classın contructerında çalıştırılsa burası daha temiz olsa?*/
var Event = new _event2.default();
Event.onKeyPress();
Event.checkEvent();
Event.deleteEvent();
Event.deleteCart(); //?
Event.selectCart();

/* Cart Processes */
new _cart2.default();

/* Menu Toggle */
new _menu2.default();

//PUSH - LOCAL - storage işlemlerinde bir sorun var

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = render;

var _helpers = __webpack_require__(0);

var _storage = __webpack_require__(1);

var _storage2 = _interopRequireDefault(_storage);

var _view = __webpack_require__(3);

var _view2 = _interopRequireDefault(_view);

var _localStorage = __webpack_require__(2);

var _localStorage2 = _interopRequireDefault(_localStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DB = new _storage2.default();
var Views = new _view2.default();
var lStore = new _localStorage2.default();

function render() {
    /* constructor
    {
      } */

    //Eğer daha önce cart oluşturulmuşsa desktop'daki Create Cart butonu görünmesin
    if (DB.getCartNames().length > 0) {
        (0, _helpers.qs)('.create-cart-button-desktop').style.display = 'none';
    }

    /* lStore.clear(); */

    console.log('mevcut cartlar: ' + DB.getCartNames());
    console.log('şu anki cart: ' + DB.getCurrentCart());
    console.log(DB.getAll());

    /* Get and List the Data */
    var data = DB.getAll();
    Views.listToDo(data);

    /* List Carts */
    var carts = DB.getCartNames();
    var currentCart = DB.getCurrentCart();
    var countCart = carts.length;
    if (countCart > 0) {
        var cart = void 0;
        carts.forEach(function (element) {
            cart = '<li \n                        class=\'cart-item ' + (element == currentCart ? 'selected-cart' : '') + '\' \n                        cart-name=\'' + element + '\'>\n                        <span class=\'cart-text\'>' + element + '</span>\n                        <span class=\'cart-delete\'>x</span>\n                    </li>';
            (0, _helpers.qs)(".panel .carts").insertAdjacentHTML("afterbegin", cart);
        }, this);
    }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = __webpack_require__(0);

var _storage = __webpack_require__(1);

var _storage2 = _interopRequireDefault(_storage);

var _event = __webpack_require__(4);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Events = new _event2.default();
var DB = new _storage2.default();

var menuCreateCartButton = (0, _helpers.qs)('.create-cart-wrap .new-cart');
var menuCartInputWrap = (0, _helpers.qs)('.create-cart-wrap .cart-input-wrap');
var menuCartNameAddButton = (0, _helpers.qs)('.create-cart-wrap .add-button');
var menuCartInput = (0, _helpers.qs)('.create-cart-wrap .cart-input');
var panel = (0, _helpers.qs)(".panel");

var Cart = function () {
    function Cart() {
        var _this = this;

        _classCallCheck(this, Cart);

        /* Desktop Create Cart Button - Eğer Cart Yoksa Anasayfada Menüyü Açacak Olan Create Butonu*/
        var desktopCreateCartButton = (0, _helpers.qs)('.create-cart-button-desktop');
        (0, _helpers.on)(desktopCreateCartButton, 'click', function () {
            panel.classList.remove('hide');
        });

        /* Menu Create Button Click Event */
        (0, _helpers.on)(menuCreateCartButton, 'click', function (e) {
            menuCreateCartButton.style.display = "none";
            menuCartInputWrap.style.display = "block";
            menuCartInput.focus();
        });

        /* Add Cart | Add Button Click */
        (0, _helpers.on)(menuCartNameAddButton, 'click', function (e) {
            var cartName = menuCartInput.value;
            if (cartName) {
                _this.addCart(cartName);

                //
                menuCreateCartButton.style.display = "block";
                menuCartInputWrap.style.display = "none";

                //
                menuCartInput.value = "";
            }
        });

        /* Add Cart | Cart Input Enter Keypress */
        (0, _helpers.on)(menuCartInput, 'keypress', function (e) {
            if (e.charCode === 13) {
                var cartName = menuCartInput.value;
                if (cartName) {
                    _this.addCart(cartName);

                    //
                    menuCreateCartButton.style.display = "block";
                    menuCartInputWrap.style.display = "none";

                    //
                    menuCartInput.value = "";
                }
            }
        });
    }

    _createClass(Cart, [{
        key: 'addCart',
        value: function addCart(name) {
            //cart ismi mevcut ise zaten böyle bir kart var uyarısı ver - kontolünü yap 

            if (name.trim() != "") {
                /* */
                DB.createNewCart(name);

                //remove .selected-cart class all cart
                document.querySelectorAll(".panel .carts li").forEach(function (item) {
                    (0, _helpers.removeClass)(item, "selected-cart");
                });

                /* Add To DOM new cart */
                Events.cartList(name);

                //
                (0, _helpers.qs)(".panel").classList.add('hide');
            }
        }
    }]);

    return Cart;
}();

exports.default = Cart;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helpers = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var burgerMenu = (0, _helpers.qs)(".hamburger");
var panel = (0, _helpers.qs)(".panel");
var panelElements = document.querySelectorAll(".panel *");

var Menu = function Menu() {
    _classCallCheck(this, Menu);

    (0, _helpers.on)(burgerMenu, 'click', function () {
        panel.classList.toggle('hide');
        console.log();
    });

    (0, _helpers.on)(document, 'click', function (e) {
        //tıklanan şey .panel değilse ve .haburger classını'da içermiyorsa
        if (e.target.nodeName === "HTML" || e.target.nodeName === "H4") {
            if (!panel.classList.contains('hide')) {
                panel.classList.add('hide');
            }
        }

        //console.log(panel.childNodes);
        /* panelElements.forEach(function(elem) {
            console.log(elem)
        }, this); */
    });
};

exports.default = Menu;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map