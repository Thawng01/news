import "./error.css";

const Error = ({ status }) => {
    return (
        <div
            className="error-message-container"
            style={{ top: status === "error" ? 0 : -65 }}
        >
            <span className="error-message">
                You have made too many requests recently
            </span>
        </div>
    );
};

export default Error;
