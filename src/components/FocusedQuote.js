const FocusedQuote = ({ quoteObj }) => {
  return (
    <div className="focused-quote-container shadow-accent center-screen">
      <div>
        <p>{quoteObj.body}</p>
      </div>
      <hr />
      <div>
        <p>{quoteObj.author}</p>
      </div>
    </div>
  );
};

export default FocusedQuote;
