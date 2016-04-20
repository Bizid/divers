/**
 * Created by tealabi on 4/19/16.
 */
function caffeineBuzz(number){
    var res = "";
    if((number % 3) === 0){
        if((number % 4) === 0){
            res = res + "Coffee";
            if((number % 2) === 0){
                res = res + "Script";
            }
        } else {
            res = res + "Java";
            if((number % 2) === 0){
                res = res + "Script";
            }
        }



    } else {
        res = "mocha_missing!";
    }

    /*console.log(res);*/
}
caffeineBuzz(12);