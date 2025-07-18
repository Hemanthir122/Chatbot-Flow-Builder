import React, { useState, useEffect } from "react";
import { ArrowLeft, MessageCircle } from "lucide-react";

const SettingsPanel = ({ node, onUpdateNode, onClose }) => {
  const [text, setText] = useState(node.data.text || "");

  useEffect(() => {
    setText(node.data.text || "");
  }, [node.data.text]);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    onUpdateNode(node.id, { text: newText });
  };

  return (
    <div className="h-full p-6 bg-white">
      <div className="flex items-center space-x-3 mb-6">
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Go back to nodes panel"
        >
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <MessageCircle size={20} className="text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Message</h2>
            <p className="text-sm text-gray-600">Edit message content</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="message-text"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Text
          </label>
          <textarea
            id="message-text"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter your message here..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none h-32 transition-all"
          />
          <p className="mt-2 text-sm text-gray-500">
            This message will be sent to the user when this node is reached.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
