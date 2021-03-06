import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
      </div>
    </Router>
  );
}
export default App;
