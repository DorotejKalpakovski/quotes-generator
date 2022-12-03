const ErrorComponent = ({ message }) => {
  return (
    <div className="error-container center-screen">
      <h1>Oops, an error occurred.</h1>
      <h1>{message}</h1>
    </div>
  );
};

export default ErrorComponent;
