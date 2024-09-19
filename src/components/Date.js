import React, { useState } from 'react';
import { DatePicker } from 'antd';

export default function Date() {

  const [date, setDate] = useState();

    function onChange(date, dateString) {
        console.log(date, dateString);
        setDate(dateString)

      }

    return (
        <>
        <div classname="date" style={{display:"inline-flex", alignItems:"center", marginLeft:"20px"}} >
       <h3 >Select a date:<br/>{date}</h3> 
       
       <DatePicker className="child" onChange={onChange} style={{borderColor:" var(--main-text-color)", margin:15, width:"130px",padding:"0px 0px 0px 4px"}}/>
       </div>
        </>
        

  )
}























// import React, { useState } from 'react';
// import { DatePicker} from 'antd';


// export default function Date() {
//     const [date, setDate] = useState(new Date());

//     const onChange=()=>{
//         setDate(date);
//     }

//   return (
//    <>
//     <DatePicker
//     label="Basic example"
//     value={date}
//     onChange={(newValue) => setDate(newValue)}
//     />
//         <h1>Date:{date}</h1>
//   </>
//   );
// }






