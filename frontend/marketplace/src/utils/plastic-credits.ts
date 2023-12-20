import { ref } from "vue";
import {
  empowerchain,
  getSigningTM37EmpowerchainClient,
} from "@empower-plastic/empowerjs";
import { getWallet } from "@/utils/wallet-utils";
import { CHAIN_ID, RPC_ENDPOINT } from "@/config/config";

const { retireCredits } =
  empowerchain.plasticcredit.MessageComposer.withTypeUrl;

export const useRetireCredits = () => {
  const loading = ref(false);

  const handleRetireCredits = async (
    amount: any, // Typing, Johannes?!
    address: string,
    denom: string,
    retirererName: string,
    onSuccess: () => void,
    additionalInfo?: string,
  ) => {
    try {
      loading.value = true;
      const retireCreditsMsg = retireCredits({
        owner: address,
        denom: denom,
        amount: amount as bigint,
        retiringEntityName: retirererName,
        retiringEntityAdditionalData: additionalInfo ?? "",
      });
      const wallet = getWallet();
      const offlineSigner = wallet.getOfflineSigner(CHAIN_ID);
      const chainClient = await getSigningTM37EmpowerchainClient({
        rpcEndpoint: RPC_ENDPOINT,
        signer: offlineSigner,
      });
      const fee = {
        amount: [{ amount: "100000", denom: "umpwr" }],
        gas: "200000",
      };
      const response = await chainClient.signAndBroadcast(
        address,
        [retireCreditsMsg],
        fee,
      );
      if (response && !response.code) {
        loading.value = false;
        onSuccess();
      } else {
        throw new Error("Retire credits failed " + response.rawLog);
      }
    } catch (error) {
      loading.value = false;
      throw error;
    }
  };

  return {
    handleRetireCredits,
    loading,
  };
};
