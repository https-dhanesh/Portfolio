"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { HiDownload } from "react-icons/hi";
import { motion, useAnimationControls } from "framer-motion";

const HoldToDownloadButton = () => {
  const [showHint, setShowHint] = useState(false);
  const isHoldingRef = useRef(false);
  const controls = useAnimationControls();

  const handleMouseDown = () => {
    isHoldingRef.current = true;

    controls
      .start({
        pathLength: 1,
        transition: { duration: 1.5, ease: "linear" },
      })
      .then(() => {
        if (isHoldingRef.current) {
          const link = document.createElement("a");
          link.href = "/Dhanesh_Resume.pdf";
          link.download = "Dhanesh_Resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }

        isHoldingRef.current = false;

        controls.start({ pathLength: 0, transition: { duration: 0.1 } });
      });
  };

  const handleMouseUpOrLeave = () => {
    if (isHoldingRef.current) {
      setShowHint(true);
      setTimeout(() => setShowHint(false), 1200);
    }

    isHoldingRef.current = false;

    controls.start({
      pathLength: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    });
  };

  return (
    <div className="relative inline-block">
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={showHint ? { opacity: 1, y: -12 } : { opacity: 0, y: -5 }}
        transition={{ duration: 0.25 }}
        className="absolute left-1/2 -translate-x-1/2 -top-6 
                   bg-black text-white text-xs px-3 py-1 
                   rounded-md shadow-md pointer-events-none"
      >
        Hold to download
      </motion.div>

      <Button
        variant="ghost"
        size="lg"
        className="text-gray-300 hover:bg-slate-800 hover:text-white relative"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}

        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUpOrLeave}
        onTouchCancel={handleMouseUpOrLeave}
        
      >
        <div className="absolute inset-0 w-full h-full pt-3 ml-2 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="70"
              stroke="#ef4444"
              strokeOpacity="0.2"
              strokeWidth="10"
              fill="transparent"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke="#ef4444"
              strokeWidth="5"
              fill="transparent"
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
              initial={{ pathLength: 0 }}
              animate={controls}
            />
          </svg>
        </div>
        <span className="relative z-10 flex items-center pl-2">
          Download CV <HiDownload className="ml-2 h-5 w-5" />
        </span>
      </Button>
    </div>
  );
};

export default HoldToDownloadButton;
