import Contact from "./contact";
import AddContact from "./addContact";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { displayHandler } from "../redux/action/action-contacts";

export default function ContactList({ contactList }) {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/contact/all")
  //     .then((res) => console.log(res))
  //     .then((err) => console.log(err))
  // }, []);
useEffect(() => {
 dispatch(displayHandler())
}, [])

const contacts = useSelector(state => state.contacts)
  return (
    <div>
      <h1> Contact List</h1>
      <AddContact />
      <div className="contactListContainer">
        {contacts.map((el, key) => (
          <Contact el={el} key={el.id} />
        ))}
      </div>
    </div>
  );
}
