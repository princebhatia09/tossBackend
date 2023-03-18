import React from "react";
import { LoginScreen } from "./Screens/LoginScreen";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Main } from "./Screens/MainScreen";
import PrivateRoute from "./Components/PriavateRoute";
import UserScreen from "./Screens/User-Screen";
import SidePanel from "./Screens/SidePanel";
import PromoterScreen from "./Screens/PromoterScreen";

function App() {
  return (
    <BrowserRouter>
    <div>
    <SidePanel/>
    <Routes>
        <Route path="/login" element={<LoginScreen />}></Route>
        <Route path="/main" element={<PrivateRoute><Main/></PrivateRoute>} ></Route>
        <Route path="/userData" element={<PrivateRoute><UserScreen/></PrivateRoute>} ></Route>
        <Route path="/promoterData" element={<PrivateRoute><PromoterScreen/></PrivateRoute>} ></Route>
    </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
