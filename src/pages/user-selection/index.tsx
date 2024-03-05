import UserSelection from "components/UserSelection";
import styled from "styled-components";
import TaskBtn from "components/TaskBtn";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100vh;
`;

const UserSelectionPage = () => {
  return (
    <StyledContainer>
      <UserSelection />
      <TaskBtn title="Назначить" />
    </StyledContainer>
  );
};

export default UserSelectionPage;
