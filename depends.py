from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os

# ✅ load .env by specifying exact file path
env_path = os.path.join(os.path.dirname(__file__), ".env")
load_dotenv(env_path)

print("MONGO URI FOUND:", os.getenv("MONGO_URI"))

MONGO_URI = os.getenv("MONGO_URI")

if not MONGO_URI:
    raise RuntimeError("MONGO_URI missing in .env")

client = AsyncIOMotorClient(MONGO_URI)
db = client["carbontracking"]
