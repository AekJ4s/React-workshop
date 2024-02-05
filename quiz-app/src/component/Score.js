import QuestionsData from "../data/QuestionsData";
import { useContext } from "react";
import { DataContext } from "../App";

const Score = () => {
    const { score,setAppState,setScore } = useContext(DataContext)

    const restartApp = () => {
        setScore(0)
        setAppState("menu")
    }

    return (
        <div className="score">
            <h1>Score Component</h1>
            <h2>{score} / {QuestionsData.length} </h2>
            <button onClick={restartApp}>ทำการทดสอบใหม่อีกครั้ง</button>
        </div>
    )
}

export default Score;