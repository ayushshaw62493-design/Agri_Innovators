from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os

# ✅ Explicitly load .env using full path
env_path = os.path.join(os.path.dirname(__file__), ".env")
load_dotenv(dotenv_path=env_path)

print("ENV PATH:", env_path)                 # Debug
print("MONGO URI:", os.getenv("MONGO_URI"))  # Debug

MONGO_URI = os.getenv("MONGO_URI")

if not MONGO_URI:
    raise RuntimeError("MONGO_URI missing in .env")

client = AsyncIOMotorClient(MONGO_URI)
db = client["carbontracking"]
