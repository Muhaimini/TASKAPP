import { connect } from 'react-redux' 
import { FaGithub } from 'react-icons/fa'
import { Component } from 'react'
import { IconButton } from '@chakra-ui/button'
import { Props, State } from './services/interface'
import { Header, Body } from './component/index'
import { mapDispatchToProps, mapStateToProps } from './services/functions'
import { VStack } from '@chakra-ui/react'

class App extends Component<Props, State> {

  componentDidMount = () => {
    console.log(this.props)
  }

  event = () => {
    this.props.incQuantity!()
    console.log(`This is github icon!`) 
  }

  render = (): JSX.Element => {
      return (
        <>
          <VStack padding={5}>
              <IconButton aria-label='github' icon={<FaGithub/>} isRound={true} onClick={this.event}></IconButton>
              <Header />
            <Body />
          </VStack>
        </>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
