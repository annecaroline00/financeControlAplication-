from datetime import datetime
from typing import Optional

from pydantic import BaseModel as SCBaseModel


class OperationSchema(SCBaseModel):
    id: Optional[int]
    codigo: str
    data: Optional[datetime] = datetime.utcnow
    quantidade: int
    valor_unitario: float
    tipo_operacao: str
    valor_parcial: Optional[float]
    corretagem: float
    taxa: Optional[float]
    valor_final: Optional[float]

    class Config:
        orm_mode = True
