from flask import Flask
from flask import render_template
from flaskext.mysql import MySQL

app=Flask(__name__)
mysql = MySQL()
#configuro la BBDD y la conexion
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_BD'] = 'pacientes'
mysql.init_app(app)

@app.route('/',methods=['GET','POST'])
def home():
    """
    if request.method=='POST':
        # Handle POST Request here
        return render_template('./index.html')
    sql = 'SELECT * FROM pacientes'
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql)
    conn.commit() # para que se genere el cambio UPDATE, INSERT, DELETE
    """
    return render_template('./index.html')

@app.route('/institucional', methods=['GET'])
def institucional():
    return render_template('./institucional.html')

@app.route('/contacto', methods=['GET'])
def contacto():
    return render_template('./contacto.html')

@app.route('/novedades', methods=['GET'])
def novedades():
    return render_template('./novedades.html')

@app.route('/asistencia', methods=['GET'])
def asistencia():
    return render_template('./asistencia.html')

if __name__ == '__main__':
    #DEBUG is SET to TRUE. CHANGE FOR PROD
    app.run(port=5000,debug=True)