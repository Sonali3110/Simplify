import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../features/transactions/transactionsSlice";
import ChartSlice from "../features/chart/ChartSlice";

export default configureStore({
  reducer: {
    transactions: transactionsReducer,  //inside this  transactions variable the state of everything outcome 
                                        //due to action performed is globally present
    chartData:ChartSlice,

  },
});
