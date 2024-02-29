import styled from "styled-components";

const StyledBtn = styled.button`
    width: 343px;
    height: 44px;
    border-radius: 6px;
    color: white;
    background: #708499; 
    border: none;
   
`;

const StyledWrapper = styled.div`
    padding-bottom: 10px;
`;

const TaskBtn = () => {
    return (
        <StyledWrapper>
            <StyledBtn>
                Приступить
            </StyledBtn>
        </StyledWrapper>

    );
}

export default TaskBtn;