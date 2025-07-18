import React from "react";
import { Handle, Position } from "reactflow";
import { MessageCircle } from "lucide-react";

const TextNode = ({ data, selected }) => {
  return (
    <div
      className={`min-w-[200px] max-w-[300px] bg-white border-2 rounded-lg shadow-sm transition-all duration-200 ${
        selected
          ? "border-blue-500 shadow-lg"
          : "border-gray-200 hover:border-gray-300 hover:shadow-md"
      }`}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="!bg-gray-400 !border-white !w-3 !h-3 !-left-1.5"
      />

      <div className="flex items-center space-x-2 p-3 bg-teal-100 rounded-t-lg border-b border-teal-200">
        <div className="p-1 bg-teal-200 rounded">
          <MessageCircle size={14} className="text-teal-700" />
        </div>
        <span className="text-sm font-medium text-teal-800">Send Message</span>
      </div>

      <div className="p-3">
        <p className="text-sm text-gray-700 leading-relaxed">
          {data.text || "Enter your message..."}
        </p>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="!bg-gray-400 !border-white !w-3 !h-3 !-right-1.5"
      />
    </div>
  );
};

export default TextNode;
