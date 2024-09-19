import  React,{   useEffect} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { setAmount,setLabel } from '../features/chart/ChartSlice';

ChartJS.register( ArcElement, Tooltip, Legend );

export function ChartComponent() { 
   
const transactionList = useSelector((state) => state.transactions.items);
const label=useSelector((state)=>state.chartData.label);
const amount=useSelector((state)=>state.chartData.amount);// just like the action creator
 
const dispatch= useDispatch();

  useEffect(() => {
    if (transactionList?.length) {
      let label = [], data = [];
      transactionList.forEach(txn => {
        label.push(txn.category);
        data.push(txn.amount);
       
      })

     
     dispatch( setLabel(label));
      dispatch(setAmount(data));
     
    }
  }, [transactionList])
  
  




  const data = {
    labels: label,
    datasets: [
      {
        
        label: 'Proportion:',
        data: amount,
        options: {
          aspectRatio: false,

          layout: {
              padding: {
                  left: 50
              }
          }
      },


        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 3,
      
      },
      
    ],
  
  };




return (
  <>

  <div class="chart-container" style={{position: "relative",  display:"inline-block", margin:0,padding:0}}>
  <Doughnut id="chart" data={data}   />

  <h4 style={{marginTop:"5px"}}>Doughnut Chart</h4>
  </div>
</>






)

  

}


