from flask import *
app=Flask(__name__)

@app.route("/<int:numero>")
def tabla_int(numero):
    resultado = {}
    for i in range(1,11):
        resultado[i]=(numero * i)
        print(resultado)
    return render_template('index.html', resultado=resultado, numero=numero)

@app.route("/<float:numero>")
def tabla_float(numero):
    resultado = {}
    for i in range(1,11):
        resultado[i]=round((numero * i),2)
    return render_template('index.html', resultado=resultado, numero=numero)


if __name__=="__main__":
    app.run(debug=True)