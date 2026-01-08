import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TransactionEditor.css"; 

const TransactionEditor = () =>{
    const [state, setState ] = useState({
      type :"",
      name : "",
      amount : "",
      category : "",
      date : new Date(), 
    });
    const nav = useNavigate();
    const onInput = (e) =>{
      setState({
        ...state,
        [e.target.name] : e.target.value,
      });
    }

  return (
     <div className="TransactionEditor">
        <div>분류</div>
        <div >
           <select className="type_wrapper" value={state.type} onChange={onInput}>
              <option>지출</option>
              <option>수입</option>
            </select>        
        </div>
        <div>지출/수입 이름</div>
        <div><input type="text" value={state.name}   onChange={onInput}  className="name_wrapper"    placeholder="지출 & 수입 이름을 입력하세요.."/></div>
        <div>지출/수입 금액</div>
        <div><input type="text" value={state.amount} onChange={onInput}  className="amount_wrapper"  placeholder="금액을 입력하세요" /></div>
        <div>카테고리</div>
        <div >
            <select className="category_wrapper" value={state.category}>
              <option>🚗 식비</option>
              <option>🌱 구독</option>
              <option>📅 생활</option>
              <option>👌 급여</option>
              <option>🤷‍♀️ 금융</option>
            </select>
        </div>
        <div>날짜</div>
        <div><input type="date" className="date_wrapper"  value={state.date} /></div>
        <div><button  className="button_wrapper bora">저장 </button> </div>
        <div><button  className="button_wrapper red" onClick={ () => nav("/") }>취소</button></div>
    </div>
  );
};

export default TransactionEditor;