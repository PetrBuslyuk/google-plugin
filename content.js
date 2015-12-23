var jquery = document.createElement('script');
jquery.src = chrome.extension.getURL('jquery-2.1.4.min.js');
(document.head || document.documentElement).appendChild(jquery);

var gmail = document.createElement('script');
gmail.src = chrome.extension.getURL('gmail.js');
(document.head || document.documentElement).appendChild(gmail);

var main = document.createElement('script');
main.src = chrome.extension.getURL('main.js');
(document.head || document.documentElement).appendChild(main);
