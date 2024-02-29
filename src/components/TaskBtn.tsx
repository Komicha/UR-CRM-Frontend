import styled from "styled-components";
import ArrowSVG from "static/svg/arrow.svg";

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
const StyledArrow = styled.div`
    width: 18px;
    height: 18px;

    background-image: url("${ArrowSVG}");
    background-repeat: no-repeat;
    background-size: cover;
`;

const TaskBtn = ({ title }: { title: string }) => {
    return (
        <StyledWrapper>
            <StyledBtn>
                {title}
                <StyledArrow />

            </StyledBtn>
        </StyledWrapper>

    );
}

export default TaskBtn;