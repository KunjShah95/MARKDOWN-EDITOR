
import React, { useState } from "react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import MarkdownPreview from "./MarkdownPreview";
import CodeEditor from "./CodeEditor";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState<string>(`# Welcome to the Markdown Editor

## Features

- **Live Preview:** See your changes as you type
- **Syntax Highlighting:** Makes your code look beautiful
- **Split View:** Edit and preview side by side
- **GitHub Flavored Markdown:** Supports tables, task lists, and more

## Example Code

\`\`\`javascript
function greeting(name) {
  return \`Hello, \${name}!\`;
}

console.log(greeting('world'));
\`\`\`

## Tables

| Feature | Description |
|---------|-------------|
| Split View | Edit and preview side by side |
| Syntax Highlighting | Makes your code beautiful |
| Live Preview | See your changes as you type |

## Task Lists

- [x] Create markdown editor
- [x] Add syntax highlighting
- [x] Implement live preview
- [ ] Add more features

> This is a blockquote. You can use these to emphasize important information or quotes.
`);

  const handleChange = (value: string) => {
    setMarkdown(value);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <header className="bg-white border-b p-4 shadow-sm">
        <h1 className="text-2xl font-bold text-center">Markdown Editor</h1>
      </header>
      
      <div className="flex-grow overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          <ResizablePanel defaultSize={50} minSize={30} className="h-full">
            <CodeEditor value={markdown} onChange={handleChange} />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50} className="h-full">
            <MarkdownPreview markdown={markdown} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default MarkdownEditor;
