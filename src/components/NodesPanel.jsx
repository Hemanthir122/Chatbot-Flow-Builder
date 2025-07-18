import React from "react";
import { MessageCircle, Plus } from "lucide-react";

const NodesPanel = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="h-full p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Nodes Panel
        </h2>
        <p className="text-sm text-gray-600">
          Drag and drop nodes to create your chatbot flow
        </p>
      </div>

      <div className="space-y-4">
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Available Nodes
          </h3>
        </div>

        <div
          className="group cursor-move p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
          draggable
          onDragStart={(event) => onDragStart(event, "textNode")}
        >
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
              <MessageCircle size={20} className="text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Message</h4>
              <p className="text-sm text-gray-600">Send a text message</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodesPanel;
