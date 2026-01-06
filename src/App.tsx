import React from 'react';
import './App.css';
import styled from 'styled-components';
import cardImage from './assets/images/image.svg';
import { myTheme } from './styles/Theme.Styled';

function App() {
  return (
    <div className="App">
      <StyledBox>
        <StyledCard>
          <StyledImage src={cardImage} alt="Card image" />
          <StyledTitle>Headline</StyledTitle>
          <StyledParagraph>
            Faucibus. Faucibus. Sit sit sapien sit<br></br>tempusrisu ut. Sit
            molestie ornare in venen.
          </StyledParagraph>
          <StyledBoxBtn>
            <StyledBtnInfo>See more</StyledBtnInfo>
            <StyledBtnSave color={"#4E71FE"} backgroundColor={"transparent"}>Save</StyledBtnSave>
          </StyledBoxBtn>
        </StyledCard>
      </StyledBox>
    </div>
  );
}

export default App;

const StyledBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledCard = styled.div`
  font-family: ${myTheme.fonts.family};
  background-color: ${myTheme.colors.colorSecondary};
  padding: 10px 10px 0px;
  width: 300px;
  height: 350px;
  border-radius: 15px;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`
const StyledTitle = styled.h1`
  font-size: ${myTheme.title.fontSize};
  font-weight: ${myTheme.title.fontWeight};
  color: ${myTheme.colors.textPrimary};
  padding: 15px 0 0 10px;
`;

const StyledParagraph = styled.p`
  font-size: ${myTheme.paragraph.fontSize};
  font-weight: ${myTheme.paragraph.fontWeight};
  color: ${myTheme.colors.textSecondary};
  padding: 20px 0 0 10px;
  line-height: 1.66667;
`

const StyledBoxBtn = styled(StyledBox)`
  height: auto;
  justify-content: start;
  gap: 12px;
  padding: 18px 10px;

  button {
    cursor: pointer;
  }
`

const StyledBtnInfo = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${myTheme.colors.colorPrimary};
  color: ${myTheme.colors.colorSecondary};
  font-size: ${myTheme.button.fontSize};;
  font-weight: ${myTheme.button.fontWeight};
  width: 86px;
  height: 30px;
`;

type StyledBtnSavePropsType = {
  color: string;
  backgroundColor: string;
}

const StyledBtnSave = styled(StyledBtnInfo)<StyledBtnSavePropsType>`
  border: 2px solid ${props => props.color};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  `