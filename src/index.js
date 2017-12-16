import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const MaterialUITheme = ()=>(
    <MuiThemeProvider>
        <App/>
    </MuiThemeProvider>
);

ReactDOM.render(<MaterialUITheme />, document.getElementById('root'));
registerServiceWorker();
