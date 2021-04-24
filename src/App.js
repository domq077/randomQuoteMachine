import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [author, setAuthor] = useState('');
  const [quote, setQuote] = useState('');
  
  //fetch data first time
  useEffect(() => {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        let random = Math.floor(Math.random() * result.length);
        setQuote(result[random].quote);
        setAuthor(result[random].author);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, []);

  //generate new quote - fetch data again
  const generateNewQuote = () => {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        let random = Math.floor(Math.random() * result.length);
        setQuote(result[random].quote);
        setAuthor(result[random].author);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }

  //back to previous qoute
  const prevQuoteRef = useRef();
  const prevAuthorRef = useRef();
  useEffect(() => {
    prevQuoteRef.current = quote;
    prevAuthorRef.current = author;
  }, [author]);
  const prevQuote = prevQuoteRef.current;
  const prevAuthor = prevAuthorRef.current;
  const backToPrev = () => {
    setQuote(prevQuote);
    setAuthor(prevAuthor);
  }

  return (
    <div className="App">
      <h1 className="title">Rndom Quote Machine</h1>
      <div className="quote">
        <p className="quote__text">&bdquo;{quote}&rdquo;</p>
        <p className="quote__author">~{author}</p>
        <button 
        className="btn"
        onClick={generateNewQuote}
      >
        New quote
      </button>
      <button 
        className="btn"
        onClick={backToPrev}
      >
        Back to previous
      </button>
      </div>
    </div>
  );
}

export default App;
