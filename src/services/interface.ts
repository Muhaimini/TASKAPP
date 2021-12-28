import { ColorMode } from "@chakra-ui/react"

export interface action {
    
}

export interface initialState {
    quantity: number
    colorMode: ColorMode
    modal: boolean
    url: string
    images: []
}

export interface stateToProps {
    datastate: initialState
}

export interface State {
    images?: []
    loading?: boolean
    url?: string
    modal?: boolean
}

export interface dispatchToProps {
    setColorMode?(params: ColorMode): ColorMode
    decQuantity?(): void
    incQuantity?(): void
    setImages?(params: []): void
    setUrl?(params: string): void
    setModal?(params: boolean): void
}

export interface Props extends dispatchToProps {
    datastate: initialState
}