// src/app.tsx
import { client } from "../client";
import { ConnectButton } from "thirdweb/react";

const ConnectWallet = async () => {
    return (
        <div>
            <ConnectButton client={client} />
        </div>
    );
}

export default ConnectWallet;
