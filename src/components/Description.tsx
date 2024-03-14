import styled from "styled-components";
import description from "../static/img/description.png"
const StyledDescriptionText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    text-align: left;
    color: var(--tg-theme-text-color);
    
    padding: 14px;
    background-color: var(--tg-theme-bg-color);
    border-radius: 6px;
`;
const StyledDescriptionTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    font-size: 11px;
    font-weight: 600;
    text-align: left;
    color: var(--tg-theme-text-color);

`;
const Description = () => {
    return (
        <StyledDescriptionText>
            <StyledDescriptionTitle>
                <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.4800000000000001"></g><g id="SVGRepo_iconCarrier"> <path d="M3 7H21" stroke="var(--tg-theme-text-color)" stroke-width="1.5" stroke-linecap="round"></path> <path d="M3 12H21" stroke="var(--tg-theme-text-color)" stroke-width="1.5" stroke-linecap="round"></path> <path d="M3 17H21" stroke="var(--tg-theme-text-color)" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                Описание:
            </StyledDescriptionTitle>
            Повседневная практика показывает, что дальнейшее развитие различных форм деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что консультация с широким активом позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности позволяет оценить значение модели развития.
        </StyledDescriptionText>

    );
}

export default Description;