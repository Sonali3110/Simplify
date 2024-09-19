import { createSlice } from "@reduxjs/toolkit";


const chartSlice = createSlice({
  name: "chart",
  initialState: {
    label: [],
    amount: [],
    income:[],
  },
  reducers: {
    setLabel: (state, action) => {
      state.label = action.payload;
    },

    setAmount: (state, action) => {
      state.amount = action.payload;
   },

  //  setIncome:(state, action)=>{
  //   state.income= action.payload;
  //  }

   
      

  
    },
    

   
  },
);

export const { setLabel, setAmount } = chartSlice.actions;  //exporting actions
export default chartSlice.reducer;  //exporting reducers
