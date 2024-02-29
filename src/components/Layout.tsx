import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const StyledContainer = styled.main`
  margin: 0px auto;
  width: 382px;
  padding: 0px 19px;
  box-sizing: border-box;
`;

const Layout = (props: Props) => {
  const location = useLocation();

  const isHeader = location.pathname !== "/";

  return (
    <>
      {isHeader ? <Header /> : null}
      <StyledContainer>{props.children}</StyledContainer>
    </>
  );
};

export default Layout;
