import  React,{ useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import AddIncome from './AddIncome';
function Income() {

   const transactionList = useSelector((state) => state.transactions.items);

    let [income, setIncome]=useState("");
    let [total,setTotal]=useState("");

    const handleChange = (e) => {
        setIncome(e.target.value);
     }


     useEffect(() => {
      if (transactionList?.length) {
        let  total=0;
        transactionList.forEach(txn => {
         
          total+=txn.amount;
        })
  
        setTotal(total);
       
      }
    }, [transactionList])
   
  return (
   
<div style={{display:"inline-grid",
    float: "right"}}>
<AddIncome total={total}/>
   
</div>
  

  
  )
}




export default Income;




