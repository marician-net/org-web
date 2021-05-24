class ZapTransaction {
  txHash?: string

  block?: number

  timestamp?: string

  status?: string
  
  from?: string

  to?: string

  transactionFee?: number

  gasInfo?: string

  action?: string

  txAction?: string
  
  tokenTransfer?: string

  getObject = (): { [key: string]: any } => {
    return {
      txHash: this.txHash,
      block: this.block,
      timestamp: this.timestamp,
      status: this.status,
      from: this.from,
      to: this.to,
      transactionFee: this.transactionFee,
      gasInfo: this.gasInfo,
      action: this.action,
      txAction: this.txAction,
      tokenTransfer: this.tokenTransfer,
    }
  }

  // getUID = (): string => {
  //   return this.providerAddress + this.name
  // }
}

export default ZapTransaction
