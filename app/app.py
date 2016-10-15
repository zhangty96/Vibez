from flask import Flask, render_template, flash, request
from wtforms import Form, TextField, TextAreaField, validators, StringField, SubmitField
import re

# App config.
DEBUG = True
app = Flask(__name__)
app.config.from_object(__name__)
app.config['SECRET_KEY'] = '7d441f27d441f27567d441f2b6176a'

class ReusableForm(Form):
  name = TextField('Name:', validators=[validators.required()])


@app.route("/", methods=['GET', 'POST'])
def hello():
  form = ReusableForm(request.form)
  print form.errors
  if request.method == 'POST':
    url=request.form['name']
    print url
    match = re.search(r"watch\?v=(.*)$", url)
    if match and form.validate():
      video_id = match.group(1)
      flash('See results below.')
      return render_template('hello.html', form=form, video_id=video_id)
    else:
      flash('Error: YouTube URL is not valid.')
      return render_template('hello.html', form=form)
  else:
    return render_template('hello.html', form=form)

if __name__ == "__main__":
  app.run()
