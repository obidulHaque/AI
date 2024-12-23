import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Aiselect } from "./aiSelect";
import SearchSubmitButton from "./searchSubmitButton";

export default function SearchContainer() {
  return (
    <div className="w-full max-w-[80%] sm:max-w-[50%] bg-zinc-700 fixed bottom-5 left-1/2 transform -translate-x-1/2 text-white rounded-2xl p-2 z-50">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <Textarea
          placeholder="Message AI"
          className="flex-1 border-none text-white placeholder-gray-400 resize-none focus:outline-none rounded-lg p-2 h-auto max-h-[6rem] overflow-y-auto scrollbar-hide"
        />
        <Aiselect />
        <SearchSubmitButton />
      </div>
    </div>
  );
}
