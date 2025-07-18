import React from 'react';
import FlowBuilder from './components/FlowBuilder';
import './App.css';

/**
 * Main App component that renders the Chatbot Flow Builder
 * This is the entry point for the application
 */
function App() {
  return (
    <div className="App">
      <FlowBuilder />
    </div>
  );
}

export default App;