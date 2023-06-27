player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_puntos = 0;
player2_puntos = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_puntos").innerHTML = player1_puntos ;
document.getElementById("player2_puntos").innerHTML = player2_puntos ;
document.getElementById("player_pregunta").innerHTML = "Turno para preguntar - " + player1_name ;
document.getElementById("player_contesta").innerHTML = "Turno para contestar - " + player2_name ;

turno_preguntar ="player1";
turno_contestar ="player2";
function enviar(){
 get_word = document.getElementById("palabra").value;
 palabra = get_word.toLowerCase();
 console.log(palabra)
 charAt1 = palabra.charAt(1);
 console.log(charAt1);
 lenght_divide_2 = Math.floor(palabra.length/2);
     charAt2 = palabra .charAt(lenght_divide_2);
     console.log(charAt2);
 
     lenght_minus_1 = palabra.length - 1; 
     charAt3 = palabra.charAt(lenght_minus_1);
     console.log(charAt3);
     remove_charAt1 = palabra.replace(charAt1, "_");
     remove_charAt2 = remove_charAt1.replace(charAt2, "_");
     remove_charAt3 = remove_charAt2.replace(charAt3, "_");
     console.log(remove_charAt3);

     question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
     input_box = "<br>Respuesta : <input type='text' id='input_check_box'>";
     check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
     renglon =  question_word + input_box + check_button ; 
     document.getElementById("output").innerHTML = renglon;
 document.getElementById("palabra").value = "";
}
function check(){
    get_answer = document.getElementById("input_check_box").value;
    respuesta= get_answer.toLowerCase();
    if (respuesta == palabra){ 
        if (turno_contestar== "player1"){
            player1_puntos = player1_puntos +1;
            document.getElementById("player1_puntos").innerHTML=player1_puntos;
        }
        else{
            player2_puntos = player2_puntos +1;
            document.getElementById("player2_puntos").innerHTML=player2_puntos;
        }
    }


    if(turno_preguntar == "player1")
	{
		turno_preguntar = "player2"
		document.getElementById("player_pregunta").innerHTML = "Turno para preguntar - " + player2_name ;
	}
	else 
	{
		turno_preguntar = "player1"
		document.getElementById("player_pregunta").innerHTML = "Turno para preguntar - " + player1_name ;
	}

	if(turno_contestar == "player1")
	{
		turno_contestar = "player2"
		document.getElementById("player_contesta").innerHTML = "Turno para responder - " + player2_name ;
	}
	else 
	{
		turno_contestar = "player1"
		document.getElementById("player_contesta").innerHTML = "Turno para responder - " + player1_name ;
	}
    document.getElementById("output").innerHTML = "";
}