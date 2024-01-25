import React, { FC } from 'react';
import { ConfigProvider, Form, Steps } from 'antd';
import { BankFilled, HeartOutlined, UserOutlined } from '@ant-design/icons';
import { useForm } from '../../../hooks/useForm';
import Person from '../Person';
import Professional from '../professional';

interface UserTypeProps {
  onNextStep: (step: number) => void;
}

const UserType: FC<UserTypeProps> = ({ onNextStep }) => {
  const handleClick = (setUserType:number, step: number) => {
    console.log(setUserType)
    onNextStep(step);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <form
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginLeft: '10%',
        }}
      >
        <button
          type="button"
          style={{
            marginTop: '150px',
            marginLeft: '15%',
            marginRight: '50px',
            width: '220px',
            height: '300px',
            borderRadius: '37px',
            background: '#fff',
            border: 'solid 1px #01A7E1',
            color: '#01A7E1',
          }}
          onClick={() => handleClick(1, 1)}
        >
          <UserOutlined style={{ fontSize: '60px', paddingBottom: '10px' }} />
          <h5>Pessoa</h5>
        </button>

        <button
          type="button"
          style={{
            marginTop: '150px',
            marginLeft: '15%',
            marginRight: '50px',
            width: '220px',
            height: '300px',
            borderRadius: '37px',
            background: '#fff',
            border: 'solid 1px #01A7E1',
            color: '#01A7E1',
          }}
          onClick={() => handleClick(2, 2)}
        >
          <BankFilled style={{ fontSize: '60px', paddingBottom: '10px' }} />
          <h5>Instituição</h5>
        </button>

        <button
          type="button"
          style={{
            marginTop: '150px',
            marginLeft: '15%',
            marginRight: '50px',
            width: '220px',
            height: '300px',
            borderRadius: '37px',
            background: '#fff',
            border: 'solid 1px #01A7E1',
            color: '#01A7E1',
          }}
          onClick={() => handleClick(3, 2)}
        >
          <HeartOutlined style={{ fontSize: '60px', paddingBottom: '10px' }} />
          <h5>Organização</h5>
        </button>
      </form>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#01A7E1',
          },
        }}
      >
        <Steps
          style={{ width: '750px', marginLeft: '10%', paddingTop: '20px' }}
          size="small"
          current={0}
          items={[
            {
              title: 'Identificação',
            },
            {
              title: 'Informações',
            },
            {
              title: 'Conclusão',
            },
          ]}
        />
      </ConfigProvider>
    </div>
  );
};

export default UserType;
