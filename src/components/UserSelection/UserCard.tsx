import styled from "styled-components";
import AvatarIMG from "static/img/UserPic.png";
import CheckSVG from "static/svg/check.svg";

interface Props {
  userId: string;
  selectedUser: string;
  selectUser: any;
}

const StyledContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

const StyledAvatar = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 100%;
`;

const StyledUsernameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

const StyledUsernameTitle = styled.div`
  font-size: 12px;
  color: white;
`;

const StyledUsername = styled.div`
  color: #758398;
  font-size: 8px;
`;

const StyledCheck = styled.div`
  margin-left: auto;
  width: 25px;
  height: 25px;

  background-image: url("${CheckSVG}");
  background-repeat: no-repeat;
  background-size: cover;
`;

const UserCard = (props: Props) => {
  const isActive = props.userId === props.selectedUser;

  const select = () => {
    props.selectUser(props.userId);
  };

  return (
    <StyledContainer onClick={() => select()}>
      <StyledAvatar src={AvatarIMG} />
      <StyledUsernameWrapper>
        <StyledUsernameTitle>Denis Qu</StyledUsernameTitle>
        <StyledUsername>@Denis</StyledUsername>
      </StyledUsernameWrapper>
      {isActive && <StyledCheck />}
    </StyledContainer>
  );
};

export default UserCard;
