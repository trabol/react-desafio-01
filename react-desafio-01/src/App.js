import React from 'react';
import './App.css';

import Label from './views/label/Label';
import Input from './views/input/Input';
import List from './views/list/List';

function App() {
  return (
    <div className="App">
      <div class="index">
        <Label/>
        <div class="container">
          <Input/>
          <List/>
        </div>
      </div>
    </div>
  );
}

export default App;
