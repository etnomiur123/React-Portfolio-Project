import React from "react";
import styled from 'styled-components'

const Award = ({ title, description, k }) => {
  return (
    <AwardStyle key={k}>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

const AwardStyle = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }

    .line {
      width: 100%;
      background: #23d997;
      height: 0.5rem;
      margin: 1rem 0rem;
    }

    p{
      padding: 2rem 0rem;
    }
`

export default Award;
