"use client";

import { initializeSDK, SDKInitConfig, Attributes } from "@pier39/web-sdk";

const sdk = initializeSDK({ isTestMode: true },() => {
  console.log('SDK initialized');
},
(error) => {
  console.log('SDK initialization error', error);
});

export default function HelloWorld() {

  console.log('sdk', sdk);

    const handleShowPlacement = () => {
        sdk.showPlacement("551fc473-b067-444b-8675-f65acae7cce5", {
          orderId: "6687787024554"
        });
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{ padding: '20px' }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          NPM Embed Placement Test
        </h1>
        <button onClick={handleShowPlacement} style={{ margin: '20px 0px' }}>
          Show Placement
        </button>

        <div className="mt-[100px]">
          <div id="pier39" className="w-[515px] h-[530px]"></div>
        </div>
      </div>
    </div>
  );
}
