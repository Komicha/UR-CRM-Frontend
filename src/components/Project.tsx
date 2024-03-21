import { Link } from "react-router-dom";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { title } from "process";

interface Project {
    id: number;
    title: string;
}

const StyledLink = styled(Link)`
    display: flex;
    background-color: var(--tg-theme-bg-color);
    flex-direction: column;
    gap: 20px;
    padding: 19px 18px;
    border-radius: 15px;
    color: white;
    text-decoration: none;
`;
const StyledNameProject = styled.div`
    font-family: Inter;
    font-size: 17px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--tg-theme-text-color);
`;



const Project = (props: Project) => {
    return (
        <StyledLink to="/project-tasks">
            <StyledNameProject>
                {props.title}
            </StyledNameProject>
            <ProgressBar />
        </StyledLink>

    );
}

export default Project;