import React from 'react';

const Suggestion = ({detailsP,detailsh6,btn,commentNumber}) => {
    return (
        <div className="suggestion_box_content">
            <div className="indexNumber">
                <p>	&#94;</p>
                <p>112</p>
            </div>
            <div className="details">
                <h6>{detailsh6}</h6>
                <p>{detailsP}</p>
                <button>{btn}</button>
            </div>
            <div className="comment_section">
                <p className="icon">&#128172;</p> 
                <p>{commentNumber}</p>
            </div>
        </div>
    );
};

export default Suggestion;