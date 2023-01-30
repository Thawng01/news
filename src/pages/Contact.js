import { useEffect } from "react";

import "./contact.css";

const Contact = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const handleFocus = (e) => {
        const { type } = e.target;
        if (type === "text") {
            const nameTag = document.getElementById("name");
            nameTag.style.transform = "translate(-5px, -30px)";
            nameTag.style.color = "black";
            nameTag.classList.add("moveUpLabel");
            document.getElementsByClassName(
                "contact-input"
            )[0].style.borderBottom = "1.5px solid #280253";
        }

        if (type === "email") {
            const emailTag = document.getElementById("email");
            emailTag.style.transform = "translate(-5px, -30px)";
            emailTag.style.color = "black";
            emailTag.classList.add("moveUpLabel");
            document.getElementsByClassName(
                "contact-input"
            )[1].style.borderBottom = "1.5px solid #280253";
        }
    };

    const handleBlur = (e) => {
        const { type, value } = e.target;
        if (type === "text") {
            if (value === "") {
                const nameTag = document.getElementById("name");
                nameTag.style.transform = "translate(0, 0)";
                nameTag.style.color = "gray";
                nameTag.classList.remove("moveUpLabel");
                document.getElementsByClassName(
                    "contact-input"
                )[0].style.borderBottom = "1px solid gray";
            }
        }

        if (type === "email") {
            if (value === "") {
                const emailTag = document.getElementById("email");
                emailTag.style.transform = "translate(0, 0)";
                emailTag.style.color = "gray";
                emailTag.classList.remove("moveUpLabel");
                document.getElementsByClassName(
                    "contact-input"
                )[1].style.borderBottom = "1px solid gray";
            }
        }
    };

    return (
        <div className="contact">
            <form className="contact-form">
                <div className="contact-form-controls">
                    <input
                        type="text"
                        className="contact-input"
                        onFocus={(e) => handleFocus(e)}
                        onBlur={(e) => handleBlur(e)}
                    />
                    <label id="name">Your name</label>
                </div>
                <div className="contact-form-controls">
                    <input
                        type="email"
                        className="contact-input"
                        onFocus={(e) => handleFocus(e)}
                        onBlur={(e) => handleBlur(e)}
                    />
                    <label id="email">Your email</label>
                </div>
                <textarea
                    className="contact-message"
                    placeholder="Your message..."
                    rows={7}
                ></textarea>
                <button type="submit" className="contact-send-btn">
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;
