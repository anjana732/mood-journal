

function TodayMood({todayMood,onClearHoistory}){

    // const[todayMood, setTodayMood] = useState(JSON.parse(localStorage.getItem("todayMood")))
    //  console.log("today Mood....", todayMood);
    
    const handleClearHistory = () =>{
        onClearHoistory(localStorage.removeItem("todayMood"));
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