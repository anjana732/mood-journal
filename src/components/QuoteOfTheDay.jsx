import React,{useState, useEffect} from "react";

const url = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/today");

function QuoteOfTheDay(){

const [quote, setQuote] = useState("");
const [author, setAuthor] = useState("")


    useEffect(()=>{
        async function fetchQuote(){
            try {
                const response = await fetch(url);
                    if(response.ok){
                        const data = await response.json();
                        const parsedData = JSON.parse(data.contents); 
                        setQuote(parsedData[0].q);
                        setAuthor(parsedData[0].a);
                    }else{
                        console.log("can't fecth");
                    }
            
            } catch (error) {
                console.log("error fetching data"+error);
            }
        }
        fetchQuote();
    },[])
    
    
    return(
        <>
        <h3>"{quote}"</h3>
        <p>- {author}</p>
        </>
    )
}

export default QuoteOfTheDay;