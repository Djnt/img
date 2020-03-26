import React, {Component} from 'react'
import 'bootstrap-scss'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import PageContainer from './components'
import './styles/index.scss';

class App extends Component {
  render() {
    return (
      <div className="home-page-block">
        <PageContainer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
