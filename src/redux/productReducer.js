const initialState = {products:[]}


export const productReducer =  (state = initialState, action) => {
    switch (action.type) {
        
        case'GET_DATA':
        return{products: action.payload}
        default:
            return state
        
    }
    

}