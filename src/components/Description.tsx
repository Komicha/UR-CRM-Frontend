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
                <img src={description} alt="" width="16px" height="16px" />
                Описание:
            </StyledDescriptionTitle>
            Повседневная практика показывает, что дальнейшее развитие различных форм деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что консультация с широким активом позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности позволяет оценить значение модели развития.
        </StyledDescriptionText>

    );
}

export default Description;