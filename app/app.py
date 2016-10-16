from flask import Flask, render_template, flash, request, redirect
from wtforms import Form, TextField, TextAreaField, validators, StringField, SubmitField
import re, os
from analyze import analyze

# App config.
DEBUG = True
app = Flask(__name__)
app.config.from_object(__name__)
app.config['SECRET_KEY'] = '7d441f27d441f27567d441f2b6176a'
app.config['UPLOAD_FOLDER'] = './'

url = ''

class ReusableForm(Form):
  url = TextField('Url:', validators=[validators.required()])

@app.route("/")
def hello_page():
  form = ReusableForm(request.form)
  return render_template("hello.html", form=form)

@app.route("/analyze", methods=['GET', 'POST'])
def analyze_page():
  global url
  if request.method != 'POST':
    return redirect('/')
  form = ReusableForm(request.form)
  print request.form
  print request.files
  if url == '' and ('url' not in request.form or 'file' not in request.files):
    return redirect('/')
  file = request.files['file']
  print file
  if file.filename == '':
    flash('No selected file')
    return render_template('hello.html', form=form)
  url=request.form['url']
  match = re.search(r"watch\?v=(.*)$", url)
  if match and form.validate():
    video_id = match.group(1)
    filename = file.filename
    file.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))
    results = analyze(filename)
    flash('See results below.')
    return render_template('analyze.html', form=form, video_id=video_id, results=results)
  else:
    flash('Error: YouTube URL is not valid.')
  return render_template('hello.html', form=form)

if __name__ == "__main__":
  app.run()
