// component clock
class Clock{
    constructor(){
        let d = new Date(); //now 


        // cu if de adaugat zero in fata la secundele, minutele.. din o cifra
        this.hours=d.getHours();
        this.minutes=d.getMinutes();
        this.seconds=d.getSeconds();
        }
    // de afisat in html rezultalul
    render(){
        let html=
        `<div class="clock">
            ${this.hours} : ${this.minutes} : ${this.seconds}

        </div>`;
        document.write(html);
    }
}

// object
let c = new Clock();
console.log(c);
c.render();

setTimeout( function(){location.reloader()} ,1000); //f5