import styled from "styled-components";
import ArrowSVG from "../static/svg/arrow.svg";

interface Props {
  title: string;
  icon?: string;
  onClick?: any;
}

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
  background: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
  border: none;
`;

const StyledWrapper = styled.div`
  padding-bottom: 10px;
  width: 100%;
`;
const StyledIcon = styled.div<{ icon?: any }>`
  width: 18px;
  height: 18px;

  background-image: url("${(props) => (props.icon ? props.icon : ArrowSVG)}");
  background-repeat: no-repeat;
  background-size: cover;
`;

const TaskBtn = (props: Props) => {
  return (
    <StyledWrapper>
      <StyledBtn onClick={() => props.onClick()}>
        {props.title}
        {props.icon && <StyledIcon />}
      </StyledBtn>
    </StyledWrapper>
  );
};

export default TaskBtn;
