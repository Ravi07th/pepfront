import { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";

type Props = {
  tailwindCode: string;
  uiMaterialCode: string;
};

const SwitchCode = ({ tailwindCode, uiMaterialCode }: Props) => {
  const [mode, setMode] = useState<"tailwind" | "uimaterial">("tailwind");
  const [expand, setExpand] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const codeRef = useRef<HTMLDivElement>(null);

  const handleCopyCode = () => {
    const code = mode === "tailwind" ? tailwindCode : uiMaterialCode;
    navigator.clipboard.writeText(code).then(() => {
      toast.success("Code copied!");
    });
  };

  // Detect code block height
  useEffect(() => {
    const el = codeRef.current;
    if (!el) return;

    const observer = new ResizeObserver(() => {
      setContentHeight(el.scrollHeight);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [mode]);

  
  return (
    <div className="border w-full border-gray-700 rounded-md overflow-hidden shadow">
      {/* Header Tabs */}
      <div className="flex justify-between items-center bg-gray-800 px-0">
        <div className="flex">
          <button
            onClick={() => {
              setMode("tailwind");
              setExpand(false);
            }}
            className={`px-4 py-2 text-sm font-medium ${
              mode === "tailwind"
                ? "bg-gray-900 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            TAILWIND CSS
          </button>
          <button
            onClick={() => {
              setMode("uimaterial");
              setExpand(false);
            }}
            className={`px-4 py-2 text-sm font-medium ${
              mode === "uimaterial"
                ? "bg-gray-900 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            UIMATERIAL PRO
          </button>
        </div>
        <button
          onClick={handleCopyCode}
          className="text-sm text-white bg-gray-700 hover:bg-gray-600 px-4 py-1 rounded-md transition mr-2"
        >
          Copy Code
        </button>
      </div>

      {/* Code Block */}
      <div
        ref={codeRef}
        className={`bg-[#282c34] text-sm overflow-x-auto transition-all duration-300 ${
          !expand && contentHeight > 350 ? "max-h-[350px] overflow-hidden" : ""
        }`}
      >
        <SyntaxHighlighter
          language="html"
          style={oneDark}
          wrapLines
          wrapLongLines
          customStyle={{ margin: 0, padding: "1rem" }}
        >
          {mode === "tailwind" ? tailwindCode : uiMaterialCode}
        </SyntaxHighlighter>
      </div>

      {/* Expand Button (only if height > 450px) */}
      {contentHeight > 350 && (
        <button
          onClick={() => setExpand(!expand)}
          className="text-sm text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 w-full transition"
        >
          {expand ? "Collapse" : "Expand"}
        </button>
      )}
    </div>
  );
};

export default SwitchCode;
