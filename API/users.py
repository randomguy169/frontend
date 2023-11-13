from flask import Flask, jsonify, request

# import mysql.connector
# from mysql.connector import Error
import logging

app = Flask(__name__)

# get users list

# get user by user id


# save user
@app.route("/register", methods=["POST"])
def register():
    user = request.get_json()
    # logging.info(user)
    # sql, file, mysql, cosmos, nosql db
    # mydb = mysql.connector.connect(host='localhost:3306', user='root', password='7325')

    # print(mydb)

    # mycursor = mydb.cursor()

    # sql = "INSERT INTO user (user_name, first_name, last_name, birth_date, phone, email, is_active, created_on, updated_on, created_by, updated_by) VALUES (%s, %s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
    # val = (user.first_name, user.last_name, user.birth_date, user.phone, user.email, True, "2023-11-13","2023-11-13", "noOne", "literallynoOne")
    # mycursor.execute(sql, val)

    # mydb.commit()


# update user

# delete user
