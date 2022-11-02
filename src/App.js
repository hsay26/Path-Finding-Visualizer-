
import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
function App() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="App">
      <PathfindingVisualizer></PathfindingVisualizer>
      <button onClick={refreshPage}>Click to reload!</button>
  </div>
  
  );
}


export default App;
