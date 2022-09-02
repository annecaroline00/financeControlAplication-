from fastapi import FastAPI

app = FastAPI()

operations = {
    1: {
        "data": "01/08/2022",
        "codigo": "ITSA4",
        "quantidade": 100,
        "valor_unitario": 9.500,
        "tipo_operacao": "COMPRA",
        # "valor_operacao": 950.0, (quantidade * valor_unitario)
        "corretagem": 2.500,
        "taxa": 0.285,
        # "valor_operacao": 952.785 (valor_operacao + corretagem + taxa)
    },
    2: {
        "data": "01/08/2022",
        "codigo": "B3SA3",
        "quantidade": 100,
        "valor_unitario": 20,
        "tipo_operacao": "VENDA",
        # "valor_operacao": 2000.0, (quantidade * valor_unitario)
        "corretagem": 2.500,
        "taxa": 0.600,
        # "valor_operacao": 1996.9 (valor_operacao - corretagem - taxa)
    }
}


@app.get('/operations')
async def getOperations():
    return operations


@app.get('/operations/{operartionId}')
async def getOperation(operartionId: int):
    return operations[operartionId]

if __name__ == '__main__':
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000,
                log_level="info", reload=True)
