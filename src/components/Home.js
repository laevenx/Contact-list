import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {  getAllContacts, deleteContact } from '../store/actions'
import Loader from 'react-loader-spinner';
import Contact from './Contact'
import {Link, useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'

import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;


const Home = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const contacts = useSelector((state) => state.contacts)
    const loading = useSelector((state) => state.loading)
    // const error = useSelector((state) => state.error)

    useEffect(() => {
        dispatch(getAllContacts())   
    },[])

    function removeContact(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                dispatch(deleteContact(id));
                history.push("/");
            }
          })
      }

    if (loading) return (<div style={{ marginTop: 200, textAlign: 'center' }}> <Loader type='Grid' color='#023E8A' /> </div>)
    // if (error) return (<p>Error...</p>)

    const columns = [
        {
          title: 'Id',
          dataIndex: 'id',
          key: 'id',
          render: text => <a><Link to={"/contact/" + text}>{text}</Link></a>,
        },
        {
          title: 'First Name',
          dataIndex: 'firstName',
          key: 'firstName',
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          key: 'lastName',
        },
        {
          title: 'Actions',
          key: 'action',
          dataIndex: 'id',
          render: text => (
            <>
               <button type="button" class="btn btn-primary" onClick={() => {history.push(`/update/${text}`)}}>
                Edit
                </button>
                <button type="button" class="btn btn-danger" onClick={() => {removeContact(text)}}>
                Delete
                </button>
            </>
          ),
        },

      ];

    return(
        <div style={{margin: 50}}>

            {/* <table class='table  table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((data) => {
                        return <Contact data={data} key={data.id}/>
                    })}
                </tbody>
            </table> */}
            {/* {JSON.stringify(contacts)} */}
            <Table columns={columns} dataSource={contacts} />
        </div>
    )
}

export default Home