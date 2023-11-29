import logo from './logo.svg';
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const[message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.message));
  }, []);

  // curl -X POST "https://accounts.spotify.com/api/token";
  //    -H "Content-Type: application/x-www-form-urlencoded";
  //    -d "grant_type=client_credentials&client_id=06e804946186484a9da662aadf53a393&client_secret=409eb3d42bd4480194cb51790218bc94";

  // const clientID = `06e804946186484a9da662aadf53a393`;
  // const clientSecret = '409eb3d42bd4480194cb51790218bc94';

  // const get_token  = async () => {

  //   const result = await fetch('https://accounts.spotify.com/api/token', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type' : 'application/x-www-form-urlencoded',
  //       'Authorization' : 'Basic ' + btoa(clientID + ':' + clientSecret)
  //     },
  //     body: 'grant_type=client_credentials'
  //   });

  //   const data = await result.json();
  //   return data.access_token;
  // }




  
  // const redirect = () => {
    
  // }


  return (
    <div className="App">
    <h1>{message}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Spotify Statistic, where we will tell you your music taste. Click below to get started.
        </p>
        <button className="button">Log in with Spotify</button>
      </header>
    </div>
  );
}

export default App;
