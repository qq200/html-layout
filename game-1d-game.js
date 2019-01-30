const MAP_SIZE =10; //simbol
var position = 7; // personaj, caracter position

// +------ 
function showMap(){
    document.body.innerHTML= '';
    for(var p=1; p<=MAP_SIZE; p++){
        if(p == position){
            document.write('+');
        }else{
        document.write('-');
        }
    }
    document.write(`
    <button>&lt</button>
    <button onclick="moveRight();showMap();">&gt</button>
    
    `)
}

function moveRight(){
    position++;


}
showMap()