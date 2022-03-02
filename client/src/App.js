import React from "react";
import { PrintTree } from './containers/printTree'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import logo from './style.css'


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
      <div className="logo"></div>
      <PrintTree/>
    </Provider>
    </>
  );
}

export default App;
