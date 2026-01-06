import "./Home.css";
import { useContext } from "react";
import {TransactionStateContext} from "../App";
import TransactionItem from "../components/TransactionItem ";

const Home = () => {
  const transactions = useContext(TransactionStateContext);
  console.log("정렬순",transactions);
  const getSortedTransactions = () =>{
    return transactions.toSorted((a,b)=>{
      return Number(b.date)  - Number(a.date);
    })
  }

  const sortedTransactions = getSortedTransactions();

  console.log("TOBE 정렬순",sortedTransactions );
  return (
    <>
      <div className="header_wrapper">
        <h1>한입 가계부</h1>
        <div><button>+작성하기</button></div>
      </div>
      <div className="content_wrapper">
      {sortedTransactions.map((item)=>{
        return  <TransactionItem key={item.id} {...item}/>
      })}
      </div> 
   </>
  );
};

export default Home;