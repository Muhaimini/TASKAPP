import { connect } from 'react-redux' 
import { Component } from 'react'
import { Props, State } from '../services/interface'
import { mapStateToProps } from '../services/functions' 
import { Flex, Heading, Box, Text, Spacer } from '@chakra-ui/react'

class Header extends Component<Props, State> {

    render = (): JSX.Element => {
        return(
            <>
                <Flex w="100%" align="center" >
                    <Box>
                    <Heading size="md" fontWeight="semibold">
                        <Text
                            bgGradient='linear(to-l, #7928CA, #FF0080)'
                            bgClip='text'
                        >TASKAPP</Text>
                    </Heading>
                    </Box>
                    <Spacer />
                    <Box>
                        <Text>ITEM : { this.props.datastate.quantity }</Text>
                    </Box>
                </Flex>
                <Box>
                    <Text fontSize="4xl" fontWeight="semibold">Images List</Text>
                </Box>
            </>
        )
    }
}

export default connect(mapStateToProps)(Header)