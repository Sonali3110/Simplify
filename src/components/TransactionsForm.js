import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../features/transactions/transactionsSlice";
import { v4 as uuidv4 } from "uuid";
import { Button, Form, Input, InputNumber, Modal, Select } from 'antd';

export default function TransactionForm() {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("House rent");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();


  const handleSubmit = (e) => {
    form.validateFields().then(values => {
      console.log('values', values)
      dispatch(
        addTransaction({
          description: values.description,
          amount: parseFloat(values.amount),
          category: values.category,
          
          id: uuidv4(),
          
        })
      );
      setDescription("");
      setAmount(0);
      setCategory("");
      setIsModalOpen(false);
      form.resetFields();
      
    }).catch(err => {
      //Error
      console.log('Coming here', err)
    })
  };
  

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const categories = [
    {value: 'House rent', label: 'House rent'},
    {value: 'Electricity', label: 'Electricity'},
    {value: 'Fooding', label: 'Fooding'},
    {value: 'Transportation', label: 'Transportation'},
    {value: 'Personal Expenses', label: 'Personal Expenses'},
    {value: 'Grocery', label: 'Grocery'}
    ]

    

  return (
    <>
     <button className="add-transaction-button" onClick={showModal}> Click here to Add Transaction</button> 
     <Modal title="Transactions" open={isModalOpen} footer={null}>
    <section className="new-transaction-section">
      
      <h2 >New Transaction</h2>
      <Form form={form}>
        <Form.Item name={'category'}>Category
          <Select options={categories} onChange={(value) => form.setFieldValue('category', value)} placeholder="Select category"/>
        </Form.Item>
        <Form.Item name={'amount'} rules={[{ required: true, message: "Please enter amount"}]}>Amount:
          <InputNumber style={{ width: 400 }} onChange={(value) => form.setFieldValue('amount', value)} placeholder="Enter amount"/>
        </Form.Item>
        <Form.Item name={'description'}>Description
          <Input placeholder="Enter Description" onChange={(e) => form.setFieldValue('description', e.target.value)} />
        </Form.Item>
        <Button onClick={handleSubmit} style={{padding:0,paddingBottom:50, width:"80px", margin:5}}>Add</Button>
        <Button onClick={handleCancel}style={{padding:0,paddingBottom:50, width:"80px", margin:5}}>Cancel</Button>
      </Form>
    </section>
    </Modal>
    
   
    </>
  );
}
