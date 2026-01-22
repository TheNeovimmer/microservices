from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from pymongo import MongoClient
import requests

app = FastAPI(title="Review Service")

# MongoDB
client = MongoClient(
    "mongodb://admin:admin123@localhost:27017/reviewsdb-service?authSource=admin"
)
db = client["reviewsdb-service"]
reviews = db["reviews"]


PRODUCT_SERVICE_URL = "http://localhost:4002/products"


class Review(BaseModel):
    productId: str
    rating: int
    comment: str


# Check if product exists (call Node.js service)
def product_exists(product_id: str):
    res = requests.get(PRODUCT_SERVICE_URL)
    for p in res.json():
        if p["_id"] == product_id:
            return True
    return False


# Add review
@app.post("/reviews")
def add_review(review: Review):
    if not product_exists(review.productId):
        raise HTTPException(status_code=404, detail="Product not found")

    reviews.insert_one(review.model_dump())
    return {"message": "Review added"}


# Get reviews by product
@app.get("/reviews/{product_id}")
def get_reviews(product_id: str):
    result = []
    for r in reviews.find({"productId": product_id}, {"_id": 0}):
        result.append(r)
    return result
