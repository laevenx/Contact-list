import server from '../../api'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
toast.configure();

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

export const FETCH_CONTACTS = 'FETCH_CONTACTS'
export const FETCH_CREATECONTACT = 'FETCH_CREATECONTACT'
export const FETCH_EDITCONTACT = 'FETCH_EDITCONTACT'
export const FETCH_CONTACTDETAIL = 'FETCH_CONTACTDETAIL'
export const FETCH_DELETECONTACT = 'FETCH_DELETECONTACT'
export const LOADING = 'LOADING'
export const ERROR = 'ERROR'



export const fetchContacts = (data) => {
    return {
        type: FETCH_CONTACTS,
        payload: data
    }
}

export const fetchContactDetail = (data) => {
    return {
        type: FETCH_CONTACTDETAIL,
        payload : data
    }
}

export const createContact = (data) => {
    return {
        type: FETCH_CREATECONTACT,
        payload: data
    }
}

export const editContact = (data) => {
    return {
        type: FETCH_EDITCONTACT,
        payload: data
    }
}

export const fetchDeleteContact = (data) => {
    return {
        type: FETCH_DELETECONTACT,
        payload: data
    }
}

export const loading = (data) => {
    return {
        type: LOADING,
        payload: data
    }
}

export const error = (data) => {
    return {
        type: ERROR,
        payload: data
    }
}

export  const getAllContacts =  () => {
    return (dispatch) => {
        dispatch(loading(true))

        server.get('/contact')
        .then(({data}) => {
            console.log(data)
            dispatch(fetchContacts(data.data))
        })
        .catch(err => {
            console.log(err.response.data)
            // dispatch(error(err.response.data))
        })
        .finally(() => {
            dispatch(loading(false))
        })
    }
}

export const getContactDetail= (id) => {
    return (dispatch) => {
        dispatch(loading(true))
        console.log('loading')
        server.get('/contact/' + id)
        .then(({data})=> {
            console.log(data)
            dispatch(fetchContactDetail(data.data))
        } )
        .catch(err => {
            console.log(err)
            dispatch(error(err))
        })
        .finally(() => {
        dispatch(loading(false))
        })
    }
}

export const createNewContact = (contact) => {
    
    return(dispatch) => {
        dispatch(loading(true))
        return server.post('/contact', contact)
        .then(({data}) => {
            console.log(data)
            dispatch(createContact(data))
            Toast.fire({
                icon: 'success',
                title: data.message
            })
            return data
            // history.push('/')
        })
        .catch(err => {
            console.log(err.response.data)
            Toast.fire({
                icon: 'error',
                title: err.response.data.message
              })
            dispatch(error(err))
        })
        .finally(() => {
            dispatch(loading(false))
        })
    }
}

export const updateContact = (contact,id) => {
    
    return(dispatch) => {
        dispatch(loading(true))
        return server.put('/contact/' + id , contact)
        .then(({data}) => {
            Toast.fire({
                icon: 'success',
                title: data.message
              })
              
            return data
        })
        .catch(err => {
            console.log(err.response.data)
            Toast.fire({
                icon: 'error',
                title: err.response.data.message
              })
            dispatch(error(err))
        })
        .finally(() => {
            dispatch(loading(false))
        })
    }
}

export const deleteContact = (id) => {
    return(dispatch) => {
        dispatch(loading(true))
        return server.delete('/contact/' + id)
            .then(({data}) => {
                Toast.fire({
                    icon: 'success',
                    title: data.message
                  })
                dispatch(fetchDeleteContact(data))
                return data
            })
            .catch(err => {
                Toast.fire({
                    icon: 'error',
                    title: err.response.data.message
                  })
                dispatch(error(err))
            })
            .finally(() => {
                dispatch(loading(false))
            })
    }
}