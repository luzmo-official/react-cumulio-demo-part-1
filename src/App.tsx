import React, { useReducer } from 'react';
import { CumulioComponent, CumulioContext, initialState, reducer } from "react-cumulio";
import './App.css';

interface IPublicProps {
  debug?: boolean;
}

function App(props: IPublicProps) {
  const { debug } = props;
  initialState.debug = debug || false;

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="main">
      <div className="toolbar" role="banner">
        <span>My Website</span>
      </div>
      <div className="content" role="main">
        <CumulioContext.Provider value={{ state, dispatch }}>
          <CumulioComponent
            dashboardId="763177aa-9b93-4ae7-903e-3cb07dc593d8"
            loaderBackground="rgb(238, 243, 246)"
            loaderFontColor="rgb(0, 45, 112)"
            loaderSpinnerColor="rgb(0, 54, 136)"
            loaderSpinnerBackground="rgb(194, 209, 233)"
          />
        </CumulioContext.Provider>
      </div>
      <footer className="footer"><span></span></footer>
    </div >
  );
}

export default App;
