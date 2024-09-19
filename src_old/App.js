import React, {useState} from 'react';
import './App.css';
import Dropdown from './Dropdown';

function App() {
  const options = [

    { label: 'Fruit', value: 'Fruit' },
 
    { label: 'Vegetable', value: 'Vegetable' },
 
    { label: 'Meat', value: 'Meat' },
 
  ];
 
  const [value, setValue] = useState('fruit');
 
  const handleChange = (event) => {
    console.log(event);
    setValue(event.target.value);
 
  };
 
  return (
 
    <div>
 
      <Dropdown
 
        label="What do we eat?"
 
        options={options}
 
        value={value}
 
        onChange={handleChange}
 
      />
 
      <p>We eat {value}!</p>
 
    </div>
 
  );
 
}

export default App;
