import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import registerServiceWorker from './helpers/registerServiceWorker'
import App from './components/App'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

registerServiceWorker();
