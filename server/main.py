import scraper
import markov_classes
import markov # to see what the original headlines looked like

from flask import Flask
from flask import jsonify
from flask_cors import CORS

import numpy as np

app = Flask(__name__)
CORS(app)

def list_to_json(headlines):
	return { 
        'headlines': [{ 'content': item, 'real': True } for item in headlines] 
        }

headlines = scraper.get_headlines()
m_gen = markov_classes.Markov(headlines)
json = list_to_json(headlines)
m_gen.add_fakes(json)
index = 0

@app.route('/')
def all_headlines():
    np.random.shuffle(json['headlines'])
    smaller_json = dict(json)
    smaller_json['headlines'] = smaller_json['headlines'][:10]
    return jsonify(smaller_json)

app.run('0.0.0.0')