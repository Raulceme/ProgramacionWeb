function saludo(){
	document.write("\
		<h1>Ejemplo de saludos</h1>\
			<ol>\
				<li>hola</li>\
				<li>¿qué hay?</li>\
				<li>whats up?</li>\
			</ol>");
}

function crearArrayTradicional(){
	let primos = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];

	//const divArregloTradicional = document.getElementById("divArrayIndice");
	const divArregloTradicional = document.querySelector("divArrayIndice");
	//innerHTML, innerText, textContent
	divArregloTradicional.innerHTML= "<hr>    <strong>   Arreglo          de   primos = 		</strong>" + primos + "<hr>";
}

//document.write("Hola mundo");

function arrayAsociativos(){
	const alumno = new Array();
	alumno["nombre"] = "juan";
	alumno["apellidoPat"] = "Sánchez";
	alumno["apellidoMat"] = "Pérez";
	alumno["semestre"] = 6;
	alumno[regular] = true;
	alumno.direccion = new Array;
	alumno.direccion.calle = "av. insurgentes";
	alumno.direccion.numExterior = 330;
	alumno.direccion.colonia = "David Gustavo Gutiérrez";
	alumno.direccion.cp = 77010;

	//Notacion JSon Java Script Object Natation
	let nuevoAlumno = {
		nombre: "Raul",
		apellidoPat: "Ceme",
		apellidoMat: "Santiago",
		Semestre: 6,
		regular: false,
		direccion: {
			calle: "Av. Insurgentes",
			munExterior: 330,
			colonia: "Daviv Gustavo Gutiérrez",
			cp: 77010
		}
	};

	//cadena Json que representa objetos
	let cadAlumnoIntecambio = '{\
		"nombre": "Itxelitata",\
		"apellidoPat": "Anaya",\
		"apellidoMat": "Ble",\
		"Semestre": 6,\
		"regular": false,\
		"direccion": {\
			"calle": "Av. Juarez",\
			"munExterior": 20,\
			"colonia": "centro",\
			"cp": 77000\
		}\
	}';

	let objAlumnoIntercambio = JSON.parse(cadAlumnoIntecambio);
	objAlumnoIntercambio.nombre = "Jose Gaudalupe"

	const divAsoc = document.getElementsByTagName("div");
	//divAsoc[1].innerText = "Alumno nombre = " + alumno["nombre"];
	//divAsociativos
	divAsoc[1].innerHTML = "Alumno nombre = " + alumno.nombre + "<br/> Apellido paterno = " + alumno.apellidoPat
	+ "<br/> direccion = " + alumno.direccion.calle + " " + alumno.direccion.numExterior;

	let elemClass = document.getElementsByClassName("poo");

	elemClass[2].innerHTML = "Alumno =" + JSON.stringify(alumno);
	elemClass[2].innerHTML =  elemClass[2].innerHTML + "<br/>Alumno de intercambio = " + JSON.stringify
	//divAsociativos
}