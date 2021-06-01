import './App.css';
import { GlobalStyle } from  './cssInJs';
import { IconStyle } from './assets/iconfont/iconfont';
import routes from './route/index.js'
import {renderRoutes} from "react-router-config";
import {HashRouter} from "react-router-dom";
function App() {
  return (
    <HashRouter className="App">
      <GlobalStyle />
      <IconStyle />
        { renderRoutes(routes) }
    </HashRouter>
  );
}

export default App;
