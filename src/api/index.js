import axios from "axios";

const server = axios.create({
  baseURL: "https://simple-contact-crud.herokuapp.com/",
});

export default server;
