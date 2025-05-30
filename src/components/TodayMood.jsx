import { useState } from "react";

function TodayMood({mood}){

    const[todayMood, setTodayMood] = useState(JSON.parse(localStorage.getItem("todayMood")))
     console.log("today Mood....", todayMood);
    
    const handleClearHistory = () =>{
        localStorage.removeItem("todayMood");
        setTodayMood(JSON.parse(localStorage.getItem("todayMood")) || []);
    }

    

    return(
        <>
            <button onClick={handleClearHistory} >Clear History</button>
            {todayMood.map((moodItem) => {
                return <p>{moodItem.mood + moodItem.date}</p>
            })}
            
        </>
    )
}

export default TodayMood;