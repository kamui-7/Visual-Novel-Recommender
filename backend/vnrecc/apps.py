from django.apps import AppConfig
from collections import defaultdict
import pandas as pd
import joblib


class VnreccConfig(AppConfig):
    MODEL = "vnrecc/data/vn_model.pkl"
    TEST_PATH = "vnrecc/data/test_data.csv"
    NUM_RECS = 10
    name = 'vnrecc'
    df = pd.read_csv("vnrecc/data/user_rating.csv", encoding="utf-8")
    df["vote"] = df["vote"].fillna(0.0).astype(int)

    predictor = joblib.load(MODEL)
    testset = pd.read_csv(TEST_PATH).values.tolist()
    testset = [x[1:] for x in testset]
    pred = predictor.test(testset)
    top_v = defaultdict(list)
    for uid, iid, true_r, est, _ in pred:
        top_v[uid].append((iid, est))

    for uid, rating_info in top_v.items():
        rating_info.sort(key=lambda x: x[1], reverse=True)
        top_v[uid] = rating_info[:NUM_RECS]
