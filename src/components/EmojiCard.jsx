function EmojiCard({ emojiName, emoji, quote, onMoodSelect }) {

    const handleClick = () => {
        const now = new Date();
        const today = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} - ${now.getHours()}:${now.getMinutes()}`;
        const newMood = {
            mood: emojiName,
            date: today
        }

        const moodHistory = JSON.parse(localStorage.getItem("todayMood")) || [];
        moodHistory.push(newMood);
        localStorage.setItem("todayMood", JSON.stringify(moodHistory));
        onMoodSelect(moodHistory);
    }

    return (
        <>
            <div
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition text-center border border-gray-200 cursor-pointer w-full h-full"
                onClick={handleClick}
            >
                <h3 className="mt-2 mb-4 font-semibold text-xl text-gray-800">{emojiName}</h3>
                <div className="text-5xl">{emoji}</div>
                <p className="mt-4 text-sm text-gray-600 italic">{quote}</p>
            </div>

        </>
    )
}

export default EmojiCard;