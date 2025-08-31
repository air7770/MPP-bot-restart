// ==UserScript==
// @name         AirBot restart
// @namespace    https://github.com/air7770/MPP-bot-restart
// @version      0.1.0-BETA
// @description  restart AirBot
// @author       Nelix
// @include      *https://multiplayerpiano.net/*
// @match        *https://multiplayerpiano.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// ==/UserScript==

MPP.client.on("a", function(msg) {
     let cmd = msg.a;
     let version = "0.1.0-BETA";
     let cs = MPP.chat.send;

if (cmd == "/помощь") {
    cs("Команды: /помощь /вер, /созд, /ошибкаВботе");
}
if (cmd == "/созд") {
    cs("Creat bot: Nelix (Airs)");
}
if (cmd == "/вер") {
    cs("Version bots: " + version);
}
if (cmd == "/ошибкаВботе") {
    cs("https://github.com/air7770/MPP-bot-restart/issues");
}
if (cmd == "айайай") {
   ("https://docs.google.com/document/d/1wQvGwQdaI8PuEjSWxKDDThVIoAlCYIxQOyfyi4o6HcM/edit?pli=1&tab=t.0");
}


if (cmd == "/help") {
    cs("Cmd: /help, /ver, /creat, /errorInBot");
}
if (cmd == "/creat") {
    cs("Creat bot: Nelix (Airs)");
}
if (cmd == "/ver") {
    cs("Version bots: " + version);
}
if (cmd == "/errorInBot") {
    cs("https://github.com/air7770/MPP-bot-restart/issues");
}
if (cmd == "айайай") {
   ("https://docs.google.com/document/d/1wQvGwQdaI8PuEjSWxKDDThVIoAlCYIxQOyfyi4o6HcM/edit?pli=1&tab=t.0");
}
})();