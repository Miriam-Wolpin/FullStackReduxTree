import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { PrintTreeItem, GetRootFromServer } from "./printTreeUtils";

export const PrintTree = () => {
  const root = GetRootFromServer();
  return (
    <>
    <h1>Movies Tree</h1>
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      >
        {PrintTreeItem(root)}
    </TreeView>
    </>
  );
};

