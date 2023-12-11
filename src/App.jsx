import axios from "axios"; // import axios
import { useEffect, useState } from "react";
import UserList from "./components/UserList";
import NavBar from "./components/ui/NavBar";

const App = () => {
  const [listOfUSer, setListOfUser] = useState(null); // state to save the data returned from API  get request

  // using axios to get data from utl inside  a useEffect hook
  useEffect(() => {
    const getUserInfo = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setListOfUser(response.data))
        .catch((error) => console.error("Error fetching data:", error)); //if there is an error console.log the error.
    };
    getUserInfo();
  }, []);

  // console.log(listOfUSer);

  return (
    <>
      {/* Navbar component */}
      <NavBar />

      <div className="grid place-content-center mx-auto p-6  lg:grid-cols-2  transition-all">
        {/* mapping the listOfUser into userList component that display list of user into screen */}
        {listOfUSer?.map((item) => (
          <UserList key={item.id} user={item} />
        ))}
      </div>
    </>
  );
};

export default App;
