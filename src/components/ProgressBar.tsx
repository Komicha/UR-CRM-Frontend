import { useState } from "react";
import styled from "styled-components";
const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    align-items: center;
`;

const StyledProgressBar = styled.div`
    display: flex;
    align-items:center;
    width: 268px;
    height: 13px;
    border-radius: 7px;
    border: 1px solid;
    border-color: var(--tg-theme-text-color);
    
`;
const StyledProgressBarFill = styled.div`
    border-radius: 10px;
    height:5px;
    width: 100%;
    margin: 2px 2px;
    background-color: var(--tg-theme-text-color);
    transition: width 0.5 ease-out;
`;
const StyledProgressLabel = styled.div`
    color: var(--tg-theme-text-color);
`;

const ProgressBar = () => {
    const [progress, setProgress] = useState(40);


    return (

        <StyledWrapper>
            <StyledProgressBar>
                <StyledProgressBarFill style={{ width: `${progress}%` }}>

                </StyledProgressBarFill>
            </StyledProgressBar>
            <StyledProgressLabel>
                {progress}%
            </StyledProgressLabel>
        </StyledWrapper>


    );
}

export default ProgressBar;