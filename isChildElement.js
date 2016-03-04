function isChildElementOF(x,y){
    x = "." + x;
    var res= false;
    children = document.querySelectorAll(x);
    for(var i=0; i <  children[0].children.length; i++){;
        var z = children[0].children[i].className;
        if (z.indexOf(y) > -1 ){
            console.log(z + "children");
            res= true;
        }
    }
    return res;
}


isChildElementOF("section--wrap" ,"menu-wrapper");
isChildElementOF("menu-wrapper", "section--wrap");
isChildElementOF("menu-wrapper", "section--wrap3");