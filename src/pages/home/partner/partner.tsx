import PartnerCards from '../../../components/partnerCards';
import sama from '../../../images/sama.png';
import prg from '../../../images/prg.svg';
import upe from '../../../images/upe.svg';
import { Title } from '../../../components/title';
import styled from 'styled-components';
export const Container = styled.div`
  width: 1118px;
  background-color: #FFFFFF;
  color: #000;
  height: 831px;
  box-shadow: 0px 4px 10px 0px #0000000D;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: flex-start; 
  padding: 20px 0 0 0;
  margin: 0 auto; 
`;

function Partner() {
  return (
    <Container>
      <Title style={{paddingLeft: '170px'}}>Parceiros</Title>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft:'150px', marginTop: '50px'}}>
        <PartnerCards image={prg} insta="peregrinos.madalena" />
        <PartnerCards image={upe} insta="upegaranhuns" />
        <PartnerCards image={sama} insta="samaritanos.recife" />
      </div>
    </Container>
  );
}
export default Partner;
