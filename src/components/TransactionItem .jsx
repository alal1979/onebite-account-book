import { useContext } from "react";
import { TransactionDispatchContext } from  "../App";
import { useNavigate } from "react-router-dom";
import "./TransactionItem.css";

const TransactionItem= ({id,category,name,amount,date,type}) => {
  const {onUpdateTransaction , onDeleteTransaction} = useContext(TransactionDispatchContext);
  const nav = useNavigate();
 

  const onDelete = () =>{
    onDeleteTransaction(id);
  }

  return <div className="TransactionItem">
    <div className="category_wrapper">{category}</div>
    <div className="name_wrapper">{name}</div>
    <div className={`amount_wrapper_${type}`}>{type === "income"?"+ "+amount.toLocaleString():"- "+amount.toLocaleString()}원</div>
    <div className="date_wrapper">{new Date(date).toLocaleDateString()}</div>
    <div className="button_wrapper"><button onClick={()=>nav(`/edit-transaction/${id}`)}>수정</button><button onClick={onDelete}>삭제</button></div> 
  </div>;
};

export default TransactionItem; 