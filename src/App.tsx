import React from 'react';
import { CumulioDashboardComponent } from '@cumul.io/react-cumulio-dashboard';
import './App.css';

interface IPublicProps {
  debug?: boolean;
}

function App(props: IPublicProps) {
  const { debug } = props;


  return (
    <div className="main">
      <div className="toolbar" role="banner">
        <span>My Website</span>
      </div>
      <div className="content" role="main">
        <CumulioDashboardComponent
          dashboardId="763177aa-9b93-4ae7-903e-3cb07dc593d8"
          loaderBackground="rgb(238, 243, 246)"
          loaderFontColor="rgb(0, 45, 112)"
          loaderSpinnerColor="rgb(0, 54, 136)"
          loaderSpinnerBackground="rgb(194, 209, 233)"
        />
      </div>
      <footer className="footer"><span></span></footer>
    </div >
  );
}

export default App;
