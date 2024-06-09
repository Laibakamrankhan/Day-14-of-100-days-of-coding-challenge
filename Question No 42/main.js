var magicians = ["David", "Alice", "John"];
function showMagicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
showMagicians(magicians);
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " The Great";
    }
}
makeGreat(magicians);
showMagicians(magicians);
