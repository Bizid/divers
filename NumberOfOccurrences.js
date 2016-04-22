Array.prototype.numberOfOccurrences = function(x) {
    var freq = {};
    for (var i = 0; i < this.length; i++){
        if (freq[this[i]]) {
            freq[this[i]]++;
        } else {
            freq[this[i]] = 1;
        }
    }
    if(freq[x]){
         return freq[x];
    }else return 0;

}
var arr = [0,1,2,2,3];
arr.numberOfOccurrences(0)/* === 1*/;
arr.numberOfOccurrences(4) /* === 0*/;
arr.numberOfOccurrences(2) /*=== 2*/;
arr.numberOfOccurrences("a") /*=== 0*/;