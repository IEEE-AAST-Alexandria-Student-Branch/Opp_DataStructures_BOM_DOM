/**
 * what is BOM?
 *
 * BOM is Browser Object Model
 *
 * BOM is a collection of objects that represent the browser and the browser's environment
 *
 * what can we do with BOM?
 *
 * we can do a lot of things with BOM
 *
 * for example:
 *
 * we can get the width and height of the browser window
 *
 * we can get the current URL
 *
 * we can redirect the browser to a new page
 *
 * we can reload the current page
 *
 * we can get information about the browser
 *
 * we can get information about the screen
 *
 *
 * all modern browsers implement the similar BOM
 *
 * window
 *
 * screen
 *
 * location
 *
 * history
 *
 * navigator
 *
 * timing
 *
 * cookies
 *
 *
 * the default object of the browser is the window object
 *
 * all global JavaScript objects, functions, and variables automatically become members of the window object
 *
 */

// #############################################################################

// console.log(window);

// console.log(window.innerHeight); // height of the browser window

// console.log(window.innerWidth);

// console.log(window.outerHeight); // height of the browser window including the height of the toolbar

// console.log(window.outerWidth);

// global console

// confirm("Are you sure?");

// prompt("Are you sure?");

// #############################################################################

// setTimeout(function () {}, 3000); // 3 seconds delay and then execute the function

// clearTimeout() // cancel the setTimeout

// setInterval(function () {}, 3000); // execute the function every 3 seconds

// clearInterval() // cancel the setInterval function execution every 3 seconds

// #############################################################################

// console.log(window.location);

// console.log(window.location.hostname);

// console.log(window.location.port);

// console.log(window.location.href);

// window.location.href = "https://www.google.com";

// window.location.reload();

// window.location.pathname;

// window.location.search;

// window.location.hash;

// window.location.protocol;

// window.location.assign("https://www.google.com");

// window.location.replace("https://www.google.com");

// #############################################################################

// console.log(window.history);

// window.history.go(-1); // go back one page

// window.history.go(1); // go forward one page

// window.history.go(2); // go forward two pages

// window.history.go(-2); // go back two pages

// window.history.length; // number of pages in the history

// history.back(); // go back one page

// history.forward(); // go forward one page

// #############################################################################

// console.log(window.navigator);

// console.log(window.navigator.appName);

// console.log(window.navigator.appVersion);

// console.log(window.navigator.userAgent);

// console.log(window.navigator.platform);

// console.log(window.navigator.vendor);

// console.log(window.navigator.language);

// console.log(window.navigator.cookieEnabled);

// console.log(window.navigator.geolocation);

// console.log(window.navigator.onLine);

// console.log(window.navigator.javaEnabled());

// console.log(window.navigator.getBattery());

// #############################################################################

// console.log(window.screen);

// console.log(window.screen.width);

// console.log(window.screen.height);

// console.log(window.screen.availWidth);

// console.log(window.screen.availHeight);

// console.log(window.screen.colorDepth);

// console.log(window.screen.pixelDepth);

// #############################################################################

// console.log(window.document.cookie);

// console.log(window.localStorage);

// console.log(window.sessionStorage);

// #############################################################################
