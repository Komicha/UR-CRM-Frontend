import styled from "styled-components";
import ArrowSVG from "static/svg/arrow.svg";

const StyledBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 44px;
  width: 100%;
  border-radius: 6px;
  color: white;
  background: #708499;
  border: none;
`;

const StyledWrapper = styled.div`
  padding-bottom: 10px;
  width: 100%;
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
};

export default TaskBtn;
