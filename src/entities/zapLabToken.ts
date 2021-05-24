/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 */
class ZapLabToken {
  providerTitle?: string

  providerAddress?: string

  providerParams?: { [key: string]: string }

  brokerAddress?: string

  name?: string

  curve?: string[]

  totalBound?: string

  dotLimit?: string

  spotPrice?: string

  markdown?: string

  json?: string

  // Doubles as the user balance if isToken is true
  userBound?: string

  zapBound?: string

  isToken?: boolean

  symbol?: string

  tokenAddress?: string
  
  isTDFOwner?: boolean

  getObject = (): { [key: string]: any } => {
    return {
      providerTitle: this.providerTitle,
      providerAddress: this.providerAddress,
      providerParams: this.providerParams,
      brokerAddress: this.brokerAddress,
      name: this.name,
      curve: this.curve,
      totalBound: this.totalBound,
      dotLimit: this.dotLimit,
      spotPrice: this.spotPrice,
      markdown: this.markdown,
      json: this.json,
      userBound: this.userBound,
      zapBound: this.zapBound,
      isToken: this.isToken,
      symbol: this.symbol,
      tokenAddress: this.tokenAddress,
      isTDFOwner: this.isTDFOwner,
    }
  }

  getUID = (): string => {
    return this.providerAddress + this.name
  }
}

export default ZapLabToken
