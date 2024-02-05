import QuestionsData from "../data/QuestionsData";
import { useContext } from "react";
import { DataContext } from "../App";

const Score = ()=>{
    const {score} = useContext(DataContext)
    return(
        <div className="score">
            <h1>Score Component</h1>
            <h2>{score} / {QuestionsData.length} </h2>
        </div>
    )
}

export default Score;