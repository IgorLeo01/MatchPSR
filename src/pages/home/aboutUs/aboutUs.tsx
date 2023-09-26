
import { Title } from '../../../components/title'
import * as s from '../aboutUs/style.ts'
import mensagemMissao from '../../../images/mensagemMissao.svg'
import workPic from '../../../images/workPic.svg'

function AboutUs() {

  return (
    <s.AboutUs >
        <div>
        <Title>Sobre nós</Title>
        <p style={{ fontSize: '14px', width: '268px', color: '#2B4759', paddingTop: '25px'}}>
        Bem-vindo à nossa plataforma dedicada à 
        reintrodução no mercado de trabalho da 
        população em situação de rua que está finalizando
        sua jornada de reabilitação ou pertencente a abrigos
        e casas de acolhimento. Somos uma comunidade 
        comprometida em transformar vidas e proporcionar 
        oportunidades significativas. <br/><br/>
        Nossa missão é simples, mas profundamente impactante: 
        empregar aqueles que desejam reconstruir suas vidas 
        e embarcar em uma jornada de trabalho 
        e autoestima. Acreditamos que cada indivíduo merece uma 
        segunda chance e as ferramentas para prosperar.<br/><br/>
        Trabalhamos em estreita colaboração com empresas parceiras 
        comprometidas com a inclusão e a responsabilidade social. 
        Essas empresas oferecem oportunidades de emprego que não 
        apenas ajudam a construir carreiras, mas também restauram a 
        dignidade e a esperança.
        </p>
        </div>
        <div style={{ marginLeft: '72px'}}>
        <img
        src={workPic}
        alt="quatro fotos de 4 pessoas trabalhando"
        
        />
        <img
        src={mensagemMissao}
        alt="Nossa missão é mudar sua vida e promover uma cultura de inclusão e empatia"
        />
        </div>
    </s.AboutUs>
  )
}

export default AboutUs
