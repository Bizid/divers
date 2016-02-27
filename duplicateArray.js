function duplicateList(arr1, arr2){
  var res = [];
  
  for(var i = 0; i < arr1.length; i++ ){
    if (arr2.indexOf(arr1[i]) !== -1 && res.indexOf(arr1[i]) === -1){
      
      res.push(arr1[i]);
    }
  }
  //console.log(res);
  return res;
}

var a = [1,2,3,2];
var b = [2,4,6,1,1];
duplicateList(a, b)