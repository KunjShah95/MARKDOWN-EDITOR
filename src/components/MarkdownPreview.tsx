
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface MarkdownPreviewProps {
  markdown: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ markdown }) => {
  return (
    <div className="h-full overflow-auto bg-white">
      <div className="p-8 prose prose-slate max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ node, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            // Apply custom styling to tables
            table({ node, ...props }) {
              return (
                <table
                  className="border-collapse border border-slate-300 my-4 w-full"
                  {...props}
                />
              );
            },
            th({ node, ...props }) {
              return (
                <th
                  className="border border-slate-300 px-4 py-2 bg-slate-100 font-semibold"
                  {...props}
                />
              );
            },
            td({ node, ...props }) {
              return (
                <td className="border border-slate-300 px-4 py-2" {...props} />
              );
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownPreview;
