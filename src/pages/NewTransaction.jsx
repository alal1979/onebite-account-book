import TransactionEditor from "../components/TransactionEditor";
import { useContext } from "react";
import {TransactionDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";

const NewTransaction = () =>{
    const {onCreateTransaction} = useContext(TransactionDispatchContext);
    const nav = useNavigate();

    const onSubmit = (state) =>{
      onCreateTransaction(state.name, state.amount, state.type, state.category,state.date);
      nav("/", { replace: true } ); // 뒤로 가기 방지
  }; 

  return (
    <>
      <h1>새로운 기록</h1>
       <TransactionEditor onSubmit={onSubmit} type="NEW"/>
    </> 
  ) ;
};

export default NewTransaction