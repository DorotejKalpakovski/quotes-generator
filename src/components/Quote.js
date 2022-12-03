const ageEmojis = ["👶", "👨"];

const Quote = ({ quoteObj }) => {
  return (
    <div style={{ display: "flex" }} className="quote-container">
      <div className="quote-id">
        <p>{quoteObj.id}</p>
      </div>
      <div className="quote-body">
        <p>{quoteObj.body}</p>
      </div>
      <div className="quote-author">
        <p>{quoteObj.author}</p>
      </div>
      <div className="quote-emoji">
        <p>{quoteObj.age < 50 ? ageEmojis[0] : ageEmojis[1]}</p>
      </div>
    </div>
  );
};

export default Quote;
