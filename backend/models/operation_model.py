import datetime

from core.configs import settings
from sqlalchemy import Column, DateTime, Float, Integer, String, func


class OperationModel(settings.DB_BASE_MODEL):
    __tablename__ = 'operations'

    id = Column(Integer, primary_key=True, autoincrement=True)
    codigo: str = Column(String(8))
    data = Column(DateTime, default=datetime.datetime.utcnow)
    quantidade: int = Column(Integer)
    valor_unitario: float = Column(Float)
    tipo_operacao: str = Column(String(8))
    valor_parcial: float = Column(Float)
    corretagem: float = Column(Float)
    taxa: float = Column(Float)
    valor_final: float = Column(Float)
    preco_medio: float = Column(Float)
