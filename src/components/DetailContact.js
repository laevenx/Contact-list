import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getContactDetail, deleteContact } from "../store/actions";
import Loader from "react-loader-spinner";
import Swal from 'sweetalert2'

const DetailContact = () => {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact);
  const loading = useSelector((state) => state.loading);
  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(getContactDetail(id));
  }, []);

  function edit() {
    history.push(`/update/${id}`);
  }

  function removeContact() {
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

  if (loading)
    return (
      <div style={{ marginTop: 200, textAlign: "center" }}>
        {" "}
        <Loader type="Grid" color="#023E8A" />{" "}
      </div>
    );

  return (
    <div>
      <div className="row justify-content-md-center" style={{marginTop:20}}>
        <div className="col-10 col-md-8 col-lg-2 shadow p-3 mb-5 bg-white rounded">
          <img src={contact.photo} style={{marginBottom:20}} />
          <h5>First Name:</h5><p> {contact.firstName}</p>
          <h5>Last Name: </h5><p>{contact.lastName}</p>
          <h5>Age: </h5><p>{contact.age}</p>
          <div className="justify-content-md-center">
          <button type="button" class="btn btn-primary" onClick={edit}>
            Edit Contact
          </button>
          <button type="button" class="btn btn-danger" onClick={removeContact}>
            Delete
          </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DetailContact;
