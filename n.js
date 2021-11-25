var jug1= prompt("nombre del jugador 1");
var jug2= prompt("nombre del jugador 2");
var j1 =[];
var j2 =[]; 



    var mapa =["","","","","","","","","",""];
    for(var i =0; i< 3; i++){
        var barco1= parseInt(prompt(jug1 + " ingresa donde quieres tus barcos del 1 al 10"));
        mapa[barco1] = "x";
        mapa.push(barco1); 
    }
    console.log(mapa)
    



    var mapa1 =["","","","","","","","","",""];
    for(var i =0; i< 3; i++){
        var barco2= parseInt(prompt(jug2 + " ingresa donde quieres tus barcos del 1 al 10"));
        mapa1[barco2] = "x";
        mapa1.push(barco2);
    }
    console.log(mapa1)
   



	
    let turn = 0;
    while (turn < 20){
        if (turn % 2 == 0 ){
            var tiro = parseInt(prompt("Jugador1 donde quieres tirar"));
            if (mapa1[tiro] == "x"){
                mapa1[tiro] = "b" // b significa que le dio a un barco
                console.log("Felicitaciones, le diste a un barco");
                console.log(mapa1);
            }else {
                mapa1[tiro] = "n" // n significa que no le dio a nada 
                console.log("Fallaste, le diste al agua");
                console.log(mapa1);
            }
        }else {
            var tiro21 = parseInt(prompt("Jugador2 donde quieres tirar"));
            if (mapa[tiro] == "x"){
                mapa[tiro] = "b" // b significa que le dio a un barco
                console.log("Felicitaciones, le diste a un barco");
                console.log(mapa);
            }else {
                mapa[tiro] = "n" // n significa que no le dio a nada 
                console.log("Fallaste, le diste al agua");
                console.log(mapa);
            }
        }
        turn+=1;

        if(jug1 == 3){
            Consolé.log("gana jugador 1");
            }
            else{
                if(jug2 == 3){
                  console.log("gana jugador 2");
                }
            }

    }

    
    
    