import { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../services/functions'
import { Props, State } from '../services/interface'
import { 
    Modal, ModalBody, ModalOverlay, 
    ModalContent, ModalHeader,
    ModalFooter, Button, Image
 } from '@chakra-ui/react'
 

class ModalPop extends Component<Props, State> {

    componentDidMount = () => {
        console.log(`Url : ${this.props.datastate.url}`)
        console.log(`Modal: ${this.props.datastate.modal}`)
    }

    addButton = async () => {
        const promis = new Promise(() => {
            this.props.incQuantity!()
        })
        const res = await promis
        if(res){
            this.props.setModal!(true)
        }
    }

    render = (): JSX.Element => {
        return (
            <Modal closeOnOverlayClick={false} isOpen={true} onClose={() => false}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Image</ModalHeader>
                <ModalBody pb={6}>
                    <Image 
                        src={this.props.datastate.url}
                        alignSelf="center"
                        padding="10px"
                        mb="12"
                        backgroundColor="transparent"
                        boxShadow="dark-lg"
                        boxSize="400px"
                    />
                </ModalBody>

                <ModalFooter>
                    <Button
                    onClick={() => this.addButton()} 
                    colorScheme='blue' mr={3}>
                    Add to item { this.props.datastate.quantity !== 0 ? `(${this.props.datastate.quantity})` : '' }
                    </Button>
                    <Button onClick={() => this.props.setModal!(false)}>Close</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalPop)