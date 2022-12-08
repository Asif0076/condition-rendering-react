import { useState } from 'react';
import './App.css';
import List from './components/List';


function App() {
  const [show, setShow] = useState(true)
const [inputDataList, setInputDataList ] = useState([]);
const [inputData, setInputData] = useState(
  {
    name: "",
    age: "",
    designation: ""
}
);


function handleChange(e) {
console.log(e.target.name,e.target.value);
setInputData({...inputData, [e.target.name]: e.target.value});

}

function addData() {
setInputDataList([...inputDataList, inputData ])
console.log([...inputDataList, inputData ]);
}

function  hideShow () {
  setShow(!show)
}
  return (
    <>  

        <h1>User Data</h1>
        <h2>Enter Your Data </h2>
        <div className='inputs'>
          <div className='head-input' >
           <h3>Name</h3>
            <input type="text" name='name'  onChange={handleChange} value={inputData.name} maxLength="15" placeholder='Enter Your Name' />
        </div>
        <div className='head-input'>
           <h3>Age</h3>
            <input type="text" name='age'  onChange={handleChange} value={inputData.age}  maxLength="15" placeholder='Enter Your Age' />
        </div>
        <div className='head-input' >
           <h3>Designation</h3>
            <input type="text" name='designation'  onChange={handleChange} value={inputData.designation}  maxLength="15" placeholder='Enter Your Designation' />
        </div> 
        </div>
             <button className='btn-add' onClick={addData}>Add</button>
            <button className='btn-add1' onClick={hideShow}>View/Hide</button>
          

        <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>designation</td>
          </tr>
          
          </tbody>
        </table>

{    
  show ? <List inputDataList = {inputDataList}/> : null
}

    </>
  );
}

export default App;