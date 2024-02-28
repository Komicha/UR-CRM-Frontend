import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
`;
const StyledProgressBar = styled.div`
    width: 268px;
    height: 14px;
    border-radius: 10px;
    background-color: transporent;
`;
const StyledProgressBarFill = styled.div`
    
`;
const StyledProgressLabel = styled.div`
    
`;

const ProgressBar = () => {
    return (
        <StyledWrapper>
            <StyledProgressBar>
                <StyledProgressBarFill>
                    progress bar
                </StyledProgressBarFill>
            </StyledProgressBar>
            <StyledProgressLabel>
                40%
            </StyledProgressLabel>
        </StyledWrapper>


    );
}

export default ProgressBar;