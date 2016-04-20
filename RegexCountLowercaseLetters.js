function lowercaseCount(str){
    var i=0;
    var res = 0;
    var character='';
    while (i <= str.length){
        character = str.charAt(i);

        if (!isLetter(character)){
            //if (!isNaN(character * 1)){
        }else{
            if (character == character.toLowerCase()){
                // console.log (character + 'lower case true');
                res++;
            }
        }
        i++;
    }
    return res;
}
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

lowercaseCount("abc"); // 3

lowercaseCount("abcABC123"); // 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); // 3

lowercaseCount(""); // 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); // 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); // 26