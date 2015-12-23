var checkBtn = document.getElementById('check');

checkBtn.onclick = function(){
    var cbx = document.getElementById("flags").getElementsByTagName("input"), mas = [];

    for (var i=0; i < cbx.length; i++) {
        if (cbx[i].type == "checkbox" && cbx[i].checked) {
            mas.push(cbx[i].value);
        }
    }

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, mas);
    });
};