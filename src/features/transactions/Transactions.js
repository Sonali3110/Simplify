//CREATED TO CONTAINN TRANSACTION FORM AND TRANSACTION LIST

import React from "react";
import { useSelector } from "react-redux";
import TransactionsForm from "../../components/TransactionsForm";
import TransactionList from "../../components/TransactionList";
import { ChartComponent } from "../../components/ChartComponent";
import {BarGraph } from "../../components/BarGraph"
import { Anchor} from 'antd';
import  Date from "../../components/Date";
import myImage from "../../images/myImage.png";
import Footer from "../../components/Footer";
import Income from "../../components/Income";
import AddIncome from "../../components/AddIncome";
//subscribing to store using selector
const Transactions = () => {

  //selector so that we can subscribe to a selected portion iof the store.
  //in this transactions variable we get the access to the specific portion of the store we need
   const transactions = useSelector((store) => store.transactions.items);
  //in the above line, we can also write state instead of store

    return (
<>
<img src={myImage} alt="react1" style={{height:40 , marginLeft:15, position:"relative", zIndex:"10" }}/> ,

      <Anchor className="scroll" 


      style={{padding:20 , justifyContent:"right", backgroundColor:" var(--main-text-color)", bottom:60, display:"flex" , margin:"0px"}}
        direction="horizontal"
        items={ 
          [ 
          {
          
            key: 'part-1',
            href: "#part-1",
            title: 'Home',
            
          },
          {
          
            key: 'part-1',
            href: "#part-1",
            title: 'Transaction Form',
          },
          {
            key: 'part-2',
            href: "#part-2",
            title: 'Doughnut Chart',
          },
          {
            key: 'part-3',
            href: "#part-3",
            title: 'Bar Graph ',
          },
          {
            title: 'Setting',
          },
          {
            title: 'Support',
            
          }
        ]}
      />


 <div className="comments-container"  >
    <section className="part-1" style={{height:"100%", boxSizing:"border-box", backgroundColor:"var(--main)"}}>
      <TransactionsForm />   <Income/>  <TransactionList transactions={transactions} />
    
    </section>
    
    <div className="row" style={{marginTop:"15px"}}>

    <div class="column" >
        <div class="card"  style={{border:"3px solid var(--main-text-color)"}}> <ChartComponent /></div>
  </div>
  <div class="column">
     <div class="card"  style={{border:"3px solid var(--main-text-color)"}}  >
      <BarGraph /></div>
  </div>
      </div> 
    </div>
    <Footer/>
    </>
  );
};

export default Transactions;



