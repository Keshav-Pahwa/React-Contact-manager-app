import "./App.css";
import Header from "./Header";
import AddContacts from "./AddContacts";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Keshav",
      email: "blahblah@gmail.com"
    },
    {
      id: "2",
      name: "Pahwa",
      email: "blahblahblah@gmail.com"
    }
  ]
    return (
        <div className="ui container">
          <Header />
          <AddContacts />
          <ContactList contacts = {contacts}/>
        </div>
      );
    }
    
    export default App;