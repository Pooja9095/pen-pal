from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# Load the pre-trained model and tokenizer
model_name = "microsoft/DialoGPT-small"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json['message'] # Get the message from the request
    inputs = tokenizer.encode(user_input + tokenizer.eos_token, return_tensors='pt')  # Encode the input message
    reply_ids = model.generate(inputs, max_length=1000, pad_token_id=tokenizer.eos_token_id) # Generate a reply
    # Decode the reply ignoring the initial tokens
    bot_reply = tokenizer.decode(reply_ids[:, inputs.shape[-1]:][0], skip_special_tokens=True) # Decode the reply
    return jsonify({"response": bot_reply}) #  Return the reply as a JSON response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000) # Run the Flask app