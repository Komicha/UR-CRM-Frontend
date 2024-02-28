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
    border-radius: 7px;
    border: 1px solid;
    background-color: transporent;
`;
const StyledProgressBarFill = styled.div`
    border-radius: 10px;
    height:5px;
    width: 100%;
    margin: 2px 2px;
    background-color: #FFFFFF;
`;
const StyledProgressLabel = styled.div`
    
`;

const ProgressBar = () => {
    return (

        <StyledWrapper>
            <StyledProgressBar>
                <StyledProgressBarFill>

                </StyledProgressBarFill>
            </StyledProgressBar>
            <StyledProgressLabel>
                40%
            </StyledProgressLabel>
        </StyledWrapper>


    );
}

export default ProgressBar;