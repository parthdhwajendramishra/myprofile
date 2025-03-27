import { Highlight, themes } from "prism-react-renderer";
import { ContentBlock } from "../../../types/categoryTypes";
import { useState, useCallback } from "react";
import { ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline";

export const CodeContent = ({ block }: { block: ContentBlock }) => {
  const [copied, setCopied] = useState(false);

  // Normalize the code content
  const code = Array.isArray(block.content)
    ? block.content.join("\n")
    : block.content;

  // Determine language with fallback
  const language = block.language || "javascript";

  const handleCopyClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = code;
      textarea.style.position = "fixed"; // Prevent scrolling to bottom
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (copyErr) {
        console.error("Fallback copy failed: ", copyErr);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }, [code]);

  return (
    <div className="rounded-lg overflow-hidden bg-gray-800 my-4 relative group">
      {/* Language label */}
      <div className="absolute top-2 left-2 px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md">
        {language}
      </div>

      {/* Copy button */}
      <button
        className="absolute top-2 right-2 p-2 bg-gray-700 text-gray-300 rounded-md opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none hover:bg-gray-600"
        onClick={handleCopyClick}
        aria-label="Copy code"
        title="Copy to clipboard"
      >
        {copied ? (
          <CheckIcon className="h-4 w-4 text-green-400" />
        ) : (
          <ClipboardDocumentIcon className="h-4 w-4" />
        )}
      </button>

      {/* Code highlight */}
      <Highlight language={language} theme={themes.vsDark} code={code}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} p-4 overflow-x-auto text-sm`}
            style={{
              ...style,
              backgroundColor: "#1E1E1E", // VS Dark background
              margin: 0,
              fontFamily:
                "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="table-row">
                <span className="table-cell text-right pr-4 select-none text-gray-500 opacity-50 w-8">
                  {i + 1}
                </span>
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};
