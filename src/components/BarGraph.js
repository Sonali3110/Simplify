import  React,{   useEffect} from 'react';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { setAmount,setLabel } from '../features/chart/ChartSlice';


ChartJS.register( CategoryScale,LinearScale, BarElement,Title,Tooltip, Legend);

export function BarGraph() { 

    const transactionList = useSelector((state) => state.transactions.items);
    const label=useSelector((state)=>state.chartData.label);
    const amount=useSelector((state)=>state.chartData.amount);

    const dispatch= useDispatch();

    console.log('transactionList', transactionList)

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

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const data = {
labels: label,
  datasets: [
    {
      label: 'Transactions',
      data: amount,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
   
  ],
};

console.log('Configs', data)

return(
  <div class="chart-container" style={{position: "relative",display:"inline-block", height:"53vh"}}>
  <Bar options={options} data={data} id="chart" style={{maxWidth:"100%",width:"120vh"}}  />
  <h4 style={{marginTop:"5px"}}>Bar Graph</h4>

</div>
)

}