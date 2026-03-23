"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [hash, setHash] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first");
    
    // Simulating hash generation for UI structure purposes
    setHash("Dummy hash generation... Please start the backend to actually generate!");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">File Integrity Checker</h1>
      
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Upload File</h2>
        
        <input 
          type="file" 
          onChange={handleFileChange}
          className="mb-4 block w-full text-sm text-gray-400
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-600 file:text-white
            hover:file:bg-blue-700
            cursor-pointer"
        />
        
        <button 
          onClick={handleUpload}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Generate Hash
        </button>

        {hash && (
          <div className="mt-6 p-4 bg-gray-900 rounded border border-gray-700 break-all">
            <h3 className="text-green-400 font-semibold mb-2">Hash result:</h3>
            <p className="text-sm font-mono text-gray-300">{hash}</p>
          </div>
        )}
      </div>
    </main>
  );
}
