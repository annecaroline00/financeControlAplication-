export interface Operation {
  id?: number,
  codigo: string,
  data: Date,
  quantidade: number,
  valor_unitario: number,
  tipo_operacao: string,
  valor_parcial?: number,
  corretagem: number,
  taxa: number,
  valor_final?: number
}
