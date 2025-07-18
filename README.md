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


### Installation

```bash
git clone <repo-url>
cd project
npm install
npm run dev
```


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

<img width="1919" height="916" alt="image" src="https://github.com/user-attachments/assets/ad142b78-86b3-4d59-bebd-ae5dacd824d5" />


---

### Connecting nodes

<img width="1897" height="906" alt="image" src="https://github.com/user-attachments/assets/7c9eebee-44ce-43a1-b5ba-b3403a2f677b" />


---

### Editing node in the Settings Panel

<img width="1912" height="917" alt="image" src="https://github.com/user-attachments/assets/b8eb4c76-c07b-496c-9bc7-24e6dee84e5b" />


---


