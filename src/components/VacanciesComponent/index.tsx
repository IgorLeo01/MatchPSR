import React from 'react'
import * as s from './style'
import { NavLink } from 'react-router-dom'
import localImg from '../../images/HomeFilled.svg'
import competenciasImg from '../../images/Group.svg'
import quantidadeImg from '../../images/Group (1).svg'
import { Button } from '../buttons'

interface VacanciesProps {
  vaga: string;
  logo: string;
  empresa: string;
  competencias: string[];
  qntVagas: number;
  local: string;
  vacancyRoute: string;
}

const VacanciesComponent: React.FC<VacanciesProps> = ({ vaga, logo, empresa, local, competencias, qntVagas, vacancyRoute, }) => {
  
  const competenciasList = competencias.join(', ');
  const competenciasToShow = competencias.slice(0, 2);
  const competenciasExtras = competencias.length > 2 ? competencias.length - 2 : 0;

  return (
    <s.Content>
      <div className='cabecalho'>
        <img
          src={logo}
          alt="logo da empresa"
        />
        <div className='cabecalhoInfo'>
          <h1>{vaga}</h1>
          <span>{empresa}</span>
        </div>
      </div>

      <div className='description'>
        <div className='infoDescription'>
          <img
            src={localImg}
            alt="casa"
            style={{ width: '15px', marginRight: '10px' }}
          />
          <span>
            {local}
          </span>
        </div>

        <div className='infoDescription'>
          <img
            src={competenciasImg}
            alt="competencias"
            style={{ width: '15px', marginRight: '10px' }}
          />
          <span>
            Competências: {competencias.length > 2
            ? `${competenciasToShow.join(', ')} e mais ${competenciasExtras}`
            : competenciasList}
          </span>
        </div>

        <div className='infoDescription'>
          <img
            src={quantidadeImg}
            alt="casa"
            style={{ width: '15px', marginRight: '10px' }}
          />
          <span>
            {qntVagas} vagas
          </span>
        </div>
        <div className='descriptionButtons'>
          <NavLink to={`/${vacancyRoute}`}>
            <Button isBlueOutline style={{ width: '100px', fontSize: '12px', height: '25px' }}>Saiba mais</Button>
          </NavLink>
          <NavLink to={`/${vacancyRoute}`}>
          <Button isBlue style={{ width: '100px', marginLeft: '10px', fontSize: '12px', height: '25px' }} >Aplicar</Button>
          </NavLink>
        </div>
      </div>
    </s.Content>
  );
}

export default VacanciesComponent;
