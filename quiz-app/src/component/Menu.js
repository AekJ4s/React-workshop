import { useContext } from "react";
import { DataContext } from "../App";
const Menu = ()=>{
    const {setAppState} = useContext(DataContext)
    return(
        <div className="quiz">
            <h1>Menu Component</h1>
            <button onClick={()=>setAppState("quiz")}>เริ่มทำแบบข้อสอบ</button>
        </div>
    )
}

export default Menu;