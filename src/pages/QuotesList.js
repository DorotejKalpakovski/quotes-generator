import Quote from "../components/Quote";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import ErrorComponent from "../components/ErrorComponent";

const QuotesList = ({ quotes, loading, error }) => {
  return (
    <div>
      <div className="buttons-container" style={{ justifyContent: "flex-end" }}>
        <Link to="/random-quote" className="button">
          Random Quote
        </Link>
      </div>
      {loading && <Loader />}
      {!loading && error && <ErrorComponent message={error.message} />}
      {quotes && (
        <div className="quotes-list-container">
          {quotes.map((quote) => (
            <Quote key={quote.id} quoteObj={quote} />
          ))}
        </div>
      )}
    </div>
  );
};

export default QuotesList;
