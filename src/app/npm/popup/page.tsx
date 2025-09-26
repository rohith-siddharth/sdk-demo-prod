"use client";

import { initializeSDK, Attributes } from "@pier39/web-sdk";

const sdk = initializeSDK({ isTestMode: false });

export default function HelloWorld() {

    const handleShowPlacement = () => {
        sdk.showPlacement("1dbfb99e-6479-45f1-90d4-a106dc3ddbcb", {
          orderId: "668778702455"
        });
    }

  return (
    <div className="min-h-screen flex bg-gray-100" style={{ padding: '20px' }}>
      <div className="">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          NPM Popup Placement Test
        </h1>
        <button onClick={handleShowPlacement} style={{ margin: '20px 0px' }}>
          Show Placement
        </button>
      </div>
    </div>
  );
}
