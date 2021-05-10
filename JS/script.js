var r=0; 
var g=0;
var b=0;
var r1=0;
var g1=0;
var b1=0;
var key=0;
var id ='';
function reset() {
    document.getElementById("play").innerText = "Play";
    // for (let index = 1; index < 7; index++) {
    //     document.getElementById(index).style.backgroundColor = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
    // }
    document.getElementById("game").style.display = "none";

}
function check(clicked) {
    id = clicked;
    if (document.getElementById(clicked).style.backgroundColor == document.getElementById(key).style.backgroundColor) {
        // document.getElementById(clicked).innerText = "Correct";
        document.body.style.backgroundColor=document.getElementById(key).style.backgroundColor;
    }
}

function play() {
    if (document.getElementById("play").innerText == "Play") {
        document.getElementById("game").style.display = "flex";
        document.getElementById("play").innerText = "Reset";

        var x = Math.floor((Math.random() * 256) );
        document.getElementById("R").innerHTML = x;
        r=x;
    
        var x = Math.floor((Math.random() * 256) );
        document.getElementById("B").innerHTML = x;
        b=x;
    
        var x = Math.floor((Math.random() * 256) );
        document.getElementById("G").innerHTML = x;
        g=x;
    
        var i = Math.floor((Math.random() * 6)+1 );
        document.getElementById(i).style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        key = i;

        for (let j = 1; j < 7; j++) {
            if (j!=i){
                var y = Math.floor((Math.random() * 256) );
                r1=y;
                var y = Math.floor((Math.random() * 256) );
                g1=y;
                var y = Math.floor((Math.random() * 256) );
                b1=y;
                document.getElementById(j).style.backgroundColor = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')';
                }
            }
        }
        
        document.getElementById("play").addEventListener('click', event => {
            //handle click
            reset();
            document.getElementById("play").addEventListener('click', event => {
                play();
            })
            document.getElementById("R").innerHTML = "";
            document.getElementById("G").innerHTML = "";
            document.getElementById("B").innerHTML = "";
            // document.getElementById(id).innerHTML = "";
            document.body.style.backgroundColor='rgb(' + 255 + ',' + 255 + ',' + 255 + ')';

          })
    }





