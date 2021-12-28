import { initialState } from "../../services/interface"
import { WritableDraft } from "immer/dist/internal"


const reducers = {
    incQuantity: (state: WritableDraft<initialState>): void => {
        state.quantity = state.quantity += 1
    },
    decQuantity: (state: WritableDraft<initialState>): void => {
        if(state.quantity > 0){
            state.quantity = state.quantity -= 1
        }
    },
    setColorMode: (state: WritableDraft<initialState>, action: any):void => {
        state.colorMode = action.payload
    },
    setImages: (state: WritableDraft<initialState>, action: any):void => {
        state.images = action.payload
    },
    setUrl: (state: WritableDraft<initialState>, action: any):void => {
        state.url = action.payload
    },
    setModal: (state: WritableDraft<initialState>, action: any):void => {
        state.modal = action.payload
    }
}

export default reducers