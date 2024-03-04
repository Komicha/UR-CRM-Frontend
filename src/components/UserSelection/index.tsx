import styled from "styled-components";
import UserCard from "./UserCard";

const StyledTitle = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #758398;
  margin-top: 10px;
  margin-bottom: 16px;
  margin-left: 10px;
`;

const StyledContainer = styled.div`
  border-radius: 12px;
  background-color: #19212b;
  margin-top: 16px;
`;

const StyledUsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin: 16px;
`;

const UserSelection = () => {
  return (
    <StyledContainer>
      <StyledTitle>Назначить</StyledTitle>
      <StyledUsersWrapper>
        <UserCard isActive />
        <UserCard />
        <UserCard />
        <UserCard />
      </StyledUsersWrapper>
    </StyledContainer>
  );
};

export default UserSelection;
