import { createActor } from "../../../../declarations/mempool"


const actor = createActor(import.meta.env.VITE_MEMPOOL_CANISTER_ID);

const IcpService = {
  setblock: async () => {
    try {
      const response = await actor.set_block_hash(
        "000000000000000000024c7cd38045d8e7fe447e12a3a916161e603dcdd35414"
      );
      return response
    } catch (error) {
      return error
    }
  },
  getBlockInfo: async () => {
    try {
      const response = await actor.get_bitcoin_block_info()
      return response
    } catch (error) {
      return error
    }
  },
  getHashblocks: async (count: bigint) => {
    try {
      const response = await actor.fetch_bitcoin_blocks(count)
      return response
    }
    catch (error) {
      return error
    }
  },
  getAddressInfo: async (address: string) => {
    try {
      const response = await actor.get_address_info(address)
      return response
    }
    catch (error) {
      return error
    }
  },
  getTransactionInfo: async (transaction: string) => {
    try {
      const response = await actor.get_bitcoin_transaction_info(transaction)
      return response
    }
    catch (error) {
      return error
    }
  }
}

export default IcpService