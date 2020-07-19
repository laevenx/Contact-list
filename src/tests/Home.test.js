import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

import store from "../store"
import App from "../App";

jest.mock('axios')

test("testing home", async () => {
    const app = render(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
    )

    axios.get.mockResolvedValueOnce({
        data: [
            {
              "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b",
              "firstName": "Luke",
              "lastName": "Skywalker",
              "age": 20,
              "photo": "N/A"
            },
            {
              "firstName": "asdasd",
              "lastName": "asdasdasd",
              "age": 123,
              "photo": "https://vignette.wikia.nocookie.net/lotr/images/5/54/Untitledjk.png/revision/latest?cb=20130313174543",
              "id": "63631530-c961-11ea-93c5-0fd1caeb509e"
            },
            {
              "firstName": "frodo",
              "lastName": "baggins",
              "age": 12,
              "photo": "https://vignette.wikia.nocookie.net/lotr/images/5/54/Untitledjk.png/revision/latest?cb=20130313174543",
              "id": "6d3f7f30-c961-11ea-93c5-0fd1caeb509e"
            },
            {
              "firstName": "siapa",
              "lastName": "kamu",
              "age": 35,
              "photo": "https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTIwNjA4NjMzNzAzNzI4NjUy/john-cena-562300-1-402.jpg",
              "id": "273341b0-c962-11ea-93c5-0fd1caeb509e"
            },
            {
              "firstName": "string",
              "lastName": "string222",
              "age": 1,
              "photo": "string",
              "id": "62d7da40-c963-11ea-93c5-0fd1caeb509e"
            },
            {
              "firstName": "gandalf",
              "lastName": "white",
              "age": 12,
              "photo": "https://vignette.wikia.nocookie.net/lotr/images/8/8d/Gandalf-2.jpg/revision/latest?cb=20130209172436",
              "id": "1875d730-c964-11ea-93c5-0fd1caeb509e"
            },
            {
              "firstName": "asdasd",
              "lastName": "asdasd",
              "age": 123,
              "photo": "https://vignette.wikia.nocookie.net/lotr/images/8/8d/Gandalf-2.jpg/revision/latest?cb=20130209172436",
              "id": "df17f2f0-c965-11ea-93c5-0fd1caeb509e"
            },
            {
              "firstName": "gandalf",
              "lastName": "gandalf",
              "age": 123,
              "photo": "https://vignette.wikia.nocookie.net/lotr/images/8/8d/Gandalf-2.jpg/revision/latest?cb=20130209172436",
              "id": "e5b5acb0-c965-11ea-93c5-0fd1caeb509e"
            },
            {
              "firstName": "gandalf",
              "lastName": "gandalf",
              "age": 12,
              "photo": "https://vignette.wikia.nocookie.net/lotr/images/8/8d/Gandalf-2.jpg/revision/latest?cb=20130209172436",
              "id": "eae69000-c965-11ea-93c5-0fd1caeb509e"
            },
            {
              "firstName": "gandalf",
              "lastName": "gandalf",
              "age": 123,
              "photo": "https://vignette.wikia.nocookie.net/lotr/images/8/8d/Gandalf-2.jpg/revision/latest?cb=20130209172436",
              "id": "f1390ff0-c965-11ea-93c5-0fd1caeb509e"
            },
            {
              "firstName": "gandalf2",
              "lastName": "gandaf",
              "age": 123,
              "photo": "https://vignette.wikia.nocookie.net/lotr/images/8/8d/Gandalf-2.jpg/revision/latest?cb=20130209172436",
              "id": "f7997290-c965-11ea-93c5-0fd1caeb509e"
            }
          ],
      });
})