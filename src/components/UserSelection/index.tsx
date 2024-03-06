import styled from "styled-components";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { selectUser } from "store/tasks";
import { setFilter } from "store/taskCardFilter";

interface Props {
  selectedUser: string;
  selectUser: any;
}

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

const UserSelection = (props: Props) => {
  return (
    <StyledContainer>
      <StyledTitle>Назначить</StyledTitle>
      <StyledUsersWrapper>
        <UserCard
          userId="1"
          selectedUser={props.selectedUser}
          selectUser={props.selectUser}
        />
        <UserCard
          userId="2"
          selectedUser={props.selectedUser}
          selectUser={props.selectUser}
        />
        <UserCard
          userId="3"
          selectedUser={props.selectedUser}
          selectUser={props.selectUser}
        />
        <UserCard
          userId="4"
          selectedUser={props.selectedUser}
          selectUser={props.selectUser}
        />
      </StyledUsersWrapper>
    </StyledContainer>
  );
};

export default UserSelection;
