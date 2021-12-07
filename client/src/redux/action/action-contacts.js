import axios from "axios";
import { DISPLAY } from "../action-types/action-types-Contact";

// export  const  displayHandler=(contacts)=>{
//     return{
//         type:DISPLAY,
//         payload:contacts
//     }
// }

export const displayHandler = () => async (dispatch) => {
  await axios
    .get("http://localhost:5000/api/contact/all")
    .then((res) =>
      dispatch({
        type: DISPLAY,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const addHandler = (newContact) => async (dispatch) => {
  await axios
    .post("http://localhost:5000/api/contact/add", newContact)
    .then((res) => dispatch(displayHandler()))
    .catch((err) => console.log(err));
};

export const deleteHandler = (id) =>async (dispatch) => {
 await axios
    .delete(`http://localhost:5000/api/contact/delete/${id}`)
    .then((res) => dispatch(displayHandler()))
    .catch((err) => console.log(err));
};

export const editHandler=(id,editedContact)=> async dispatch=>{
await axios.put(`http://localhost:5000/api/contact/edit/${id}`,editedContact)
.then((res) => dispatch(displayHandler()))
.catch((err) => console.log(err));
}