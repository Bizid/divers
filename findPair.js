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
       // var secondElem = input.hasOwnProperty(desiredSum - firstElem);

        if (secondElem > -1) {
            resultPair[firstElem] = input[secondElem];
            input.splice(secondElem, 1);
        }
        j++;
    }
    console.log(resultPair)
    return resultPair;
}
function findPair3(input, desiredSum){
    var map = [];
    var result= [];
    var index;
    for (var x = 0; x < input.length; x++) {
        if (map[input[x]] != null) {
            index = map[input[x]];
            result.push({leftPart : input[index] ,rightPart : input[x]});
        }
        else {
            map[desiredSum - input[x]] = x;
        }
    }
    return result;
}


function findPairSort(numbers, k) {
    numbers.sort();
    console.log(numbers);
    var left = 0;
    var right = numbers.length -1;
    while(left < right){
        var sum = numbers[left] + numbers[right];
        if(sum == k){
            console.log( numbers[left], numbers[right]);
            left = left + 1;
            right = right -1;
        }else if(sum < k){
            left = left +1;
        }else if (sum > k) {
            right = right -1;
        }
    }
}

