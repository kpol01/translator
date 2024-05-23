from flask import Flask, render_template, request
from deep_translator import GoogleTranslator

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/translate', methods=['POST'])
def translate():
    text = request.form['text']
    translated_text = GoogleTranslator(source='en', target='bn').translate(text)
    return translated_text

if __name__ == '__main__':
    app.run(debug=True)