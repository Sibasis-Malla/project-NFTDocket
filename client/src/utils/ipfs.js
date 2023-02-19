import { NFTStorage, File, Blob } from 'nft.storage'
// Paste your NFT.Storage API key into the quotes:
const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEFGMmVDM0Q4MkYxMUM1NjA1NWZBNWFkOGJEMmZlNGJDMTRkM0EwNjgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0NjcyMjQwMTM5MCwibmFtZSI6Ik15c3RpcSJ9.9wx6DojaYvvPGdBQ5WPA5zjFpt3rbVaWDcVmwZilKRk'

const client = new NFTStorage({ token: NFT_STORAGE_KEY })
export default client