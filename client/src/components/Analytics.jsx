import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Analytics = () => {
  const { shortId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // nicely formatted
  };

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/url/analytics/${shortId}`);
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch analytics", error);
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, [shortId]);

  if (loading) return <p className="text-center mt-10 text-lg">Loading analytics...</p>;

  return (
    <div className="min-h-screen bg-[#FFECCC] py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg border border-gray-200">
        <h1 className="text-2xl font-bold text-center text-blue-800 mb-4">
          🔍 URL Analytics
        </h1>

        <p className="text-lg font-medium text-gray-700 mb-2">
          Short ID: <span className="text-black">{shortId}</span>
        </p>
        <p className="text-lg font-medium text-gray-700 mb-4">
          Total Clicks: <span className="text-blue-600 font-bold">{data.totalClicks}</span>
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">Visit History:</h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-600">
          {data.analytics.map((entry, index) => (
            <li key={index}>{formatDate(entry.timestamp)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
