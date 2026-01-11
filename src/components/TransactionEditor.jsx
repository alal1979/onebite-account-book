import { useState , useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./TransactionEditor.css"; 


const TransactionEditor = ({onSubmit}) =>{
   
    const [state, setState ] = useState({
      type :"",
      name : "",
      amount : "",
      category : "",
      date : new Date(), 
    });

   const typeRef = useRef(null);
   const nameRef = useRef(null);
   const amountRef = useRef(null);
   const categoryRef = useRef(null);
   const dateRef = useRef(null);


    const onClickSubmitButton = () =>{
      if(state.type.trim() === ""){
        typeRef.current.focus();
        return;
      };

      if(state.name.trim() === ""){
        nameRef.current.focus();
        return;
      };

      if(state.amount.trim() === ""){
        amountRef.current.focus();
        return;
      };

     if(state.category.trim() === ""){
        categoryRef.current.focus();
        return;
      }; 
 
 

      onSubmit(state);
   }


    const nav = useNavigate();
    const onInput = (e) =>{

      let name=  e.target.name;
      let value = e.target.value;

      if(name === "date"){
        value = new Date(value);
      }

      setState({
        ...state,
        [name] : value,
      });
    }


    const getStringedDate = (targetDate) =>{
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    if(month < 10){
      month = `0${month}`;
    }
    if(date < 10){
      date = `0${date}`;
    }
    
    return `${year}-${month}-${date}`;
  } 



  return (
     <div className="TransactionEditor">
        <div>분류</div>
        <div >
           <select className="type_wrapper" ref={typeRef} name="type" value={state.type} onChange={onInput}>
              <option value={"expense"}>지출</option>
              <option value={"income"}>수입</option>
            </select>        
        </div>
        <div>지출/수입 이름</div>
        <div><input type="text" value={state.name} ref={nameRef} name="name"  onChange={onInput}  className="name_wrapper"    placeholder="지출 & 수입 이름을 입력하세요.."/></div>
        <div>지출/수입 금액</div>
        <div><input type="text" value={state.amount} ref={amountRef} name="amount" onChange={onInput}  className="amount_wrapper"  placeholder="금액을 입력하세요" /></div>
        <div>카테고리</div>
        <div >
            <select className="category_wrapper" ref={categoryRef} value={state.category} name="category" onChange={onInput}>
              <option>🚗 식비</option>
              <option>🌱 구독</option>
              <option>📅 생활</option>
              <option>👌 급여</option>
              <option>🤷‍♀️ 금융</option>
            </select>
        </div>
        <div>날짜</div>
        <div><input type="date" className="date_wrapper" ref={dateRef} value={getStringedDate(state.date)} name="date" onChange={onInput} /></div>
        <div><button  className="button_wrapper bora" onClick={onClickSubmitButton }>저장 </button> </div>
        <div><button  className="button_wrapper red" onClick={ () => nav("/") }>취소</button></div>
    </div>
  );
};

export default TransactionEditor;