import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Form from "./components/Form";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <>
            <Main>
              <Form
                title="Unsplash"
                firstLineDescription="The internet's source of freely-usable-images."
                secondLineDescription="Powered by creators everywhere"
              />
            </Main>
          </>
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
