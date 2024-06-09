let magicians : string[]=["David","Alice","John"]
function showMagicians (magicians:string[]){
    magicians.forEach(magicians => {
        console.log(magicians);
        
    });
}
showMagicians(magicians)
function makeGreat(magicians:string[]){
    for (let i = 0; i < magicians.length; i++) {
          magicians[i] = magicians[i]  +  " The Great"
        
    }
}
makeGreat(magicians)
showMagicians(magicians)