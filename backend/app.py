from flask import Flask, jsonify, request
from flask_cors import CORS
from procyclingstats import Rider, Ranking
rider = Rider("rider/tadej-pogacar")
rider.parse()

app = Flask(__name__)

CORS(app, origins="http://localhost:5000")

@app.route('/api')
def hello():
    ranking = Ranking("rankings/me/individual-season").individual_ranking()
    # get heights of first 50 riders from the ranking synchronously
    print(ranking)
    return jsonify({'message': rider.parse()})

@app.route("/top-riders")
def get_top_riders():
    ranking = Ranking("rankings/me/individual-season").individual_ranking()
    return ranking

@app.route('/get-rider/<ridername>')
def get_rider_details(ridername):
    riderDetails = Rider("rider/"+ridername)
    return jsonify({'message': riderDetails.parse()})




if __name__ == '__main__':
    app.run(port=5000, debug=True)