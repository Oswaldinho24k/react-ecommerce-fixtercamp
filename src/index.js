import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const WithRouter = () => (
    <BrowserRouter>
       <MuiThemeProvider>
           <App/>
       </MuiThemeProvider>
    </BrowserRouter>
);



ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
