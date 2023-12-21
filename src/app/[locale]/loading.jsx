"use client";

import Preloader from "../../components/common/Preloader";
import { useEffect, useState } from "react";

const Loading = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const handlePreloaderClose = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Simulate loading for 3 seconds (adjust as needed)
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>{loading ? <Preloader onClose={handlePreloaderClose} /> : { children }}</>
  );
};

export default Loading;
