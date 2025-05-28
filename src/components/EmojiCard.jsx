function EmojiCard({emojiName, emoji, quote}){
    return(
        <>
            <h3>{emojiName}</h3>
            <p>{emoji}</p>
            <p>{quote}</p>
        </>
    )
}

export default EmojiCard;