function calcular(){
    var contenido = document.querySelector("#contenido")
    var x = parseInt(document.querySelector('#datox').value) 
    var z = parseInt(document.querySelector("#datoz").value)
    contenido.disabled=true

    if (x == 0 && z == 0){
        contenido.placeholder=(0)
    } else{
        contenido.placeholder=((x*z) + z + x);
    }
}