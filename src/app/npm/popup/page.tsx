"use client";

import { initializeSDK, Attributes } from "@pier39/web-sdk";

const sdk = initializeSDK({ isTestMode: false });

export default function HelloWorld() {

    const handleShowPlacement = () => {
        sdk.showPlacement("cd8b5d25-1d17-4237-a14b-a72a50d71f48", {});
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
