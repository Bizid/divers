/**
 * Created by tealabi on 3/24/16.
 */
function findPair(input, desiredSum) {
var k =0;
    for (var i = 0; i < input.length ; i++) {
        var firstElem = input[i];

        for (var j = i ; j < input.length ; j++) {
            if (firstElem + input[j] == desiredSum ){
                console.log(firstElem, input[j]);
                //return [firstElem, input[j]];
            }
            k++;

        }
    }
    console.log(k);
}


function findPair2(input, desiredSum){
    var resultPair = {};
    var j = 0;
    for (var i = 0; i < input.length ; i++) {
        var firstElem = input[i];
        var secondElem = input.indexOf(desiredSum - firstElem);
        if (secondElem > -1) {
            resultPair[firstElem] = input[secondElem];
            input.splice(secondElem, 1);
        }
        j++;
    }
    return resultPair;
}

findPair2([3, 5, 7, 9, 4, 8, 25, 12, 4, 9, 16, 5], 28);
findPair([3, 5, 7, 9, 4, 8, 25, 12, 4, 9, 16, 5], 28);