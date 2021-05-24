import CID from 'cids'
import { getCodec, rmPrefix } from 'multicodec'
import { decode, toB58String } from 'multihashes'

export function hexToUint8Array(hex: string): Uint8Array {
  let _hex = hex
  _hex = _hex.startsWith('0x') ? _hex.substr(2) : _hex
  if (_hex.length % 2 !== 0) throw new Error('_hex must have length that is multiple of 2')
  const arr = new Uint8Array(_hex.length / 2)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(_hex.substr(i * 2, 2), 16)
  }
  return arr
}

const UTF_8_DECODER = new TextDecoder()

/**
 * Returns the URI representation of the content hash for supported codecs
 * @param contenthash to decode
 */
export default function contenthashToUri(contenthash: string): string {
  const buff = hexToUint8Array(contenthash)
  const codec = getCodec(buff as Buffer) // the typing is wrong for @types/multicodec
  switch (codec) {
    case 'ipfs-ns': {
      const data = rmPrefix(buff as Buffer)
      const cid = new CID(data)
      return `ipfs://${toB58String(cid.multihash)}`
    }
    case 'ipns-ns': {
      const data = rmPrefix(buff as Buffer)
      const cid = new CID(data)
      const multihash = decode(cid.multihash)
      if (multihash.name === 'identity') {
        return `ipns://${UTF_8_DECODER.decode(multihash.digest).trim()}`
      } 
        return `ipns://${toB58String(cid.multihash)}`
      
    }
    default:
      throw new Error(`Unrecognized codec: ${codec}`)
  }
}
