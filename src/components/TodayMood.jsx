function TodayMood({ todayMood, onClearHoistory }) {

    const handleClearHistory = () => {
        onClearHoistory(localStorage.removeItem("todayMood"));
    }

    return (
        <>
           <div className="relative w-full">
  {/* Clear Button - Top Right */}
  <div className="flex justify-end pr-2">
    <button
      onClick={handleClearHistory}
      className="text-sm text-purple-600 hover:text-purple-800 bg-transparent px-3 py-1"
    >
      Clear History
    </button>
  </div>

  {/* Mood Entries (With Padding-Top so nothing overlaps) */}
  <div className="mt-2 pr-2 flex flex-col gap-3 ml-4">
    {todayMood.map((moodItem, index) => (
      <div
        key={index}
        className="p-2 border border-gray-200 rounded-lg shadow-md bg-white text-sm text-gray-800"
      >
        {`Your mood was ${moodItem.mood} at ${moodItem.date}`}
      </div>
    ))}
  </div>
</div>

        </>
    )
}

export default TodayMood;