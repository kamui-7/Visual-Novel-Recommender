from flask import Flask
from flask_cors import CORS
from collections import defaultdict
from bs4 import BeautifulSoup as bs
from surprise import Dataset, Reader, SVD, accuracy
from surprise.model_selection import cross_validate, train_test_split
from collections import defaultdict
from pprint import pprint
from vndb import VNDB
import pandas as pd
import pickle
import json
import requests
import joblib

MODEL_PATH = "data/vn_model.pkl"
TEST_DATA_PATH = "data/test_data.csv"
USER_RATING_PATH = "data/user_rating.csv"
OUTPUT_MODEL_PATH = "data/vn_model.pkl"

NUM_RECS = 10

# loading data
df = pd.read_csv(USER_RATING_PATH, encoding="utf-8")
df["vote"] = df["vote"].fillna(0.0).astype(int)


def predict_vns():
    predictor = joblib.load(MODEL_PATH)
    testset = pd.read_csv(TEST_DATA_PATH).values.tolist()
    testset = [x[1:] for x in testset]

    # predicting
    pred = predictor.test(testset)
    top_v = defaultdict(list)
    for uid, iid, true_r, est, _ in pred:
        top_v[int(uid)].append((iid, est))

    for uid, rating_info in top_v.items():
        rating_info.sort(key=lambda x: x[1], reverse=True)
        top_v[uid] = rating_info[:NUM_RECS]

    with open("data/output_data.json", "w") as f:
        json.dump(top_v, f)


def gen_model():
    df = pd.read_csv(USER_RATING_PATH, encoding="utf-8")
    df["vote"] = df["vote"].fillna(0.0).astype(int)

    reader = Reader(rating_scale=(0, 100))
    data = Dataset.load_from_df(df[["uid", "iid", "vote"]], reader)
    trainset, testset = train_test_split(data, test_size=.25)
    temp = pd.DataFrame(testset)
    algo = SVD()
    algo.fit(trainset)
    joblib.dump(algo, OUTPUT_MODEL_PATH)
    temp = pd.DataFrame(testset)
    temp.to_csv("test_data.csv")


app = Flask(__name__)
CORS(app)

# predict_vns()

with open("data/output_data.json") as f:
    top_v = json.load(f)

vndb = VNDB()


@app.route("/user/<username>")
def get_recommendations_for_user(username):
    res = {"data": []}
    matches = df[df["uname"] == username]["uid"]
    if matches.any():
        user_id = matches.iloc[0]
        recs = top_v[str(user_id)][:NUM_RECS]
        for iid, _ in recs:
            data = vndb.get(f"get vn basic,details (id = {iid})")["items"][0]
            res["data"].append(data)
    return res


app.run(port=5000)
