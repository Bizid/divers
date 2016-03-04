function findElementByClass(className){
    if(document.getElementsByClassName(className).length > 0){
        console.log(document.getElementsByClassName(className));
    }else {
         console.log("no such element");
    }
}
findElementByClass("section--wrap");
findElementByClass("section--wrap3");