import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { PrintTreeItem, GetRootFromServer } from "./printTreeUtils";

export const PrintTree = () => {
  const root = GetRootFromServer();
  return (
    <>
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
        {PrintTreeItem(root)}
    </TreeView>
    </>
  );
};
