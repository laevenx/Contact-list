import {
    FETCH_CONTACTS,
    FETCH_CREATECONTACT,
    FETCH_EDITCONTACT,
    FETCH_CONTACTDETAIL,
    LOADING,
    ERROR,
} from '../actions'

const initialState = {
    contacts: [],
    contact: [],
    loading: false,
    message: ''
}

const reducers = (state = initialState, action) => {
    const {type, payload} = action 

    switch (type) {
        case FETCH_CONTACTS : return {...state, contacts: payload}
        case FETCH_CREATECONTACT : return {...state, contact: payload}
        case FETCH_EDITCONTACT : return {...state, contact:payload}
        case FETCH_CONTACTDETAIL : return {...state, contact:payload}
        case LOADING : return {...state, loading: payload}
        case ERROR : return {...state,error : payload}
        default: {
            console.log(state)
            return state
        }
    }
}

export default reducers