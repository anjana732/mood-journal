import EmojiCard from './components/EmojiCard'
import './App.css'
import QuoteOfTheDay from './components/QuoteOfTheDay';
import { useState } from 'react';
import TodayMood from './components/TodayMood';

function App() {
  const emojiObject = [
    {
      emojiName: "Happy",
      emoji: "😇",
      quote: "\"Happiness is not by chance, but by choice.\" – Jim Rohn",

    },
    {
      emojiName: "Sad",
      emoji: "😔",
      quote: "\"Sadness flies away on the wings of time.\" – Jean de La Fontaine",

    }, {
      emojiName: "Angry",
      emoji: "😠",
      quote: "\"For every minute you are angry, you lose sixty seconds of happiness.\" – Ralph Waldo Emerson"

    }, {
      emojiName: "Anxious",
      emoji: "😰",
      quote: "\"Nothing diminishes anxiety faster than action.\" – Walter Anderson"

    }, {
      emojiName: "Calm",
      emoji: "😌",
      quote: "\"Peace comes from within. Do not seek it without.\" – Buddha"

    },
    {
      emojiName: "Tired",
      emoji: "😪",
      quote: "\"Rest when you're weary. Refresh and renew yourself.\" – Ralph Marston",

    },
    {
      emojiName: "Loved",
      emoji: "🥰",
      quote: "\"To love and be loved is to feel the sun from both sides.\" – David Viscott",

    }
  ];

  const [selectMood, setSelectMood] = useState(() => {
    return JSON.parse(localStorage.getItem("todayMood")) || [];
  });
  function handleMoodSelect(updateMoodHistory) {
    setSelectMood(updateMoodHistory);
  }

  function handleClearHistory(){
    setSelectMood([]);
  }
  
  const hasTodayMood = localStorage.getItem("todayMood") !== null;

  return (
    <>
    <QuoteOfTheDay />
    <center style={{fontSize:"30px", fontWeight:"bolder" , color:"gray" }} className="mb-5">How's Your day Today ?</center>
  
   <div
  id="main-div"
  className="flex flex-col lg:flex-row px-4 max-w-7xl mx-auto w-full box-border relative"
>

  {/* EmojiCard Section */}
  <div
    id="emoji-container"
    className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ${
      hasTodayMood ? 'lg:w-3/4' : 'w-full'
    }`}
  >
    {emojiObject.map((mood) => (
      <EmojiCard key={mood.emojiName} {...mood} onMoodSelect={handleMoodSelect} />
    ))}
  </div>

  {/* TodayMood Section — smaller */}
  {hasTodayMood && (
    <div className="lg:w-1/4 w-full flex justify-center">
    
        <TodayMood
          todayMood={selectMood}
          onClearHoistory={handleClearHistory}
        />
    
    </div>
  )}
</div>

  </>
  
  )
}

export default App
