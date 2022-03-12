import "./error.css";

const Error = ({ onRefresh }) => {
    return (
        <div className="error-message-container">
            <span className="error-message">Something went wrong!</span>
            <span className="try-again-btn" onClick={onRefresh}>
                Try again
            </span>
        </div>
    );
};

export default Error;
