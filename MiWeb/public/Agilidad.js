var app= angular.module("Agilidad",[]);

app.controller("controlAgilidad",function($scope){
	$scope.datos={};
	$scope.datos.gano="";
	$scope.datos.Numero1= Math.floor((Math.random() * 10) + 1);
	$scope.datos.Numero2= Math.floor((Math.random() * 10) + 1);
	$scope.datos.Signo="+";
	$scope.datos.Resultado="";
	$scope.datos.TiempoTranscurrido="";
	$scope.datos.NumeroSigno= Math.floor((Math.random() * 3) + 1)
	

	$scope.Aceptar=function()
	{
		var Tiempo2=new Date();
			Tiempo2= Tiempo2.getTime();
			$scope.datos.TiempoTranscurrido= Tiempo2 - Tiempo1;
		if 	($scope.datos.Resultado==$scope.datos.Respuesta)
			{
				$scope.datos.gano="Si";
				firebase.database().ref("Agilidad/").push($scope.datos);
				alert ("Ganaste "+$scope.datos.TiempoTranscurrido/1000+" Segundos");
			}	
		else 
			{
				$scope.datos.gano="No";
				firebase.database().ref("Agilidad/").push($scope.datos);
				alert ("Perdiste");
			}
		console.info ($scope.datos);
		setTimeout(function() {window.location="index.html";}, 1500);
		
			
	}
	switch($scope.datos.NumeroSigno)
				{
					case 1 : 
					$scope.datos.Signo="+";
					$scope.datos.Resultado= $scope.datos.Numero1 + $scope.datos.Numero2;
					break;
					case 2 :
					$scope.datos.Signo="-";
					$scope.datos.Resultado= $scope.datos.Numero1 - $scope.datos.Numero2;
					break;
					case 3 : 
					$scope.datos.Signo="*";
					$scope.datos.Resultado= $scope.datos.Numero1 * $scope.datos.Numero2;
					break;
					
				}
				console.info ($scope.datos);
				var Tiempo1=new Date();
		Tiempo1= Tiempo1.getTime();

});