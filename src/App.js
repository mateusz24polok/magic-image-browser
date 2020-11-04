import React from "react";
import Main from "./components/Main";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Main>
        <Form
          title="Unsplash"
          firstLineDescription="The internet's source of freely-usable-images."
          secondLineDescription="Powered by creators everywhere"
        />
      </Main>
    </>

  );
}

export default App;
