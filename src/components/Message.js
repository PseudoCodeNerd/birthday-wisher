import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import styled from "styled-components";

const Message = styled.div`
  white-space: nowrap;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 4rem;
  @media screen and (max-width: 900px) {
    white-space: default;
    font-size: 2rem;
  }
`;

const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  padding: 15px 20px;
  cursor: pointer;
  position: relative;
  margin-top: 3rem;
`;

const Container = styled.div`
  text-align: center;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Thank = styled.div`
  display: responsive;
  white-space: nowrap;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 1rem;
  @media screen and (max-width: 900px) {
    font-size: 1rem;
    white-space: default;
  }
`;

const ThankTwo = styled.div`
  display: responsive;
  white-space: nowrap;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 3rem;
  @media screen and (max-width: 900px) {
    font-size: 0.75rem;
    white-space: default;
  }
`;

class Landing extends React.Component {
  render() {
    return (
        <Container>
          <Message style={{ color: this.props.Data.textColor }}>
            <i>Venture</i> is finally complete!
          </Message>
          <Thank style={{ color: this.props.Data.textColor }}>
            -&nbsp;Thank you to everyone who contributed :-)
          </Thank>
          <ThankTwo style={{ color: this.props.Data.textColor }}>
            <i>
              Congratulations. All of you deserve plenty of wholesome self-pats
              . . .
            </i>
          </ThankTwo>
          <Link to="/src">
            <Button>Read Venture</Button>
          </Link>
        </Container>
    );
  }
}

export default Landing;
