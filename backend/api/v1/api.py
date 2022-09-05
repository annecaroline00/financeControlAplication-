from fastapi import APIRouter

from api.v1 import operations_endpoint

api_router = APIRouter()
api_router.include_router(
    operations_endpoint.router, prefix='/operations', tags=["operations"]
)
