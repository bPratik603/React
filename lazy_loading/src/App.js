import React, { Suspense } from 'react';
import './App.css';
//import LazyLoading from './LazyLoading';

// const Lazy = React.lazy(()=>{import('./LazyLoading')})

function App() {
  return (
    <div className="App">
      <h1>This is a App component </h1>
     <Suspense fallback={<div>loading......</div>}>
     <Lazy/>
     
     </Suspense>
    </div>
  );
}

export default App;