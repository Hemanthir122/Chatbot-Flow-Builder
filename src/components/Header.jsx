import React from "react";
import { Save, CheckCircle, AlertCircle } from "lucide-react";

const Header = ({ onSave, saveError, saveSuccess }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Chatbot Flow Builder
          </h1>

          {saveError && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 px-3 py-1 rounded-lg">
              <AlertCircle size={16} />
              <span className="text-sm font-medium">{saveError}</span>
            </div>
          )}

          {saveSuccess && (
            <div className="flex items-center space-x-2 text-green-600 bg-green-50 px-3 py-1 rounded-lg">
              <CheckCircle size={16} />
              <span className="text-sm font-medium">
                Flow saved successfully!
              </span>
            </div>
          )}
        </div>

        <button
          onClick={onSave}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
        >
          <Save size={16} />
          <span className="font-medium">Save Changes</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
