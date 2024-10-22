"use client";

import React, { useRef, useState, useEffect } from "react";

const WebcamComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [facingMode, setFacingMode] = useState<string>("user"); // Default to the front camera

  const openWebCam = () => {
    const mediaDevices = navigator.mediaDevices;

    // Accessing the user's camera and video using the selected facing mode
    mediaDevices
      .getUserMedia({
        video: { facingMode: facingMode }, // Set the facing mode based on user selection
        audio: true,
      })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.addEventListener("loadedmetadata", () => {
            videoRef.current?.play();
          });
        }
        setMediaStream(stream); // Store the stream in state
      })
      .catch((error) => {
        console.error("Error accessing media devices.", error);
        alert("Could not access the webcam.");
      });
  };

  const stopWebCam = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop());
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      setMediaStream(null);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-[500px] h-[400px] border-2 border-black relative">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
        />
      </div>
      <br />
      <div className="flex space-x-2 mb-4">
        <select
          value={facingMode}
          onChange={(e) => setFacingMode(e.target.value)}
          className="border border-gray-300 rounded py-1 px-2"
        >
          <option value="user">Front Camera</option>
          <option value="environment">Back Camera</option>
        </select>
        <button
          onClick={openWebCam}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Open WebCam
        </button>
        <button
          onClick={stopWebCam}
          disabled={!mediaStream}
          className={`bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 ${!mediaStream ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Stop WebCam
        </button>
      </div>
    </div>
  );
};

export default WebcamComponent;
