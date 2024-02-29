import styled from "styled-components";
import UserPic from "../static/img/UserPic.png"



const StyledAccount = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
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
`;
const Account = () => {
    const tg = Telegram.WebApp;

    return (

        <StyledAccount>
            <StyledPhoto>
                <img src={UserPic} alt="" />
            </StyledPhoto>
            <StyledName>
                {tg.initDataUnsafe?.user?.username}
            </StyledName>
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z" fill="white" />
            </svg>
        </StyledAccount>

    );
}

export default Account;