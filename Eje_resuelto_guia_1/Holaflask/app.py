# Importamos el flask

from flask import Flask, request, render_template,jsonify
app=Flask(__name__)

@app.route("/", methods=['GET','POST'])
def hola():
    return render_template('index.html')

@app.route("/enviar", methods=['GET','POST'])
def enviar():
    info = {
        'nombre': '',
        'gmail': ''
    }
    if request.method == 'POST':
        info['nombre'] = request.form['nombre']
        info['gmail'] = request.form['gmail']
    return jsonify(info)

if __name__=='__main__':
    app.run(debug=True)