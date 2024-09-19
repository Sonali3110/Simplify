//CONTAINS EACH TRANSACTION COMPONENT INSIDE TRANSACTION LIST

import React from "react";
import {  Table , Space} from 'antd';

export default function Transaction({ transaction }) {
  const columns = [
   
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (data) => <a>{data}</a>,

    },
    {
      title: 'Expense',
      dataIndex: 'amount',
      key: 'amount',
    },{
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    }, 
    
   
  ];

  // const data = transaction.map((data) => ({
  //   category: data.category,
  //   expense: data.amount,
  //   description: data.description,
  // }));

  return (
    <>

    <Table columns={columns} dataSource={transaction} />
    </>
  );
}









//CONTAINS EACH TRANSACTION COMPONENT INSIDE TRANSACTION LIST

// import React from "react";
// import { useDispatch } from "react-redux";
// import { deleteTransaction } from "../features/transactions/transactionsSlice";

// import { DeleteOutlined } from "@ant-design/icons";


// export default function Transaction({ transaction }) {
//   const dispatch = useDispatch();

//   return (
//     <li className="new-transaction">
//     <span className="category">Category:{transaction.category} </span>
//     <span className="amount">Expense: {transaction.amount}</span>
//     <span className="description">Description:{transaction.description}</span>

     
//     <DeleteOutlined className="bin" onClick={() => dispatch(deleteTransaction(transaction.id))}/>
//     </li>
//   );
// }





