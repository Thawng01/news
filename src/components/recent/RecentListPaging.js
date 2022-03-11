import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const RecentListPaging = ({ totalPages, page, handlePaging, setPage }) => {
    let pages = () => {
        let pages = [];
        for (let i = 0; i < totalPages; i++) {
            pages.push(i);
        }

        return pages;
    };

    return (
        <div className="recent-paging-btns">
            {page > 0 && (
                <button
                    className="recent-paging-left-btn"
                    onClick={() => handlePaging(-1)}
                >
                    <MdKeyboardArrowLeft className="recent-paging-icon" />
                </button>
            )}
            {pages().map((n) => {
                return (
                    <span
                        key={n}
                        style={{
                            backgroundColor: n === page ? "red" : "#f1f1f1",
                            color: n === page ? "#fff" : "#000",
                        }}
                        onClick={() => setPage(n)}
                        className="paging-index"
                    >
                        {n + 1}
                    </span>
                );
            })}
            {page === totalPages - 1 ? null : (
                <button
                    className="recent-paging-right-btn"
                    onClick={() => handlePaging(1)}
                >
                    <MdKeyboardArrowRight className="recent-paging-icon" />
                </button>
            )}
        </div>
    );
};

export default RecentListPaging;
