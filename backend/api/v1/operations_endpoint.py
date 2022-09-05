from datetime import datetime
from typing import List

from core.dependencies import get_session
from fastapi import APIRouter, Depends, HTTPException, Response, status
from models.operation_model import OperationModel
from schemas.operation_schema import OperationSchema
from sqlalchemy import func
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

router = APIRouter()


@router.post('/', status_code=status.HTTP_201_CREATED, response_model=OperationSchema)
async def criar_operacao(operation: OperationSchema, db: AsyncSession = Depends(get_session)):
    nova_operacao = OperationModel(
        codigo=operation.codigo,
        data=datetime.now(),
        quantidade=operation.quantidade,
        valor_unitario=operation.valor_unitario,
        tipo_operacao=operation.tipo_operacao,
        valor_parcial=(operation.quantidade * operation.valor_unitario),
        corretagem=operation.corretagem,
        taxa=operation.taxa,
        valor_final=((operation.quantidade * operation.valor_unitario) +
                     operation.corretagem + operation.taxa)
        if operation.tipo_operacao == 'COMPRA' else (
            (operation.quantidade * operation.valor_unitario) - operation.corretagem - operation.taxa)

    )
    db.add(nova_operacao)
    await db.commit()
    return nova_operacao


@router.get('/', response_model=List[OperationSchema])
async def get_operations(db: AsyncSession = Depends(get_session)):
    async with db as session:
        query = select(OperationModel)
        resultQuery = await session.execute(query)
        operations: List[OperationModel] = resultQuery.scalars().all()
        return operations


@router.get('/{operation_id}', response_model=OperationSchema, status_code=status.HTTP_200_OK)
async def get_operation(operation_id: int, db: AsyncSession = Depends(get_session)):
    async with db as session:
        query = select(OperationModel).filter(
            OperationModel.id == operation_id)
        resultQuery = await session.execute(query)
        operation: OperationModel = resultQuery.scalar_one_or_none()

        if operation:
            return operation
        raise HTTPException(detail='Operação não encontrada',
                            status_code=status.HTTP_404_NOT_FOUND)


@router.put('/{operation_id}', response_model=OperationSchema, status_code=status.HTTP_200_OK)
async def put_operation(operation_id: int, current_operation: OperationSchema, db: AsyncSession = Depends(get_session)):
    async with db as session:
        query = select(OperationModel).filter(
            OperationModel.id == operation_id)
        resultQuery = await session.execute(query)
        operation_to_be_renewed: OperationModel = resultQuery.scalar_one_or_none()

        if operation_to_be_renewed:
            operation_to_be_renewed.codigo = current_operation.codigo,
            operation_to_be_renewed.data = current_operation.old_operation.data,
            operation_to_be_renewed.quantidade = current_operation.old_operation.quantidade,
            operation_to_be_renewed.valor_unitario = current_operation.operation.valor_unitario,
            operation_to_be_renewed.tipo_operacao = current_operation.operation.tipo_operacao,
            operation_to_be_renewed.valor_parcial = (
                current_operation.operation.quantidade * current_operation.operation.valor_unitario),
            operation_to_be_renewed.corretagem = current_operation.operation.corretagem,
            operation_to_be_renewed.taxa = current_operation.operation.taxa,
            operation_to_be_renewed.valor_final = (current_operation.operation.valor_operacao + current_operation.operation.corretagem + current_operation.operation.taxa) if current_operation.operation.tipo_operacao == 'COMPRA' else (
                current_operation.operation.valor_operacao - current_operation.operation.corretagem - current_operation.operation.taxa)
        raise HTTPException(detail='Operação não encontrada',
                            status_code=status.HTTP_404_NOT_FOUND)


@router.delete('/{operation_id}', status_code=status.HTTP_204_NO_CONTENT)
async def delete_operation(operation_id: int, db: AsyncSession = Depends(get_session)):
    async with db as session:
        query = select(OperationModel).filter(
            OperationModel.id == operation_id)
        resultQuery = await session.execute(query)
        operation_to_be_deleted: OperationModel = resultQuery.scalar_one_or_none()

        if operation_to_be_deleted:
            await session.delete(operation_to_be_deleted)
            await session.commit()
        else:
            raise HTTPException(detail='Operação não encontrada',
                                status_code=status.HTTP_404_NOT_FOUND)
