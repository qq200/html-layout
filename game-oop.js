// dino component
let dino={
    jumping:false, //sare sau nu
    ///shows the dino
    render: function(){

        //if/else sa indeplineasca doar daca jumping este true
       let html= ` <div class="dino animated bounce"></div>`;
       let div= document.getElementById('land');
            div.innerHTML=html;
    }
};

dino.render();