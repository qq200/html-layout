const MAP_SIZE =10; //simbol
var position = 7; // personaj, caracter position

// +------ 
function showMap(){
    document.body.innerHTML= '';
    if (p>0 && p<MAP_SIZE){
    for(var p=1; p<=MAP_SIZE; p++){
        if(p == position){
            document.write('+');
        }else{
        document.write('-');
        }
    }
    document.write(`
    <button >&lt</button>
    <button onclick="moveRight();showMap();">&gt</button>
    
    `)}else{
    for(var p=10; p>0 ; p--){
            if(p == position){
                document.write('+');
            }else{
            document.write('-');
            }
        }
        document.write(`
        <button onclick="moveLeft();showMap();">&lt</button>
        <button>&gt</button>
        
        `)}



}


function moveRight(){
    // document.body.innerHTML= '';
    // for(var p=10; p<=MAP_SIZE && p>0 ; p--){
    //     if(p == position){
    //         document.write('+');
    //     }else{
    //     document.write('-');
    //     }
    // }
    // document.write(`
    // <button onclick="moveRight();showMap();">&lt</button>
    // <button>&gt</button>
    
    // `)
    position++;


}
function moveLeft(){
    position--;
}

showMap();
