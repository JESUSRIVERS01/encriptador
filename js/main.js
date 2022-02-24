var entradaEncriptar=document.getElementById('entradaEncriptar');
var entradaDesencriptar=document.getElementById('entradaDesencriptar');
var bontonEncriptar = document.getElementById("bontonEncriptar");
var bontonDesencriptar = document.getElementById("bontonDesencriptar");
var pegar = document.getElementById("pegar");
var copiar = document.getElementById("copiar");

bontonEncriptar.addEventListener("click",function (j) {

	var regularEx=/a|e|i|o|u/g;
	var cambio={"a":"ai","e":"enter","i":"imer","o":"ober","u":"ufal"}
	var validar = regularEx.test(entradaEncriptar.value);
	if (validar=true) {
		entradaDesencriptar.value=entradaEncriptar.value.replace(regularEx,function(e,p){
			
			return cambio[e];
		})
	}
	entradaEncriptar.value=""
})
bontonDesencriptar.addEventListener("click",function (j) {

	var regularEx2=/ai|enter|imer|ober|ufal/g;
	var cambio2={"ai":"a","enter":"e","imer":"i","ober":"o","ufal":"u"}
	var validar2 = regularEx2.test(entradaDesencriptar.value);
	if (validar2=true) {
		entradaEncriptar.value=entradaDesencriptar.value.replace(regularEx2,function(el,pl){
			
			return cambio2[el];
		})
	}
	entradaDesencriptar.value=""
	
})
copiar.addEventListener("click", function(){
	entradaDesencriptar.select();
  	document.execCommand("copy");
});


	





//  bontonDesencriptar.addEventListener("click",function (j) {
// 	var array =["mango","pera","fresa","piña","guayaba"];

	

// 	var json={
// 		"mango":"mango con chile",
// 		"pera":"pera en almibar",
// 		"fresa":"fresas con crema",
// 		"piña":"gelatina de piña",
// 		"guayaba":"ate de guayaba"
// 	};

// 	var frutaPostre=`con ${array[0]} puedes hacer ${json.mango}`
// 	console.log(frutaPostre);

// 	array.forEach(function(e,p){
// 		console.log(`con ${array[p]} puedes hacer ${json[e]}`);
// 	})
// });

	
// 	var stringUno="uypABC"
// 	var stringDos="qwe"
// 	var regularEx=/u|p/g;
// 	var regularEx1=/[a-z]/g;
// 	var regularEx2=/[A-Z]/g;

// 	console.log(regularEx.test(stringUno));

// 	console.log(regularEx.test(stringDos));

// 	console.log(regularEx1.test(stringUno));

// 	console.log(regularEx2.test(stringDos));
	

	
