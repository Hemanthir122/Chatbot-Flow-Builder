import React, { useState, useCallback, useRef } from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";

import TextNode from "./nodes/TextNode";
import NodesPanel from "./NodesPanel";
import SettingsPanel from "./SettingsPanel";
import Header from "./Header";

const nodeTypes = {
  textNode: TextNode,
};

const initialNodes = [];
const initialEdges = [];

const FlowBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [saveError, setSaveError] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);
  const reactFlowWrapper = useRef(null);

  const onConnect = useCallback(
    (params) => {
      const sourceHasEdge = edges.some(
        (edge) =>
          edge.source === params.source &&
          edge.sourceHandle === params.sourceHandle
      );
      if (sourceHasEdge) {
        setEdges((edges) =>
          edges.filter(
            (edge) =>
              !(
                edge.source === params.source &&
                edge.sourceHandle === params.sourceHandle
              )
          )
        );
      }
      setEdges((edges) => addEdge(params, edges));
    },
    [edges, setEdges]
  );

  const handleNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
    setSaveError("");
  }, []);

  const handlePaneClick = useCallback(() => {
    setSelectedNode(null);
    setSaveError("");
  }, []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      if (typeof type === "undefined" || !type || !reactFlowInstance) {
        return;
      }
      const position = reactFlowInstance.project({
        x:
          event.clientX -
          (reactFlowWrapper.current?.getBoundingClientRect().left || 0),
        y:
          event.clientY -
          (reactFlowWrapper.current?.getBoundingClientRect().top || 0),
      });
      const newNode = {
        id: `node-${Date.now()}`,
        type: "textNode",
        position,
        data: { text: "New message" },
        draggable: true,
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  const updateNodeData = useCallback(
    (nodeId, newData) => {
      setNodes((nds) =>
        nds.map((node) =>
          node.id === nodeId
            ? { ...node, data: { ...node.data, ...newData } }
            : node
        )
      );
    },
    [setNodes]
  );

  const handleSave = useCallback(() => {
    setSaveError("");
    setSaveSuccess(false);
    if (nodes.length > 1) {
      const nodeIds = nodes.map((node) => node.id);
      const connectedTargets = edges.map((edge) => edge.target);
      const unconnectedNodes = nodeIds.filter(
        (id) => !connectedTargets.includes(id)
      );
      if (unconnectedNodes.length > 1) {
        setSaveError("Cannot save Flow");
        return;
      }
    }
    console.log("Saving flow:", { nodes, edges });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  }, [nodes, edges]);

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header
        onSave={handleSave}
        saveError={saveError}
        saveSuccess={saveSuccess}
      />
      <div className="flex-1 flex">
        <ReactFlowProvider>
          <div className="flex-1 relative" ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onNodeClick={handleNodeClick}
              onPaneClick={handlePaneClick}
              onDrop={onDrop}
              onDragOver={onDragOver}
              nodeTypes={nodeTypes}
              fitView
              attributionPosition="bottom-left"
              className="bg-white"
            >
              <Background color="#f1f5f9" gap={20} />
              <Controls />
            </ReactFlow>
          </div>
        </ReactFlowProvider>
        <div className="w-80 bg-white border-l border-gray-200 shadow-lg">
          {selectedNode ? (
            <SettingsPanel
              node={selectedNode}
              onUpdateNode={updateNodeData}
              onClose={() => setSelectedNode(null)}
            />
          ) : (
            <NodesPanel />
          )}
        </div>
      </div>
    </div>
  );
};

export default FlowBuilder;
