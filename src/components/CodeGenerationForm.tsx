import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Send, Loader2 } from "lucide-react";
import { CodeOutput } from "./CodeOutput";

export function CodeGenerationForm() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI code generation
    setTimeout(() => {
      const mockGeneratedCode = `// Generated code based on: "${prompt}"\n\nfunction main() {\n  console.log("Hello, this is your generated code!");\n  // Implementation would go here\n}\n\nmain();`;
      setGeneratedCode(mockGeneratedCode);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Code className="text-blue-400" size={24} />
            <h2 className="text-xl font-semibold">Describe your idea</h2>
          </div>
          
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the code you want to generate... (e.g., 'Create a React component that displays a responsive image gallery')"
            className="w-full h-32 p-4 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isGenerating}
          />
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isGenerating || !prompt.trim()}
              className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-colors ${
                isGenerating || !prompt.trim() 
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed" 
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Generating...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Generate Code
                </>
              )}
            </button>
          </div>
        </form>
        
        {generatedCode && !isGenerating && (
          <CodeOutput code={generatedCode} />
        )}
      </div>
    </motion.div>
  );
}