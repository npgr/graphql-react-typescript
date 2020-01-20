import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { AppHeader } from 'components/AppHeader'
import { Home } from 'pages/Home'

const App: React.FC = () => (
  <BrowserRouter>
    <Container>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* 
      <Route path='/detail/:id' component={Detail} />
      <Route path='/about' component={About} /> 
      Not found Page
      */}
      </Switch>
    </Container>
  </BrowserRouter>
)

export default App
