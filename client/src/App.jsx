import React, { useState } from "react";
import { Input } from "./components/ui/input";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Analytics from "./components/Analytics";

const App = () => {
  const [url, setUrl] = useState("");
  const [shortid, setShortid] = useState("");
  console.log(url);

  const shortenLinkHandler = async (e) => {
    try {
      const res = await axios.post(
        `http://localhost:4000/url`,
        { url },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setShortid(res.data.shortId);
      console.log(res.data.message);
      console.log(res.data.shortId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-screen bg-[#FFECCC]">
      <h1 className="text-5xl font-bold mx-auto text-[#722323] px-[36%] py-7">
        URL SHORTENER
      </h1>
      <Input
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Place your long URL here..."
        className="text-bold w-[550px] mx-[31%] mt-4"
      ></Input>
      <div className="flex gap-2 mx-[31%]">
        <button
          onClick={shortenLinkHandler}
          className="bg-blue-700 font-bold rounded-md px-2 py-1 mt-2"
        >
          Shorten link
        </button>
        <button
          onClick={() => window.open(`/analytics/${shortid}`, "_blank")}
          className="bg-green-700 font-bold rounded-md px-2 py-1 mt-2 text-white"
        >
          📊 View Analytics
        </button>
      </div>

      {shortid && (
        <div className="flex flex-col items-center justify-center mt-6">
          <div className="bg-white rounded-xl shadow-lg p-6 w-[450px] text-center border border-gray-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              🎉 Your shortened URL
            </h2>
            <a
              href={`http://localhost:4000/${shortid}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 text-lg font-medium hover:underline break-all"
            >
              http://localhost:4000/{shortid}
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  `http://localhost:4000/${shortid}`
                );
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              📋 Copy to Clipboard
            </button>
          </div>
        </div>
      )}
      <Routes>
      <Route path="/analytics/:shortId" element={<Analytics />} />
      </Routes>
    </div>
  );
};

export default App;
