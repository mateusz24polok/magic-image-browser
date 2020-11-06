import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <MainPage />
        </Route>
        <Route path="/photos">
          <>
            <div>Photos division</div>
          </>
        </Route>
      </Switch>
      <Route path="/photos/:id">
        <>
          <div>Photo division</div>
        </>
      </Route>
    </BrowserRouter>

  );
}

export default App;
