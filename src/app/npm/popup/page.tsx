"use client";

import { initializeSDK, Attributes } from "@pier39/web-sdk";

const sdk = initializeSDK({ isTestMode: false });

export default function HelloWorld() {

    const handleShowPlacement = () => {
        sdk.showPlacement("cd8b5d25-1d17-4237-a14b-a72a50d71f48", {
          orderId: "6687787024554",
          orderValue: 100,
          orderCurrency: "USD",
          customerEmail: "test@test.com",
          customerPhone: "1234567890",
          customerFirstName: "John",
          customerLastName: "Doe",
          customerZipCode: "12345",
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
