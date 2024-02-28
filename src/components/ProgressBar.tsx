import { useState } from "react";
import styled from "styled-components";
const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
`;

const StyledProgressBar = styled.div`
    display: flex;
    align-items:center;
    width: 268px;
    height: 13px;
    border-radius: 7px;
    border: 1px solid;
    
`;
const StyledProgressBarFill = styled.div`
    border-radius: 10px;
    height:5px;
    width: 100%;
    margin: 2px 2px;
    background-color: #FFFFFF;
    transition: width 0.5 ease-out;
`;
const StyledProgressLabel = styled.div`
    
`;

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);


    return (

        <StyledWrapper>
            <StyledProgressBar>
                <StyledProgressBarFill style={{ width: `${progress}%` }}>

                </StyledProgressBarFill>
            </StyledProgressBar>
            <StyledProgressLabel>
                {progress}
            </StyledProgressLabel>
        </StyledWrapper>


    );
}

export default ProgressBar;