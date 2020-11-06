import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PhotosPage from "./pages/PhotosPage";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/photos">
          <PhotosPage />
        </Route>
      </Switch>
      <Route path="/photos/:id">
        <>
          <div>Photo division</div>
        </>
      </Route>
    </BrowserRouter>

  );
};

export default App;
