import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';

const CompleteApp = () => {
    return <App />;
}


ReactDOM.render(<CompleteApp />, document.querySelector('#root'));