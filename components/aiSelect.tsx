import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const options = [
  { id: 1, value: "ChatGPT", iconUrl: "/chatgpt-icon.png" },
  { id: 2, value: "Copilot", iconUrl: "/copilot-icon.png" },
  { id: 3, value: "Gemini", iconUrl: "/google-gemini-icon.png" },
];

export function Aiselect() {
  return (
    <Select defaultValue={options[0].value}>
      <SelectTrigger className="w-[180px] border-none">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="border-none text-white">
        <SelectGroup>
          {options.map(({ id, value, iconUrl }) => (
            <SelectItem key={id} value={value}>
              <div className="flex items-center space-x-2">
                <Image
                  src={iconUrl}
                  width={16}
                  height={16}
                  alt={`${value} icon`}
                />
                <span>{value}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
