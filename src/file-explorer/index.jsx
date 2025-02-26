import { useState } from "react";
import Navigation from "../navigation";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import "./index.css";
import useTraverseTree from "../hooks/use-tarverse-tree";

const FileExplorer = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode, deleteNode, updateNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  const handleDeleteNode = (folderId, isFolder) => {
    console.log("ex", explorerData);
    const finalTree = deleteNode(explorerData, folderId, isFolder);
    setExplorerData(finalTree);
  };

  const handleUpdateNode = (folderId, item, isFolder) => {
    const finalTree = updateNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="file-explorer">
      <Navigation />
      <Folder
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        handleUpdateNode={handleUpdateNode}
        explorer={explorerData}
      />
    </div>
  );
};

export default FileExplorer;
