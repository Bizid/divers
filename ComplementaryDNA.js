function DNAStrand(dna){
    dna =  dna.toUpperCase();
    var res = "";
    for (var i=0; i<dna.length;i++) {
        var character = dna.charAt(i);
        if(character == "A") {res = res + "T"}
        else if(character == "T") {res = res + "A"}
        else if(character == "C") {res = res + "G"}
        else if(character == "G") {res = res + "C"}
        else {
            res = res + character;
        }

    }
    return res;
}
DNAStrand ("ATTGC");