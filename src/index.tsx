import App from './App'
import ReactDOM from 'react-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import theme from './style/theme'
import './style/app.css'

ReactDOM.render(
  <Router>
    <Switch>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
            <Route component={App} />
        </ChakraProvider>
      </Provider>
    </Switch>
  </Router>,
  document.getElementById('root')
);

