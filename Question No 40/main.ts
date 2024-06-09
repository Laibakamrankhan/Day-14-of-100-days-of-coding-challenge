function make_album(albumTittle: string   , artisrtName: string): void {
    console.log(`"${albumTittle}" by "${artisrtName}".`);
}
make_album("Tera Woh Pyar" ,"Momina Mustehsan and Asim Azhar")
make_album("Wohi Khuda Hai","Atif Aslam")
make_album("Afreen Afreen","Rahat Fateh Ali Khan and Momina Mustehsan")
function make_album2(albumTittle: string   , artisrtName: string , numberOfTrack: string ): void {
    console.log(`"${albumTittle}" by "${artisrtName}" Vol${numberOfTrack}.`);
}
make_album2("Tera Woh Pyar" ,"Momina Mustehsan and Asim Azhar" , "9")
make_album2("Wohi Khuda Hai","Atif Aslam" , "12")
make_album2("Afreen Afreen","Rahat Fateh Ali Khan and Momina Mustehsan" , "10")
