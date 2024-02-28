
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const StyledContainer = styled.div`
margin: 0px auto;

padding: 0px 19px;
`;

const StyledProject = styled.div`
    display: flex;
    background-color: #19212B;
    flex-direction: column;
    gap: 36px;
`;
const StyledNameProject = styled.h2`
    font-family: Inter;
    font-size: 17px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;

`



const Project = () => {
    return (
        <StyledContainer>
            <StyledProject>
                <StyledNameProject>
                    Разработка платформы для оптовых продаж
                </StyledNameProject>
                <ProgressBar />
            </StyledProject>
        </StyledContainer>


    );
}

export default Project;