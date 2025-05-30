function EmojiCard({ emojiName, emoji, quote , onMoodSelect}) {

    const handleClick = () =>{
        onMoodSelect({mood:emojiName})
    }

    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition w-64 text-center border border-gray-200 cursor-pointer" 
            onClick={handleClick}>
                
                <h3 className="mt-2 mb-4 font-semibold text-xl text-gray-800">{emojiName}</h3>
                <div style={{ fontSize: '10rem' }} className="text-9xl">{emoji}</div>
                <p className="mt-4 text-sm text-gray-600 italic">{quote}</p>
            </div>
        </>
    )
}

export default EmojiCard;