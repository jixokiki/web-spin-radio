from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Mengaktifkan CORS untuk komunikasi dengan React

# Skor awal
score = 0

# Endpoint untuk mengambil skor saat ini dari permainan
@app.route('/get_score', methods=['GET'])
def get_score():
    global score
    return jsonify({"score": score})

# Endpoint untuk mengirimkan skor baru dari permainan
@app.route('/update_score', methods=['POST'])
def update_score():
    global score
    data = request.get_json()
    if 'new_score' in data:
        new_score = data['new_score']
        if isinstance(new_score, int):
            score = new_score
            return jsonify({"message": "Score updated successfully"})
    return jsonify({"error": "Invalid request"}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5001)
