import EmojiCard from './components/EmojiCard'
import './App.css'
import QuoteOfTheDay from './components/QuoteOfTheDay';
import { useState } from 'react';
import TodayMood from './components/TodayMood';

function App() {
  const emojiObject = [
    {
      emojiName: "Happy",
      emoji:"😇",
      quote:"\"Happiness is not by chance, but by choice.\" – Jim Rohn" ,
    
    },
    {
      emojiName: "Sad",
      emoji:"😔",
      quote:"\"Sadness flies away on the wings of time.\" – Jean de La Fontaine" ,
    
    }, {
      emojiName: "Angry",
      emoji:"😠",
      quote:"\"For every minute you are angry, you lose sixty seconds of happiness.\" – Ralph Waldo Emerson"
    
    }, {
      emojiName: "Anxious",
      emoji:"😰",
      quote:"\"Nothing diminishes anxiety faster than action.\" – Walter Anderson"
    
    }, {
      emojiName: "Calm",
      emoji:"😌",
      quote:"\"Peace comes from within. Do not seek it without.\" – Buddha" 
    
    },
    {
      emojiName: "Tired",
      emoji:"😪",
      quote:"\"Rest when you're weary. Refresh and renew yourself.\" – Ralph Marston" ,
    
    },
    {
      emojiName: "Loved",
      emoji:"🥰",
      quote:"\"To love and be loved is to feel the sun from both sides.\" – David Viscott" ,
    
    }
  ];

  const [selectMood, setSelectMood] = useState("");

  function handleMoodSelect(moodObj){
    setSelectMood(moodObj);
  }

  return (
    <>
      <QuoteOfTheDay/>
    <div id="emoji-container">
     {emojiObject.map((mood)=>{
      return <EmojiCard key={mood.emojiName} {...mood} onMoodSelect={handleMoodSelect}/>
     } )}
      </div>

    <TodayMood mood={selectMood}/>
    </>
  )
}

export default App
