from surprise import Dataset, Reader, SVD, accuracy
from surprise.model_selection import cross_validate, train_test_split
import pandas as pd
import pickle
from collections import defaultdict
from pprint import pprint
import joblib


# load and filter data
print("Loading data...")
df = pd.read_csv("user_rating.csv", encoding="utf-8")
df["vote"] = df["vote"].fillna(0.0).astype(int)

# set rating scale
reader = Reader(rating_scale=(0, 100))

data = Dataset.load_from_df(df[["uid", "iid", "vote"]], reader)

print("Creating sets")
trainset, testset = train_test_split(data, test_size=.25)

temp = pd.DataFrame(testset)
print("Fitting trainset")
algo = SVD()
algo.fit(trainset)

print("Dumping model")
joblib.dump(algo, "vn_model.pkl")

print("Converting to csv")
temp = pd.DataFrame(testset)
temp.to_csv("test_data.csv")
