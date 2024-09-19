import React,{useState} from 'react';
import { Button, Form, Input, InputNumber, Modal} from 'antd';

function AddIncome(props) {
     let [income, setIncome]=useState(0);
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [form] = Form.useForm();
     

     

     const handleSubmit = (e) => {
        form.validateFields().then(values => {
          console.log('values', values)
         
          setIncome(values.income);

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

    return (
        <>
        <div className='cont' >
        <button className="add-income-button" onClick={showModal} style={{display:"flex", marginLeft:"25%" , padding:"5px"}} > Click here to Add Income</button> 
        <Modal title="Transactions" open={isModalOpen} footer={null}>
       <section className="new-transaction-section">
       <h2>YOUR INCOME:{income}</h2>
       <Form form={form}>
        <Form.Item name={'income'} rules={[{ required: true, message: "Enter your Income: "}]}>Amount:
          <InputNumber style={{ width: 400 }} onChange={(value) => form.setFieldValue('income', value)} placeholder="Enter income"/>
        </Form.Item>
        <Button onClick={handleSubmit} style={{padding:0,paddingBottom:50, width:"80px", margin:5}}>Add</Button>
        <Button onClick={handleCancel}style={{padding:0,paddingBottom:50, width:"80px", margin:5}}>Cancel</Button>
      
        </Form>
    </section>
    </Modal> 
   

    <div class="cards" >
    <div class="cardd card-3"  style={{display:"table-caption"}} >
  <div class="card__icon"><i class="fas fa-bolt"></i></div>
  <p class="card__exit"><i class="fas fa-times"></i></p>
  <h2 class="card__title" style={{display:"inline"}}>Total Income:  &#8377; {income}</h2>
  
</div>
<div class="cardd card-2" style={{display:"table-caption"}}>
  <div class="card__icon"><i class="fas fa-bolt"></i></div>
  <p class="card__exit"><i class="fas fa-times"></i></p>
  <h2 class="card__title" >Total Expenses :  &#8377; {props.total}   </h2>
</div>




</div>

</div>

   

  
 
  </>
  )
}

export default AddIncome
