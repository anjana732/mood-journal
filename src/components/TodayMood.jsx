

function TodayMood({ todayMood, onClearHoistory }) {

    // const[todayMood, setTodayMood] = useState(JSON.parse(localStorage.getItem("todayMood")))
    //  console.log("today Mood....", todayMood);

    const handleClearHistory = () => {
        onClearHoistory(localStorage.removeItem("todayMood"));
    }



    return (
        <>
            <div className="rounded-lg p-6 shadow-md w-full h-full">
                <button onClick={handleClearHistory} >Clear History</button>
                {todayMood.map((moodItem) => {
                    return <p>{moodItem.mood + moodItem.date}</p>
                })}
            </div>
        </>
    )
}

export default TodayMood;