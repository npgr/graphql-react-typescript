import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default () => (
  <>
    <Menu fixed="top">
      <Menu.Header style={{ margin: '10px' }}>
        <h3 data-test="appTitle">Investment</h3>
      </Menu.Header>
      <Link to="/about">About</Link>
    </Menu>
    <div style={{ height: '50px' }}></div>
  </>
)
