function test(){
    var scrollPos = window.scrollY;
    var distance = 138;
    var menu = document.getElementById("dropdown");
    if(scrollPos < distance){
        menu.style.position = "absolute";
        menu.style.top = distance + "px";
    }
    else{
        menu.style.position = "fixed";
        menu.style.top = 0 + "px";
    }
    window.setInterval(test, 100);
}