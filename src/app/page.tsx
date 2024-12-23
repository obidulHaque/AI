import React from "react";
import Navbar from "../../components/navbar";
import SearchContainer from "../../components/searchContainar";
import ChatContainer from "../../components/chatContainer";
import { AppSidebar } from "../../components/app-sidebar";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex">
      <AppSidebar />

      <div className="flex-grow flex flex-col">
        {/* Navbar fixed at the top */}
        <Navbar />

        {/* ChatContainer in the middle */}
        <div className="flex-grow overflow-y-auto">
          <ChatContainer />
        </div>

        {/* SearchInput fixed at the bottom */}
        <SearchContainer />
      </div>
    </div>
  );
}
