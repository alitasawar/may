// document.body.style.background="red"
// console.log("hello");
// my = ()=>alert()

setInterval(() => {
    // window.location.reload() 
    sec=Math.ceil(Math.random()*999)
    document.body.style.background=`#${sec}`
    
    chrome.tabs.getSelected(null, function(tab) {
        var code = 'window.location.reload();';
        chrome.tabs.executeScript(tab.id, {code: code});
      });
    // var elt = document.createElement("script");
    // elt.innerHTML = "window.foo = {bar:function(){window.location.reload()}};"
    // // elt.innerHTML = ""
    // document.head.appendChild(elt);
    
},2000);


