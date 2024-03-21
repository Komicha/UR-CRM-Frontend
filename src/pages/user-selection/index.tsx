import UserSelection from "components/UserSelection";
import styled from "styled-components";
import TaskBtn from "components/TaskBtn";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { selectUser } from "store/tasksSlice";
import { useNavigate } from "react-router-dom";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100vh;
`;

const UserSelectionPage = () => {
  const [user, setUser] = useState("");
  const currentUser = useSelector(
    (state: RootState) => state.tasksReducer.selectedUser
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const submitUser = () => {
    dispatch(selectUser(user));
    navigate("/project-tasks");
  };

  return (
    <StyledContainer>
      <UserSelection selectedUser={user} selectUser={setUser} />
      <TaskBtn onClick={submitUser} title="Назначить" />
    </StyledContainer>
  );
};

export default UserSelectionPage;
