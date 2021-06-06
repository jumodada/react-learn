import './App.css';
import { GlobalStyle } from  './style';
import { IconStyle } from './assets/iconfont/iconfont';
import routes from './route/index.js'
import {renderRoutes} from "react-router-config";
import {HashRouter} from "react-router-dom";
import store from './store/index'
import {Provider} from "react-redux";
function App() {
  return (
      <Provider store={store}>
        <HashRouter className="App">
          <GlobalStyle />
          <IconStyle />
          { renderRoutes(routes) }
        </HashRouter>
      </Provider>

  );
}

export default App;
