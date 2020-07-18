import React , {useState, useEffect}from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { updateContact, getContactDetail } from '../store/actions'
import Loader from 'react-loader-spinner'

const UpdateContact = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const history = useHistory()
    const contact = useSelector(state => state.contact)
    const loading = useSelector(state => state.loading)
    

    const [firstName, setFirstName] = useState(contact.firstName)
    const [lastName, setLastName] = useState(contact.lastName)
    const [age,setAge] = useState(contact.age)
    const [photo,setPhoto] = useState(contact.photo)

    useEffect(() => {
        dispatch(getContactDetail(id))
    }, [dispatch,id])

    function update (){
        const data = {
            firstName,
            lastName,
            age,
            photo
        }
        dispatch(updateContact(data, id))
        history.push('/')
    }

    if (loading) return (<div style={{ marginTop: 200, textAlign: 'center' }}> <Loader type='Grid' color='#023E8A' /> </div>)

    return (
        <div>
      <div class="row" style={{marginTop: 20}}>
        <div class="col-2 col-md-2"></div>
        <div class="col-10 col-md-8 shadow p-3 mb-5 bg-white rounded" >
            <h1 style={{textAlign:"center"}}>Edit Contact</h1>
          <div class="input-group flex-nowrap" style={{marginTop:20}}>
            <div class="input-group-prepend">
              <span class="input-group-text" id="addon-wrapping">
                First Name
              </span>
            </div>
            <input
              type="text"
              defaultValue={contact.firstName}
              class="form-control"
              placeholder="john"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          
          <div class="input-group flex-nowrap" style={{marginTop:20}}>
            <div class="input-group-prepend">
              <span class="input-group-text" id="addon-wrapping">
                Last Name
              </span>
            </div>
            <input
              type="text"
              defaultValue={contact.lastName}
              class="form-control"
              placeholder="lala"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div class="input-group flex-nowrap" style={{marginTop:20}}>
            <div class="input-group-prepend">
              <span class="input-group-text" id="addon-wrapping">
                Age
              </span>
            </div>
            <input
              type="number"
              defaultValue={contact.age}
              class="form-control"
              placeholder="0"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={(event) => {
                setAge(event.target.value);
              }}
            />
          </div>
          <div class="input-group flex-nowrap" style={{marginTop:20}}>
            <div class="input-group-prepend">
              <span class="input-group-text" id="addon-wrapping">
                Image
              </span>
            </div>
            <input
              type="text"
              defaulValue={JSON.stringify(contact.photo)}
              class="form-control"
              placeholder="image Url"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={(event) => setPhoto(event.target.value)}
            />
          </div>
              <hr/>
          <button type="button" class="btn btn-primary" onClick={update}>
           Update Contact
          </button>
        </div>
        <div class="col-2 col-md-2"></div>
      </div>
    </div>
    )
}

export default UpdateContact