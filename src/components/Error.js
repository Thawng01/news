import "./error.css";

const Error = ({ onRefresh, error }) => {
    return (
        <div className="error-message-container">
            <span className="error-message">{error}</span>
            <span className="try-again-btn" onClick={onRefresh}>
                Try again
            </span>
        </div>
    );
};

export default Error;
