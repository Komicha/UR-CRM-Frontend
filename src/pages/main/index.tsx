import styled from "styled-components";
import UserPic from "../../static/img/UserPic.png";
import Project from "components/Project";
import { tg } from "../../static/constants";
import { Link, useNavigate } from "react-router-dom";
import { inherits } from "util";
const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  padding-top: 10px;
`;
const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const StyledAccount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9px;
`;
const StyledPhoto = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 100px;
`;
const StyledName = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: center;
  color: var(--tg-theme-text-color);
`;

const user_id = tg.initDataUnsafe.user?.id;
/*fetch(`https://crm-backend-3dov.onrender.com/api/user_data/?user_id=${user_id}`, {
    method: 'GET'
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log("инфа" + data);
    });
*/

const Main = () => {
  tg.BackButton.hide();
  const navigate = useNavigate();
  tg.onEvent("backButtonClicked", () => navigate(-1));
  console.log("init: " + tg.initData);
  console.log("init: " + tg.initDataUnsafe.chat?.type);
  console.log("start param: " + tg.initDataUnsafe.start_param);
  return (
    <StyledMain>
      <StyledAccount>
        <StyledPhoto>
          <img src={UserPic} alt="" />
          <img src={tg.initDataUnsafe?.user?.photo_url} alt="" />
        </StyledPhoto>
        <StyledName>{tg.initDataUnsafe.user?.first_name}</StyledName>
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z"
            fill="var(--tg-theme-text-color)"
          />
        </svg>
      </StyledAccount>
      <StyledProjects>
        <Project />
        <Project />
        <Project />
      </StyledProjects>
    </StyledMain>
  );
};

export default Main;
