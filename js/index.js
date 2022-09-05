//Declarar variables
let nombreUsuario = "Derinson Valencia";
let saldoCuenta = 50000 ;
let limiteExtraccion = 500;
let claveCorrecta = 0000;

function iniciarSesion() {
	let clave = prompt("Digite su clave");
	if (clave == claveCorrecta) {
		alert("Bienvenido "+nombreUsuario);
		document.body.style.display = "block";
		window.onload = function(){
			cargarNombreEnPantalla();
			saldo();
			limite();
			
		}
	}else{
		saldoCuenta = 50000;
		alert("Su saldo se ha actualizado a cero por seguridad");
	}
}

iniciarSesion();

//Funciones para actualizar el valor de las variables HTML
function cargarNombreEnPantalla(){
	document.getElementById("nombre").innerHTML = "Bienvenido/a "+nombreUsuario;
}
function saldo(){
	document.getElementById("saldo-cuenta").innerHTML = "$ "+saldoCuenta;
}
function limite(){
	document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $"+limiteExtraccion;
}

function ExtraerDinero(){
let ExtraerDinero = prompt('cuanto dinero desea Extraer')
if(ExtraerDinero > limiteExtraccion){
	alert('El monto a retirar supera el limite -500-')
}else{
	let saldoActual = saldoCuenta - ExtraerDinero

	saldoCuenta = saldoActual;
	
	alert('Su extraccion fue exitosa'+ saldoActual)
	actualizarSaldoEnPantalla();
}
}

function cambiarLimiteDeExtraccion() {
	var nuevoLimiteDeExtraccion = parseInt(prompt("Ingrese el nuevo límite de extracción: "));
    if (isNaN(nuevoLimiteDeExtraccion)){
        return;
    }
    limiteExtraccion = nuevoLimiteDeExtraccion;
    actualizarLimiteEnPantalla();
    alert("Su nuevo limite de extracción es: "+limiteExtraccion);
}



function DepositarDinero(){
let nuevoDepositoDinero = parseInt(prompt('Cuanto dinero desea depositar: '))
if(isNaN(nuevoDepositoDinero)){
	return;
}

let sumaSaldo = (nuevoDepositoDinero) + (saldoCuenta)

saldoCuenta = sumaSaldo ;
alert('Su saldo es de '+ saldoCuenta)
actualizarSaldoEnPantalla()
}


function transferirDinero(){
	var cuenta1 = 2345
	var cuenta2 = 6789

	let transferir= prompt('Cuanto Dinero desea transferir')
	if(haySaldoDisponible(transferir)){
		var numerodeCuenta= prompt('Digite la cuenta a la que le va a transferir el dinero: ')
		if(numerodeCuenta == cuenta1 || numerodeCuenta == cuenta2){
			let transferenciaExitosa = saldoCuenta - transferir;
			 saldoCuenta = transferenciaExitosa;
			alert('La transferencia de '+ transferir+' fue exitosas a la cuenta '+numerodeCuenta)
			actualizarSaldoEnPantalla()
		}else{
			alert('La cuenta introducidad no es correcta')
		}
	}
}


function Servicios(){
	var claro = 400;
	var tigo = 300;
	var mosvistar = 240;
	var wom = 120;
	var servicio = prompt("Ingrese el número que corresponde con el servicio que quiere pagar \n1. Claro \n2. Tigo \n3. Movistar \n4. Wom");
    switch(servicio){
        case "1":
        depositarServicio(claro,"claro");
        break;
        case "2":
        depositarServicio(tigo,"tigo"); 
        break;
        case "3":
        depositarServicio(movistar,"movistar");
        break;
        case "4":
        depositarServicio(wom,"wom");
        break;
        default:
        alert("No existe el servicio que se ha seleccionado.");
    }
}


	function depositarServicio(pagoServicio, tipoServicio){
		if(haySaldoDisponible(pagoServicio)){
			var saldoAnterior = saldoCuenta;      
			saldoCuenta = saldoCuenta-pagoServicio;
			actualizarSaldoEnPantalla();
			alert("Has pagado el servicio del  "+tipoServicio+ "."+"\nSaldo anterior: $"
			   +saldoAnterior+"\nDinero descontado: $" +pagoServicio+"\nSaldo actual: $" +saldoCuenta);
		} else {
			alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
		}
	}


function haySaldoDisponible(valor){
    if(valor <= saldoCuenta){
        return true;
    } else{
		alert('Fondos insuficientes')
        return false; 
    }
}  


function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}



