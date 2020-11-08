import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import MainPage from "./pages/MainPage";
import PhotosPage from "./pages/PhotosPage";
import PhotoPage from "./pages/PhotoPage";
import { fetchSamplePhotos } from "./slices/photosSlice";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSamplePhotos());
  }, [])

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
        <PhotoPage />
      </Route>
    </BrowserRouter>

  );
};

export default App;
