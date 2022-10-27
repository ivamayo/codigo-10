
import { useState } from 'react'
import sun from './assets/icons/sun.png'
import search from './assets/icons/search.png'
import profile from './assets/icons/profile.png'
import pin from './assets/icons/pin.png'
import link from './assets/icons/link.png'
import twitter from './assets/icons/twitter.png'
import hotel from './assets/icons/hotel.png'
import "./App.css";

function App() {
 
  const [inputText, setInputText] = useState("");
  const [user, setUser] = useState("");

  function handleInputChange(event){
    setInputText(event.target.value);
  }
  async function searchUser() {
    try{

      const response = await fetch(`https://api.github.com/users/${inputText}`);
      const data = await response.json();
      console.log("data", data);
      setUser(data);
    }catch(error)
    {
      console.log("Error", error);
    }
  }

  return (
    <div className="container">
      <div className="section-1">
        <h4 className="title">{user?.login}</h4>
        <button className="btn-mode">
          LIGHT <img width="20" src={sun} alt="" />
        </button>
      </div>
      <div className="search-container">
        <div className="input-container">
          <img width="15" src={search} alt="" />
          <input
            value={inputText}
            onChange={handleInputChange}
            className="input-search"
            type="text"
            placeholder="Search GitHub username..."
          />
        </div>
        <div>
          <button className="btn-search" onClick={searchUser}>Search</button>
        </div>
      </div>
      <div className="information-container">
        <div className="image-container">
          <img width="100" src={user?.avatar_url} alt="" />
        </div>
        <div className="description-container">
          <div className="user-date-container">
            <h2>{user?.name}</h2>
            <p>{user?.create_at}</p>
          </div>
          <div className="user-bio-container">
            <p>@{user?.login}</p>
            <p>{user?.bio}</p>
          </div>
          <div className="card-information">
            <div>
              <h5>Repos</h5>
              <h2>{user?.public_repos}</h2>
            </div>
            <div>
              <h5>Followers</h5>
              <h2>{user?.followers}</h2>
            </div>
            <div>
              <h5>Following</h5>
              <h2>{user?.following}</h2>
            </div>
          </div>
          <div className="info-container">
            <div>
              <p>
                <img width="15" src={pin} alt="" />&nbsp;San
                Francisco
              </p>
              <p>
                <img
                  width="15"
                  src={link}
                  alt=""
                />&nbsp;https://github.blog
              </p>
            </div>
            <div>
              <p>
                <img width="15" src={twitter} alt="" />&nbsp;Not
                avible
              </p>

              <p>
                <img
                  width="15"
                  src={hotel}
                  alt=""
                />&nbsp;@ivamayo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
