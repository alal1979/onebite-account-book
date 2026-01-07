import "./TransactionEditor.css";


const TransactionEditor = () =>{
  return (
     <div className="TransactionEditor">
        <div>분류</div>
        <div >
           <select className="type_wrapper">
              <option>지출</option>
              <option>수입</option>
            </select>        
        </div>
        <div>지출/수입 이름</div>
        <div ><input type="text" className="name_wrapper"/></div>
        <div>지출/수입 금액</div>
        <div ><input type="text" className="amount_wrapper"/></div>
        <div>카테고리</div>
        <div >
            <select className="category_wrapper">
              <option>🚗 식비</option>
              <option>🌱 구독</option>
              <option>📅 생활</option>
              <option>👌 급여</option>
              <option>🤷‍♀️ 금융</option>
            </select>
        </div>
        <div>날짜</div>
        <div ><input type="date" className="date_wrapper"/></div>
        <div><button  className="button_wrapper">저장</button></div>
        <div><button  className="button_wrapper">취소</button></div>

    </div>
  );
};

export default TransactionEditor;