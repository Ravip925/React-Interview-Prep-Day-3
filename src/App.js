import "./App.css";
import UseMemo from "./Components/UseMemo";
import EffectHook from "./Components/EffectHook";
import { useState } from "react";
import UseReducer from "./Components/UseReducer";
import UseState from "./Components/UseState";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <h1>React Interview Prep Day-3</h1>
      <div className="Axios">
        <p style={{ textAlign: "start" }}>
          <strong>Fetch</strong>: The Fetch API provides a fetch method defined
          on the window object. It also provides a JavaScript interface for
          accessing and manipulating parts of the HTTP pipeline (requests and
          responses). The fetch method has one mandatory argument- the URL of
          the resource to be fetched. This method returns a Promise that can be
          used to retrieve the response of the request.
        </p>
        <p style={{ textAlign: "start" }}>
          <strong>Axios</strong>: Axios is a Javascript library used to make HTTP requests from
          node.js or XMLHttpRequests from the browser and it supports the
          Promise API that is native to JS ES6. It can be used intercept HTTP
          requests and responses and enables client-side protection against
          XSRF. It also has the ability to cancel requests.
        </p>
      </div>
      <UseState />
      <hr />
      <UseMemo />
      <hr />

      <div className="useEffect">
        <h2>useEffect</h2>
        <button onClick={() => setShow(!show)}>Click to Unmount</button>
        {show ? <EffectHook /> : null}
        <br />
        <br />
      </div>

      <hr />
      <div className="useReducer">
        <h2>useReducer</h2>
        <UseReducer />
      </div>
    </div>
  );
}

export default App;
