import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewContact } from "../store/actions";
import { useHistory } from "react-router-dom";

const CreateContact = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [photo, setPhoto] = useState("");

  function create() {
    const data = {
      firstName,
      lastName,
      age,
      photo,
    };
    console.log(data);
    dispatch(createNewContact(data)).then((data) => {
      if (data) {
        history.push("/");
      }
    });
  }

  return (
    <div>
      <div class="row" style={{marginTop: 20}}>
        <div class="col-2 col-md-2"></div>
        <div class="col-10 col-md-8 shadow p-3 mb-5 bg-white rounded" >
            <h1 style={{textAlign:"center"}}>Add New Contact</h1>
          <div class="input-group flex-nowrap" style={{marginTop:20}}>
            <div class="input-group-prepend">
              <span class="input-group-text" id="addon-wrapping">
                First Name
              </span>
            </div>
            <input
              type="text"
              value={firstName}
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
              value={lastName}
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
              value={age}
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
              value={photo}
              class="form-control"
              placeholder="image Url"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={(event) => setPhoto(event.target.value)}
            />
          </div>
              <hr/>
          <button type="button" class="btn btn-primary" onClick={create}>
            Add Contact
          </button>
        </div>
        <div class="col-2 col-md-2"></div>
      </div>
    </div>
  );
};

export default CreateContact;
