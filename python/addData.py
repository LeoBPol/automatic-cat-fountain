import pymongo
import datetime

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["cat-fountain"]
mycol = mydb["days"]

mydict = { "date": datetime.datetime.now(), "activation": 10, "needOfWatter": 2 }

x = mycol.insert_one(mydict)