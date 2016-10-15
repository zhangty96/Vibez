from flask import Flask, render_template, flash, request, redirect
from wtforms import Form, TextField, TextAreaField, validators, StringField, SubmitField
import re

# App config.
DEBUG = True
app = Flask(__name__)
app.config.from_object(__name__)
app.config['SECRET_KEY'] = '7d441f27d441f27567d441f2b6176a'

class ReusableForm(Form):
  url = TextField('Url:', validators=[validators.required()])

@app.route("/")
def hello():
  form = ReusableForm(request.form)
  return render_template("hello.html", form=form)

@app.route("/analyze", methods=['GET', 'POST'])
def analyze():
  if 'url' not in request.form:
    return redirect("/")
  print request
  print request.form
  print request.form['url']
  form = ReusableForm(request.form)
  if request.method == 'POST':
    url=request.form['url']
    match = re.search(r"watch\?v=(.*)$", url)
    if match and form.validate():
      video_id = match.group(1)
      flash('See results below.')
      return render_template('analyze.html', form=form, video_id=video_id)
    else:
      flash('Error: YouTube URL is not valid.')
  return render_template('analyze.html', form=form)

if __name__ == "__main__":
  app.run()
