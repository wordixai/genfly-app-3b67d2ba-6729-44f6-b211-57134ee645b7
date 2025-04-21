import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

interface CodeOutputProps {
  code: string;
}

export function CodeOutput({ code }: CodeOutputProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      className="mt-8 bg-gray-950 rounded-md overflow-hidden"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center px-4 py-2 bg-gray-800">
        <h3 className="text-sm font-medium">Generated Code</h3>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 text-xs text-gray-300 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check size={14} className="text-green-400" />
              Copied!
            </>
          ) : (
            <>
              <Copy size={14} />
              Copy code
            </>
          )}
        </button>
      </div>
      
      <pre className="p-4 overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
    </motion.div>
  );
}