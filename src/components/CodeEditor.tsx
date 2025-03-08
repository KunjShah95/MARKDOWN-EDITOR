
import React from "react";
import { cn } from "@/lib/utils";

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  // Count the number of lines for line numbers
  const lines = value.split("\n").length;
  const lineNumbers = Array.from({ length: lines }, (_, i) => i + 1);

  return (
    <div className="h-full relative flex bg-gray-50 text-gray-800 overflow-hidden">
      <div className="py-4 pl-2 pr-3 text-right bg-gray-100 text-gray-500 select-none w-12 font-mono text-sm overflow-y-hidden">
        {lineNumbers.map((num) => (
          <div key={num} className="leading-6">
            {num}
          </div>
        ))}
      </div>
      <textarea
        value={value}
        onChange={handleChange}
        className={cn(
          "flex-1 p-4 focus:outline-none resize-none font-mono text-sm leading-6",
          "scrollbar-thin scrollbar-thumb-gray-300",
          "border-0"
        )}
        spellCheck="false"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
      />
    </div>
  );
};

export default CodeEditor;
