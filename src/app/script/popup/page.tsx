"use client";


export default function HelloWorld() {

    const handleShowPlacement = () => {
        console.log("Showing placement");
        
        console.log('P39', (window as any).P39);
        (window as any).P39?.showPlacement("cd8b5d25-1d17-4237-a14b-a72a50d71f48", {});
    }

  return (
    <div className="min-h-screen flex bg-gray-100" style={{ padding: '20px' }}>
      <div className="">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Script Popup Placement Test
        </h1>
        <button onClick={handleShowPlacement} style={{ margin: '20px 0px' }}>
            Show Placement
        </button>
      </div>
    </div>
  );
}


