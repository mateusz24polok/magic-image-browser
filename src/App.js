import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import MainPage from "./pages/MainPage";
import PhotosPage from "./pages/PhotosPage";
import { fetchSamplePhotos } from "./slices/photosSlice";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSamplePhotos());
  }, [])

  return (
    <BrowserRouter basename="/magic-image-browser">
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/photos">
          <PhotosPage />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

export default App;
