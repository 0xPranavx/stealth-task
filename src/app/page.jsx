"use client"
import { useState } from "react";
import {quotes} from "../data/quotes"


export default function Home() {
//   const quotes= [
    
//         {
//           quote: "this only way to do great work is to love what you do",
//           author: "Alexa Huxley"
//         },
//         {
//           quote: "yooooo",
//           author: "Jordan Elridge"
//         },
//         {
//           quote: "this shall too pass",
//           author: "Samara Finch"
//         },
//         {
//           quote: "Innovation distinguishes between a leader and a follower.",
//           author: "Riley Keaton"
//         },
//         {
//           quote: "Your time is limited, don't waste it living someone else's life.",
//           author: "Casey Blaire"
//         },
//         {
//           quote: "Stay hungry, stay foolish.",
//           author: "Morgan Sterling"
//         },
//         {
//         quote: "Sometimes life hits you in the head with a brick. Don't lose faith.",
//           author: "Taylor Monroe"
//         },
//         {
//           quote: "Design is not just what it looks like and feels like. Design is how it works.",
//           author: "Dakota Avery"
//         },
//         {
//           quote : "The people who are crazy enough to think they can change the world are the ones who do.",
//           author: "Skyler Peyton"
//         },
//         {
//           quote: "Quality is more important than quantity. One home run is much better than two doubles.",
//           author: "Reese Camden"
//         }
      
      
// ] ;




  const [Quote, SetQuote] = useState(quotes[0]);

  function randomquote() {
    const num = Math.floor(Math.random() * quotes.length);

    const quote = quotes[num];
    SetQuote(quote);
  }


  return (
    <div className="flex justify-center items-center h-screen ">
    <div className=" flex flex-col justify-center items-center " >
      <h1 className=" text-2xl md:text-5xl font-bold py-8"> Random Quote Generator</h1>
     
      <p className=" w-50 text-center text-xl font-semibold italic py-4 ">"{Quote.quote}"</p>
      <p className="text-xl font-semibold py-6 ">-{Quote.author}</p>
      <button className="border p-1 bg-slate-100 border-black" onClick={randomquote}> Get New Quote</button>
    </div>
    </div>
  );
}