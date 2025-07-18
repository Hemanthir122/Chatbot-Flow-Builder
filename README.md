# Chatbot Flow Builder

A **clean, extensible chatbot flow builder** using **React + React Flow**, allowing you to visually create chatbot conversation flows with drag-and-drop nodes and connections.

---

## 🚀 Features

- **Drag & Drop:** Easily add message nodes to your flow.
- **Visual Flow Builder:** Clean, intuitive interface.
- **Node Editing:** Click to edit node text in a side panel.
- **Connection Management:** One outgoing connection per source handle, multiple incoming allowed.
- **Validation Before Save:** Ensures all nodes are connected before saving.
- **Extensible Architecture:** Easily add new node types.

---

## 🛠️ Tech Stack

- **React + JSX**
- **React Flow** (drag, drop, connect nodes)
- **Tailwind CSS** (styling)
- **Vite** (fast dev environment)
- **Lucide React** (icons)

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation

```bash
git clone <repo-url>
cd project
npm install
npm run dev
```

src/
│
├── components/
│ ├── FlowBuilder.jsx # Main component managing flow state & React Flow
│ ├── Header.jsx # App header with save button & status
│ ├── NodesPanel.jsx # Sidebar for adding nodes
│ ├── SettingsPanel.jsx # Sidebar for editing node properties
│ └── nodes/
│ └── TextNode.jsx # Custom node component for message nodes
│
└── main.jsx # Entry point

## 🧑‍💻 Usage

### Creating Nodes

Drag the "Message" node from the Nodes Panel to the canvas.

Multiple nodes can be added to create branching flows.

### Connecting Nodes

Drag from the right handle (source) of one node to the left handle (target) of another.

One outgoing edge per source handle.

Multiple incoming edges allowed.

### Editing Nodes

Click a node to select it.

The Settings Panel will appear to edit text.

Changes save automatically in the local flow state.

### Saving Flows

Click "Save Changes" in the header.

Validation checks that all nodes are connected.

Displays success or error message based on validation.

## 📸 Screenshots

Add screenshots here for clarity

### Drag & drop node on canvas

![Drag & Drop Screenshot](./screenshots/drag-drop.png)

---

### Connecting nodes

![Connecting Nodes Screenshot](./screenshots/connect-nodes.png)

---

### Editing node in the Settings Panel

![Editing Node Screenshot](./screenshots/edit-node.png)

---

### Saving flow with validation

![Saving Flow Screenshot](./screenshots/save-flow.png)
