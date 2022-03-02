import * as React from 'react';
import TreeItem from '@mui/lab/TreeItem';
import { useSelector } from 'react-redux'
  
  export const PrintTreeItem = (itemId) => {
    const id = itemId?.id;
    const item = useSelector((state) => state.nodes[[id]]);
    const isItemValid = item && item.children && item.name;
    return (
      <>
        {isItemValid && <TreeItem nodeId={id} label={item.name} >
            {item.children.map(child_id => 
                <PrintTreeItem key = {child_id} id = { child_id } />
            )}
        </TreeItem>}
      </>
    )  
  };

  export const GetRootFromServer = (itemId) => {
    const [rootId, setRootId] = React.useState(null);

    React.useEffect(() => {
      fetch("/nodes/getRootId/")
        .then((res) => res.json())
        .then((rootId) => setRootId(rootId));
    }, []);


    
    return (rootId);
  };