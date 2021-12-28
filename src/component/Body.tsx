import { connect } from 'react-redux' 
import { Component } from 'react'
import { Props, State } from '../services/interface'
import { mapStateToProps, mapDispatchToProps } from '../services/functions'
import { Text, Image, Wrap, WrapItem } from '@chakra-ui/react'
import Fetch from '../services/Fetch'
import Modal from './Modal'

class Body extends Component<Props, State> {

    constructor(props: Props){
        super(props)
        this.state = {
            images: [],
            loading: false
        }
    }

    componentDidMount = async () => {
        const fetch = new Fetch()
        const result = await fetch.get('fashion')

        if(result.status === 200){
            const { data } = result
            this.setState({ 
                images: data, 
                loading: true 
            })
            this.props.setImages!(data)
        }
        
    }

    getSingleUrl = (url: string) => {
        this.props.setUrl!(url)
        this.props.setModal!(true)
    }

    cardImage = (arrImages: []): JSX.Element => {

        return this.state.loading ?
            <Wrap spacing="30px" justify="center" className="wrap" >
                {
                    arrImages.map((el: any, i: number) => 
                        <WrapItem key={el.id}>
                            <div style={{ textAlign: 'center', position: 'relative' }}>
                                <Image 
                                src={el.urls.regular}
                                className='imgHover'
                                onClick={() => this.getSingleUrl(el.urls.regular)}
                                alignSelf="center"
                                padding="10px"
                                mb="12"
                                backgroundColor="transparent"
                                boxShadow="dark-lg"
                                boxSize="400px"
                                />
                                <Text
                                className='imgText'
                                fontSize="4xl" 
                                fontWeight="semibold" 
                                style={{
                                    position: 'absolute',
                                    zIndex:'2', 
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)' 
                                }}>Click Me!</Text>
                            </div>
                        </WrapItem>
                    )
                }
            </Wrap>: 
            <Text>loading...</Text>
    }

    render = (): JSX.Element => {

        return(
            <>
                
                { 
                    this.props.datastate.modal ? <Modal /> : this.cardImage(this.state.images!) 
                }
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)