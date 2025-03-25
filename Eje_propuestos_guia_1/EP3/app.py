from flask import *
from flask_cors import CORS
app=Flask(__name__)
CORS(app)

@app.route("/", methods=['GET','POST'])
def index():
    return render_template("index.html")


@app.route('/circulo/<int:r>', methods=['GET','POST'])
@app.route('/circulo/<float:r>')
def circulo(r=0):
    resul = {
            'resultado' : ''
        }
    resul['resultado'] = 3.1416 * (r**2)
    return jsonify(resul)


@app.route("/cuadrado/<int:l>",  methods=["GET",'POST'])
@app.route("/cuadrado/<float:l>",  methods=["GET",'POST'])
def cuadrado(l=0):
    resul = {
        'resultado' : ''
    }
    resul['resultado'] =  l**2
    return jsonify(resul)


@app.route("/triangulo/<int:b>/<int:h>", methods=['GET','POST'])
@app.route("/triangulo/<int:b>/<float:h>", methods=['GET','POST'])
@app.route("/triangulo/<float:b>/<int:h>", methods=['GET','POST'])
@app.route("/triangulo/<float:b>/<float:h>", methods=['GET','POST'])
def triangulo(b=0, h=0):
    resul = {
        'resultado' : ''
    }
    resul['resultado'] = (b*h)/2
    return jsonify(resul)


if __name__=="__main__":
    app.run(debug=True)