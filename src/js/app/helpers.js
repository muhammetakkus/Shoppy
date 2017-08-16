/**
 * querySelector, jQuery style
 *
 * @param selector
 * @returns {Element}
 */
export function $(selector) {
    return document.querySelector(selector);
}

/**
 * querySelector wrapper
 *
 * @param {string} selector Selector to query
 * @param {Element} [scope] Optional scope element for the selector
 */
export function qs(selector, scope) {
    return (scope || document).querySelector(selector);
}

/**
 * addEventListener wrapper
 *
 * @param {Element|Window} target Target Element
 * @param {string} type Event name to bind to
 * @param {Function} callback Event callback
 */
export function on(target, type, callback) {
    target.addEventListener(type, callback);
}

/**
 * addClass
 *
 * @param selector
 * @param className
 */
export function addClass(selector, className) {
    selector.classList.add(className);
}

/**
 * removeClass
 *
 * @param selector
 * @param className
 */
export function removeClass(selector, className) {
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
export const escapeForHTML = s => s.replace(/[&<]/g, c => c === '&' ? '&amp;' : '&lt;');

