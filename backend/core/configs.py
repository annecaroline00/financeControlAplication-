from pydantic import BaseSettings
from sqlalchemy.ext.declarative import declarative_base


class Settings(BaseSettings):
    BASE_URL_API_V1: str = '/api/v1'
    DB_URL: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/dbfinance"
    DB_BASE_MODEL = declarative_base()

    class Config:
        case_sensitive = True


settings = Settings()
