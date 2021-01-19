import React from 'react';

import Comp1 from "./components/Comp1";

const App = () => {
    return (
        <div id="app">
            <div>React 02</div>
            <Comp1 nome="wellington" max={222220}/>
        </div>
    )
}

export default App;