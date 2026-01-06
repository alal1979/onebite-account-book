import "./TransactionItem.css";

const TransactionItem= ({category,name,amount,date,type}) => {

  return <div className="TransactionItem">
    <div className="category_wrapper">{category}</div>
    <div className="name_wrapper">{name}</div>
    <div className={`amount_wrapper_${type}`}>{type === "income"?"+ "+amount.toLocaleString():"- "+amount.toLocaleString()}원</div>
    <div className="date_wrapper">{new Date(date).toLocaleDateString()}</div>
    <div className="button_wrapper"><button>수정</button><button>삭제</button></div> 
  </div>;
};

export default TransactionItem; 