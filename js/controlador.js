angular.module('miApp',['ngAnimate'])
.controller('miCtrl1', function($scope, $filter) {
    /* ----------- */
    /* PROPIEDADES */
    /* ----------- */
    $scope.mensaje = $filter('uppercase')('Soy el controlador 1')
    $scope.numero = $filter('number')(4567.789,2)

    $scope.contador2 = 456
    $scope.valor = 321
    $scope.check = true
    $scope.personas = [
        'Juan',
        'Pedro',
        'Ana',
        'Maria'
    ]
    $scope.alumnos = [
        {nombre: 'Juan', apellido: 'Perez', edad: 32, curso: false, cuota: 1234.56, altura: 1.68,foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png'},
        {nombre: 'Pedro', apellido: 'gomez', edad: 27, curso: true, cuota: 1334.56, altura: 1.78,foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png'},
        {nombre: 'Ana', apellido: 'Mei', edad: 37, curso: true, cuota: 1434.56, altura: 1.73,foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png'},
        {nombre: 'Maria', apellido: 'Picos', edad: 23, curso: false, cuota: 1534.56, altura: 1.69,foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png'},
    ]

    /* ------- */
    /* MÉTODOS */
    /* ------- */
    $scope.incrementar = function() {
        $scope.contador2++
    }
    $scope.getContador2 = function() {
        return $scope.contador2
    }
    $scope.borrarAlumno = function(index) {
        console.log('borrar Alumno')
        $scope.alumnos.splice(index,1)
    }
    $scope.agregarAlumno = function() {
        var alumno = {nombre: 'Cecilia', apellido: 'Lopez', edad: 28, curso: false, cuota: 1634.56, altura: 1.58,foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-512.png'}

        console.log('agregarAlumno')
        /* $scope.alumnos.push(alumno) */
        $scope.alumnos.unshift(alumno)
    }

    $scope.cantidadAlumnosCurso = function() {
        var cant = 0

        angular.forEach($scope.alumnos, function(alumno, key) {
            if(alumno.curso) cant++
        })
        return {
            cantidad : cant,
            total : $scope.alumnos.length
        }
    }
    /* ORDENAMIENTO */
    $scope.orden = ''
    $scope.inverso = false
    $scope.campo = ''
    $scope.ordenar = function(campo) {
        console.log(campo)
        $scope.campo = campo
        $scope.orden = ($scope.inverso?'-':'') + campo
        $scope.inverso = !$scope.inverso
    }
    /* BUSQUEDA */
    $scope.busqueda = ""
    $scope.busquedaAux = ""
    $scope.menu

    $scope.aplicarEstilo = function(nombre){
        var color = ""
        switch(nombre) {
            case "Juan":
            color = "red"
            break
            case "Ana":
            color = "green"
            break
            case "Maria":
            color = "blue"
            break
            case "Pedro":
            color = "purple"
            break
            default:
                color: ""
                break
        }
        return {
            "background-color":color, //aca va el nombre de CSS
            color: "white",
            padding: "5px",
            borderRadius: "5px" //Asi se escribe la prop de css sin comillas
        }
    }

})
.filter('acortar', function() {
    return function(text, max) {
        if(text.length > max) return text.substring(0,max) + ' ...'
        else return text
    }
})
.filter('capitalize', function() {
    return function(text) {
        return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    }
})
.controller('miCtrl2', function($scope, $window) {
    $scope.mensaje = 'Soy el controlador 2'

    $window.document.getElementById('parrafo').onmouseover = function() {
        console.log('El mouse paso por aquí')
        //$window.alert('El mouse paso por aquí')
    }
    
})