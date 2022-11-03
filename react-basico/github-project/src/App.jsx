import { useState } from "react";
import UserInformation from "./components/UserInformation";
import SearchContainer from "./components/SearchContainer";
import HeaderContainer from "./components/HeaderContainer";
import "./App.css";
import Swal from "sweetalert2";




function App() {
  const [inputText, setInputText] = useState("");

  const [user, setUser] = useState(null);

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  async function searchUser() {
    try {
      const response = await fetch(`https://api.github.com/users/${inputText}`);
      const data = await response.json();
      console.log(data);
      //Vamos a validar que el usuario exista
      if(data.message === "Not Found")
      {
       
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al buscar un usuario!',
        })
        return;
      }
      else{
        Swal.fire({
          title: `Bienvenido ${data.name}`,
        })
        
      }
      setUser(data);
      setInputText("");
      
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <div className="container">
      {<HeaderContainer/>}
      {<SearchContainer
        inputText={inputText}
        handleInputChange={handleInputChange}
        searchUser={searchUser}
      
      />}
      {/*aca podemos hacer una validacion dodne gigamos que el div que si */}
      {user && <UserInformation user={user} />}
    </div>
  );
}

export default App;