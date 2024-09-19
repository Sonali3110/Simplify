import { createSlice } from "@reduxjs/toolkit";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    items: [], //EVERYTHING IS PRESENT IN THIS ITEMS ONLY
  },
  reducers: {
    addTransaction: (state, action) => {
      state.items.push(action.payload);  //whatever we push in this state, its globally availavle for everyone.
    },

    deleteTransaction: (state, action) => {
      state.items=state.items.filter((transactions)=>transactions.id!==action.payload)
    }, 

    clearTransaction: (state, action) => {
      state.items.length = 0;
    },

    
  },
});



export const { addTransaction, deleteTransaction, clearTransaction } =
  transactionsSlice.actions;
export default transactionsSlice.reducer;
