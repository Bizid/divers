/**
 * Created by tealabi on 3/29/16.
 */
function maximumDifference (input){
    var max = 0;
    var maxI = 0;

    for(var i= 0; i < input.length ; i++){
        if(max < input[i]){
            max = input[i];
            maxI = i;
        }
    }
    
    var min = max;
    for(var j= 0; j < maxI ; j++){
        if(min > input[j]){
            min = input[j];
        }
    }
    return (max - min);
}
console.log(maximumDifference ([2, 3, 10, 2, 4, 8, 1]));
console.log(maximumDifference ([7, 9, 5, 6, 3, 2]));