# backend/models.py

from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime, timezone


# ✅ Emission record stored inside user.document
class Emission(BaseModel):
    category: str
    amount: float = Field(..., gt=0, description="Amount must be greater than 0")  # ✅ validation
    proofUrl: Optional[str] = None
    date: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))     # ✅ timezone-aware timestamp


# ✅ User register model
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str = Field(min_length=6)


# ✅ User output response model
class UserOut(BaseModel):
    id: str
    name: str
    email: EmailStr


# ✅ Company Register Model
class CompanyCreate(BaseModel):
    name: Optional[str] = ""
    walletAddress: str


# ✅ Company Emission Update Model
class CompanyEmit(BaseModel):
    walletAddress: str
    amount: float = Field(..., gt=0)
