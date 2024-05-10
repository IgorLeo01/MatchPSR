import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    border-radius: 33px;
    background: #FFF;
    box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 0.15);
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 260px;
    height: 360px;
    height: 361px;
    img{
      align-items: center;
      text-align: center;
      justify-content: center;
      margin-top: 40%;
      max-width: 199px;
      max-height: 129px;
      height: 129px;
    }
`;
const CardDiv = styled.div`
  width: 260px;
  height: 360px;
  transition: 500ms;
  margin: 10px;
  :hover{
    width: 270px;
    height: 370px;
    transition: 200ms;
    cursor: pointer;
    border: solid 1px #01a7e0;
    img{
      border: none;
    }
  }
`;

function PartnerCards(props: any) {
  return (
    <CardDiv>
      <Card onClick={() => window.open(`https://www.instagram.com/${props.insta}/`)} >
          <img 
            src={props.image}
          />
      </Card>
    </CardDiv>
  );
}

export default PartnerCards;
