import { useNavigate, useParams} from "react-router-dom";
import { useContext,useEffect ,useState} from "react";
import { TransactionStateContext } from "../App";
import TransactionEditor from "../components/TransactionEditor";
import { TransactionDispatchContext } from "../App";

const EditTransaction = () =>{
    const nav = useNavigate();
    const params = useParams();
    const transactions = useContext(TransactionStateContext);
    const { onUpdateTransaction } = useContext(TransactionDispatchContext);
    const [curTransactions , setCurTransactions] = useState();

    console.log("transactions ", transactions);
    console.log("params.id ", params.id);
   
    useEffect(()=>{
      const initData = transactions.find((item)=> String(item.id) === String(params.id) );

      if(!initData){
        alert("존재하지 않습니다.");
        nav("/" ,{replace: true});
      }

      setCurTransactions(initData);
    },[params.id]);

   
    console.log("curTransactions",curTransactions);

 
    const onSubmit = (state) =>{
      onUpdateTransaction(params.id, state.name, state.amount, state.type, state.category, state.date.getTime());
      nav("/",{replace : true});
    }
    return (
    <>
      <h1>기록 수정하기</h1>
      <TransactionEditor initData={curTransactions} type="EDIT" onSubmit={onSubmit} />
    </> 
  ) ;
};

export default EditTransaction;