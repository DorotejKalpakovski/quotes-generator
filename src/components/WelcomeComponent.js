import { Link } from "react-router-dom";

const WelcomeComponent = () => {
  return (
    <div className="welcome-container center-screen">
      <h1>Welcome to the Quotes Generator page</h1>
      <div
        style={{
          display: "flex",
          gap: "40px",
        }}
      >
        <Link to="/quotes" className="button">
          Quotes List
        </Link>
        <Link to="/random-quote" className="button">
          Random Quote
        </Link>
      </div>
    </div>
  );
};

export default WelcomeComponent;
