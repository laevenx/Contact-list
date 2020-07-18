import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteContact } from "../store/actions";
import Swal from 'sweetalert2'

const Contact = (props) => {
  let { data } = props;
  const history = useHistory();
  const dispatch = useDispatch()
  const directlink = `/contact/${data.id}`;

  function edit() {
    history.push(`/update/${data.id}`);
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
            dispatch(deleteContact(data.id));
            history.push("/");
        }
      })
  }

  return (
    <tr>
      <td>
        <Link to={directlink}>{data.id}</Link>
      </td>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.age}</td>
      <td>
        <button type="button" class="btn btn-primary" onClick={edit}>
          Edit
        </button>
        <button type="button" class="btn btn-danger" onClick={removeContact}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Contact;
