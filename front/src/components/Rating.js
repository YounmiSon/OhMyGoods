import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const ARRAY = [0, 1, 2, 3, 4];

function Rating() {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]);

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
  };

  return (
    <div>
      <Stars>
        {ARRAY.map((el, idx) => {
          return <FaStar key={idx} size="50" onClick={() => handleStarClick(el)} className={clicked[el] && "yellowStar"} />;
        })}
      </Stars>
    </div>
  );
}

export default Rating;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #816bff;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #816bff;
  }
`;
