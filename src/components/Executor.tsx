import styled from "styled-components";
import ImgProfile from "../static/img/imgprofile.png"
const StyledExecutor = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 14px;
    background-color: #19212B;
    border-radius: 6px;
`;

const StyledBtn = styled.button`
    border: none;
    width: 16px;
    height: 16px;
`;

const StyledExecutorTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;


    font-size: 12px;
    font-weight: 600;
    line-height: 13px;

`;
const StyledExecutorProfile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    font-size: 12px;
    font-weight: 500;
    line-height: 13px;


`;

const Executor = () => {
    return (
        <StyledExecutor>
            <StyledExecutorTitle>
                <StyledBtn>
                </StyledBtn>
                Исполнитель:
            </StyledExecutorTitle>
            <StyledExecutorProfile>
                <img src={ImgProfile} alt="" />
                Игнатова Полина
            </StyledExecutorProfile>

        </StyledExecutor>
    );
}

export default Executor;