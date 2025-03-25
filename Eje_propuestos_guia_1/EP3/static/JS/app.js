function Area_circulo(){
    var entrada1 = document.querySelector("#entrada1")
    var entrada2 = document.querySelector("#entrada2")

    entrada1.placeholder="Digite el radio del circulo en cm"
    entrada2.disabled=true
    entrada2.placeholder=""
}

function Area_cuadrado(){
    var entrada1 = document.querySelector("#entrada1")
    var entrada2 = document.querySelector("#entrada2")

    entrada1.placeholder="Digite el lado del cuadrado en cm"
    entrada2.disabled=true
    entrada2.placeholder=""
}

function Area_triangulo(){
    var entrada1 = document.querySelector("#entrada1")
    var entrada2 = document.querySelector("#entrada2")

    entrada1.placeholder="Digite la base del triangulo en cm"
    entrada2.placeholder="Digite la altura del triangulo en cm"
    entrada2.disabled=false
}

function Calcular(){
    var  url = ""
    var contenido = document.querySelector("#contenido")
    var valor1 = document.querySelector("#entrada1").value
    var valor2 = document.querySelector("#entrada2").value

    if (document.querySelector('#circulo').checked){
        url='http://127.0.0.1:5000/circulo/'+valor1
    }else if (document.querySelector("#cuadrado").checked){
        url="http://127.0.0.1:5000/cuadrado/"+valor1
    }else if (document.querySelector("#triangulo").checked){
        url= 'http://127.0.0.1:5000/triangulo/'+valor1+'/'+valor2
    }else{
        alert("Ah ocurrido un error")
    }

    fetch(url)
    .then (function(response){
        if (response.ok){
            return response.json()
        }else{
            throw "Error en la llamada"
        }
            })
    
    .then (function(resul){
        console.log(resul)
        contenido.innerHTML="El Resultado es: " + resul.resultado + "cm²"+"<br>"+"<hr>"
    })
    
    .catch(function(error){
        console.log(error)
        document.write(error)
        swal(error)
        swal({
        title: "Advertencia",
        text: error,
        icon: "warning",
        buttons: true,
        dangerMode: true,
        })
    }) 

}