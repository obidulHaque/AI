"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SidebarTrigger } from "@/components/ui/sidebar";
import useSidebarTrigger from "../src/zustand/useSidebarTrigger";

export default function Navbar() {
  const { sidebar, toggleSidebar } = useSidebarTrigger();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Function to update the `isMobile` state based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set `isMobile` based on the screen width
    };

    // Run the resize handler on mount to check the initial window size
    handleResize();

    // Add event listener to handle resizing dynamically
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Render SidebarTrigger if either sidebar is true or isMobile is true
  const showSidebarTrigger = sidebar || isMobile;

  return (
    <div className="w-screen h-[5vh] flex items-center border-b-[1px] border-white fixed top-0 bg-black py-4 z-20">
      {showSidebarTrigger && (
        <SidebarTrigger className="text-white" onClick={toggleSidebar} />
      )}
      <div className="flex items-center gap-3 absolute sm:left-8 md:left-28 left-10">
        <Image
          src={"/chatgpt-icon.png"}
          alt="icon"
          width={24}
          height={24}
          className="sm:w-8 sm:h-8"
        />
        <h1 className="text-white text-lg sm:text-base md:text-xl font-semibold">
          Nahim Ai
        </h1>
      </div>
    </div>
  );
}
