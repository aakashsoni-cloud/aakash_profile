const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    // for root folder
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }

    // for child folders
    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  }

  function deleteNode(tree, folderId, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      return null;
    }

    if (tree.items && tree.items.length > 0) {
      let updatedItems = tree.items
        .map((item) => deleteNode(item, folderId, isFolder))
        .filter((item) => item !== null);

      return { ...tree, items: updatedItems };
    }

    return tree;
  }

  function updateNode(tree, folderId, item, isFolder) {
    if (tree.id == folderId && tree.isFolder) {
      return { ...tree, name: item };
    }

    if (tree.items && tree.items.length > 0) {
      let updatedTree = tree.items.map((obj) => {
        return updateNode(obj, folderId, item, isFolder);
      });
      return { ...tree, items: updatedTree };
    }

    return tree;
  }

  return { insertNode, deleteNode, updateNode };
};

export default useTraverseTree;
