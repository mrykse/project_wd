import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import LoginUser from "./components/LoginUser";
import Logout from "./components/Logout";
import LoginAdmin from "./components/LoginAdmin";
import ForgotPassword from "./components/ForgotPassword";
import Properties from "./components/Properties";
import HouseTours from "./components/HouseTours";
import Transactions from "./components/Transactions";
import Profile from "./components/profile";
import Reserved from "./reserved";
import currentUser from "./currentUser";
import ModifyUser from "./components/modifyUser";
const App = () => {
  const [user, setUser] = useState("Guest"); // Used to grand the admin right to perform CUD operations
  const [clientID, setClientID] = useState(0); // Used to get clientID from DB, which is used later on when client books a property

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginUser" element={<LoginUser setRole={setUser} setID={setClientID} />}/>
        <Route path="/Logout" element={<Logout />}/>
        <Route path="/LoginAdmin" element={<LoginAdmin setRole={setUser} />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ModifyUser" element={<ModifyUser />} />
        <Route element={<Reserved />}>
          <Route path="/Properties" element={<Properties role={user} id={clientID} />}/>
          <Route path="/HouseTours" element={<HouseTours role={user} />} />
          <Route path="/Transactions" element={<Transactions role={user} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
          //Affichage du ser courant A FAIRE :
          //<Route path="*" element={<currentUser />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
