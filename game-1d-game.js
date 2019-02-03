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
    console.log(position);

    document.write(`
    <button onclick="moveLeft();showMap();">&lt</button>
    <button onclick="moveRight();showMap();">&gt</button>
    `)
}


function moveRight(){
        position++;
        if(position==MAP_SIZE+1){
            position=1;
        }


}
function moveLeft(){
    position--;
    if(position==0){
        position=MAP_SIZE;
    }
}

showMap();
