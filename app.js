from flask import Flask,request,Response,render_template_string
app = Flask(__name__)
@app.route("/")
def index():
    return render_template_string("<h1>Konchan</h1>")
app.run(port=1234)
