from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('hakkimizda.html')
def hakkimizda():
    return render_template('templateshakkimizda.html')

@app.route('/iletisim')
def iletisim():
    return render_template('iletisim.html')

if __name__ == '__main__':
    app.run(debug=True)
