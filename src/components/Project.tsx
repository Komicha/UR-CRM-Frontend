
import styled from "styled-components";
import ProgressBar from "./ProgressBar";


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
        <StyledProject>
            <StyledNameProject>
                Разработка платформы для оптовых продаж
            </StyledNameProject>
            <ProgressBar />
        </StyledProject>

    );
}

export default Project;