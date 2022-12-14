import FocusedQuote from "../components/FocusedQuote";
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import getData from "../functions/getData";
import Loader from "../components/Loader";
import ErrorComponent from "../components/ErrorComponent";

const randomQuote = (quotes) => {
  const randomNumber = Math.floor(Math.random() * 25);
  return quotes[randomNumber];
};

const SoloQuote = () => {
  const [quotes, setQuotes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getNewQuote = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getData();
      if (!res.ok) {
        throw new Error(`HTTP error: status: ${res.status}`);
      }
      const data = await res.json();
      setQuotes(data.quotes);
      setError(null);
    } catch (err) {
      setQuotes(null);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getNewQuote();
  }, [getNewQuote]);

  return (
    <div>
      <div className="buttons-container">
        <Link to="/quotes" className="button">
          Back
        </Link>
        <button onClick={getNewQuote} className="button" disabled={loading}>
          Get new quote
        </button>
      </div>
      {loading && <Loader />}
      {!loading && error && <ErrorComponent message={error.message} />}
      {!loading && quotes && <FocusedQuote quoteObj={randomQuote(quotes)} />}
    </div>
  );
};

export default SoloQuote;
