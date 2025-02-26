/* eslint-disable react/prop-types */
import { useState } from "react";
import "./folder.css";
const Folder = (props) => {
  const { handleInsertNode, handleDeleteNode, handleUpdateNode, explorer } =
    props;

  const [expand, setExpand] = useState(false);
  const [newName, setNewName] = useState("");
  const [editId, setEditId] = useState(null);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    handleDeleteNode(explorer.id, showInput.isFolder);
    setShowInput({ ...showInput, visible: false });
  };

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  const handleUpdate = (e, isFolder) => {
    e.stopPropagation();
    setEditId(explorer.id);
    setNewName(e.target.value);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  const handleSave = () => {
    if (newName.trim()) {
      handleUpdateNode(explorer.id, newName, showInput.isFolder);
    }
    setEditId(null);
    setNewName("");
  };

  console.log(explorer);
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          {editId === explorer.id ? (
            <input
              type="text"
              value={!newName ? explorer.name : newName}
              onChange={handleInputChange}
              onBlur={handleSave}
              autoFocus
            />
          ) : (
            <span>📁 {explorer.name}</span>
          )}

          <div className="folder-button">
            <button onClick={(e) => handleUpdate(e, true)}>🪄</button>
            <button onClick={(e) => handleDelete(e)}>❌</button>
            <button onClick={(e) => handleNewFolder(e, true)}>📁 +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>📄 +</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 20 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁 " : "📄 "}</span>
              <input
                className="inputContainer_input"
                autoFocus
                onKeyDown={(e) => onAddFolder(e)}
                onBlur={() =>
                  setShowInput({ ...showInput, visible: false })
                }></input>
            </div>
          )}

          {explorer.items?.map((exp) => (
            <Folder
              key={exp.id}
              handleInsertNode={handleInsertNode}
              handleDeleteNode={handleDeleteNode}
              handleUpdateNode={handleUpdateNode}
              explorer={exp}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="file">
          <span>📄 {explorer.name}</span>
        </div>
      </div>
    );
  }
};

export default Folder;
