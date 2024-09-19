import React from 'react';
import './index.css';
import { Table } from 'antd';
const columns = [
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Expense',
    dataIndex: 'expense',
    key: 'expense',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];
const data = [
  {
    key: '1',
    category: 'food',
    expense: 67,
    description: 'chips',
  },
  {
    key: '1',
    category: 'food',
    expense: 67,
    description: 'chips',
  },
];
const App = () => <Table columns={columns} dataSource={data} />;
export default App;
