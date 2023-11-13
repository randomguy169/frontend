from flask import Flask, jsonify, request
import mysql.connector
from mysql.connector import Error
app = Flask(__name__)


# get users list

# get user by user id

# save user
@app.route('/register', methods=['POST'])
def register_user():
    user = request.get_json()
    # sql, file, mysql, cosmos, nosql db
    connection = mysql.connector.connect(host='localhost',
                                         database='Electronics',
                                         user='pynative',
                                         password='pynative@#29')

# update user

# delete user

