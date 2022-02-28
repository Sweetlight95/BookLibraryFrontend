// import Landing from './components/landing/Landing'
import {Box} from '@chakra-ui/react'
import Landing2 from './components/landing/Landing2'
import Login from './components/login/Signin'
import Signup from './components/login/Signup'
import Landing from './components/landing/Landing'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
      <Box>
        <Switch>
            <Route exact path="/" component = {Landing}/>
             <Route path="/book-store" component = {Landing}/>
             <Route path="/sign-up" component = {Signup}/>
            <Route path="/log-in" component={Login}/>
        </Switch>
                  
    </Box>
    
  );
}

export default App;