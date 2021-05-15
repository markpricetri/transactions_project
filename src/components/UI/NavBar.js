import styled from "styled-components";
import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBarContainer = styled.div`
  height: 60px;
  background-color: var(--color-card-background);
  width: 50rem;
  max-width: 95%;
  margin: 4vh auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const NavBar = (props) => {
  const logOut = () => {
    localStorage.setItem("isLoggedIn", "LOGGED_OUT");
    props.logOut(["password"]);
  };

  return (
    <NavBarContainer>
      <FontAwesomeIcon icon={faBars} style={{ fontSize: "1.5rem" }} />
      <Button
        style={{
          background: "none",
          color: "var(--color-text)",
          border: "none",
        }}
        onClick={logOut}
      >
        Logout
      </Button>
    </NavBarContainer>
  );
};

export default NavBar;
