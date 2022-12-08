import React from 'react';
import "./List.css";

function List(props) {
    console.log("Props is ", props);
    return (
    <div>
        {
              props.inputDataList.map((info,index) => {
                return (
                  
                    <table className='tableList'>
                    <tbody>
                  <tr key={index}>
                    <td>{info.name}</td>
                    <td>{info.age}</td>
                    <td>{info.designation}</td>
                  </tr>
                  </tbody>
                  </table>
                )
              })
            }
    </div>
  )
}

export default List
