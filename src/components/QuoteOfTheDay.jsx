import React, { useState, useEffect } from "react";

const url = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/today");

function QuoteOfTheDay() {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("")


    useEffect(() => {

        const storedQuote = localStorage.getItem("quote");
        const storedAuthor = localStorage.getItem("author");
        const storedDate = localStorage.getItem("today");

        const today = new Date().toISOString().split("T")[0];

        if (storedAuthor && storedQuote && storedDate === today) {
            console.log("local storage used");
            setQuote(storedQuote);
            setAuthor(storedAuthor);
        } else {

            async function fetchQuote() {
                try {
                    const response = await fetch(url);
                    console.log("API called");
                    if (response.ok) {
                        const data = await response.json();
                        const parsedData = JSON.parse(data.contents);
                        setQuote(parsedData[0].q);
                        setAuthor(parsedData[0].a);
                        localStorage.setItem("quote", parsedData[0].q);
                        localStorage.setItem("author", parsedData[0].a);
                        localStorage.setItem("today", today);

                    } else {
                        console.log("can't fecth");
                    }

                } catch (error) {
                    console.log("error fetching data" + error);
                }
            }
            fetchQuote();
        }
    }, [])


    return (
        <>
            <div id="quote-cotainer" className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4">
                <h3 style={{color: "gray", fontFamily:"cursive", fontWeight:"400", fontSize:"23px"}} >"{quote}"</h3>
                <p style={{color: "gray", fontFamily:"cursive", fontWeight:"400", fontSize:"23px"}}> - {author}</p>
            </div>
        </>
    )
}

export default QuoteOfTheDay;