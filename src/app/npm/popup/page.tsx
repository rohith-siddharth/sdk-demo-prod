"use client";

import { initializeSDK, SDKInitConfig, Attributes } from "@pier39/web-sdk";

const sdk = initializeSDK({ isTestMode: true },() => {
  console.log('SDK initialized');
},
(error) => {
  console.log('SDK initialization error', error);
});

export default function HelloWorld() {

    const handleShowPlacement = () => {
        sdk.showPlacement("9221178e-e0ca-4e46-bd91-8b176a9e3516", {
          orderId: "6687787024554"
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
