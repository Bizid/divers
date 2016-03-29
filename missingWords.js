/**
 * Created by tealabi on 3/29/16.
 */
function missingWords(s, t) {
    var leftPart = s.split(" ");
    var rightPart = t.split(" ");
    var arr = [];
    for(var i =0; i < leftPart.length; i++ ){
        var pos = rightPart.indexOf(leftPart[i]);
        if(pos < 0){
            arr.push(leftPart[i]);
        }
    }
    return arr;
}
var s = "I am using hackerrank to improve programming";
var t = "am hackerrank to improve";
console.log(missingWords(s, t));