import React from "react";
import { PrintTree } from './containers/printTree'
import { useSelector, useDispatch } from 'react-redux'
import { fillTree } from './actions'
import { connect } from 'react-redux';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'





export const App = () => {
  const [folderTree, setFolderTree] = React.useState(null);

  React.useEffect(() => {
    fetch("/nodes/getTree")
      .then((res) => res.json())
      .then((folderTree) => setFolderTree(folderTree));
  }, []);

  const store = createStore(reducer, {'nodes': {...folderTree}})

  return (
    <>
    <Provider store={store}>
      <PrintTree/>
    </Provider>
    </>
  );
}

export default App;