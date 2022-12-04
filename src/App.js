import { Route, Routes } from "react-router-dom";
import QuotesList from "./pages/QuotesList";
import SoloQuote from "./pages/SoloQuote";
import HomePage from "./pages/HomePage";
import { useState, useEffect } from "react";
import getData from "./functions/getData";
import getAge from "./functions/getAge";

function App() {
  const [quotes, setQuotes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const callApi = async () => {
      try {
        const res = await getData();
        if (!res.ok) {
          throw new Error(`HTTP error status: ${res.status}`);
        }
        const data = await res.json();
        const ages = await getAge(
          // Agify.io returns a maximum of 10 ages per request
          data.quotes.map((quote) => quote.author).slice(0, 10)
        );
        const combinedData = data.quotes
          .slice(0, 10)
          .map((quoteObj, index) => ({ ...quoteObj, age: ages[index].age }));

        setError(null);
        setQuotes(combinedData);
      } catch (err) {
        setError(err);
        setQuotes(null);
      } finally {
        setLoading(false);
      }
    };

    callApi();
  }, []);
  return (
    <>
      <nav className="shadow-accent">
        <p>Quotes Generator</p>{" "}
        <div>
          <p>Made with: </p>
          <a href="https://favqs.com/api">FavQs API</a>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="quotes"
          element={
            <QuotesList quotes={quotes} loading={loading} error={error} />
          }
        />
        <Route path="random-quote" element={<SoloQuote />} />
      </Routes>
    </>
  );
}

export default App;
