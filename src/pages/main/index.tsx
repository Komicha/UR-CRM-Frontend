import styled from "styled-components";
import Account from "../../components/Account";
import Project from "components/Project";

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
`;
const StyledProjects = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;


const Main = () => {
    return (
        <StyledMain>
            <Account />
            <StyledProjects>
                <Project />
                <Project />
                <Project />
            </StyledProjects>
        </StyledMain>
    );
};

export default Main;
