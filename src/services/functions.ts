import { stateToProps, dispatchToProps } from "./interface"
import { setColorMode, decQuantity, incQuantity, setImages, setUrl, setModal } from "../app/hooks"
import { ColorMode } from "@chakra-ui/react"

export const mapStateToProps = (state: stateToProps): stateToProps => ({
    datastate: state.datastate
})

export const mapDispatchToProps = (dispatch: Function): dispatchToProps => {
    return {
        incQuantity: (): void => dispatch(incQuantity()),
        decQuantity: (): void => dispatch(decQuantity()),
        setColorMode: (params: ColorMode): ColorMode => dispatch(setColorMode(params)),
        setImages: (params: []) => dispatch(setImages(params)),
        setUrl: (params: string) => dispatch(setUrl(params)),
        setModal: (params: boolean) => dispatch(setModal(params))
    }
}