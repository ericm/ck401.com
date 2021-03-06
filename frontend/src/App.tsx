import * as React from 'react'
import AppMenu from './components/AppMenu/AppMenu'
import Globules from 'react-globules'
import * as styles from './App.css'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'

import fireApp, { Account } from './queries'

let account = new Account(fireApp)

const Home = () => (
  <div className={styles.home}>
    <Globules
      widthPercent={true}
      heightPercent={true}
      width={100}
      height={100}
      speed={4}
      density={30}
      color={'#1750d9'}
      background={'#1754e8'}
    >
      <h1><b><i className="fab fa-typo3"/>CK401</b> UCC Computer Science</h1>
    </Globules>

  </div>
)

const Menu = withRouter(props => (<AppMenu {...props} account={account} />))

export default () => {
  return (
    <Router>
      <Menu />
      <div>
        <Route path="/" component={Home} />
      </div>
    </Router>
  )
}
