/* eslint-disable @typescript-eslint/no-unused-vars */
import { ConfigProvider, Input, Steps } from 'antd';
import React, { FC } from 'react';
import { StepProps } from '../../../hooks/StepsProps';
import TextArea from '../../inportForm/TextArea';


const Professional: FC<StepProps> = ({ data, updateFielHandler}) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFielHandler(name, value);
    console.log("FORM ", name, value);
  };

  return (
    <div className="form">
        <TextArea
        name="Habilidades"
        value={data.name} 
        required={true} 
        onChange={handleInputChange}   
        placeHolder='Aqui, você terá a oportunidade de compartilhar e explorar as diversas Habilidades que moldaram a sua vida. '       
        /> 
        <TextArea
        name="Experiência profissional"
        value={data.name} 
        required={true} 
        placeHolder='Aqui, você terá a oportunidade de compartilhar e explorar as diversas vivências que moldaram a sua vida. Este é um espaço aberto e acolhedor, projetado para que você possa expressar-se livremente e refletir sobre as suas experiências mais significativas.'
        onChange={handleInputChange}          
        /> 
        <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#01A7E1',
          },
        }}
      >
        <Steps
          style={{ width: '750px', marginLeft: '10%', paddingTop: '50px', paddingBottom:'50px' }}
          size="small"
          current={2}
          items={[
            {
              title: 'Identificação',
            },
            {
              title: 'Informações Pessoais',
            },
            {
              title: 'Informações Profissionais',
            },
          ]}
        />
      </ConfigProvider>
      </div>
      
    );
};

export default Professional;
