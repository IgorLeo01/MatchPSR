import React, { FC } from 'react';
import { Button, ConfigProvider, Form, Steps } from 'antd';
import { Link } from 'react-router-dom';
import FormProps from '../../FormProps';
import { BankFilled, HeartOutlined, UserOutlined } from '@ant-design/icons';

const UserType: FC<FormProps> = ({ setForm, formData, navigation }) => {
  const { UserTypeData } = formData;
  const { next } = navigation;

  const handleUserType = (type: string) => {
    setForm({ ...formData, [UserTypeData]: type });
    next();  
  };
  

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Form
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginLeft: '10%'
        }}>
        <Form.Item>
          <Button
            type="primary"
            onClick={() => handleUserType('person')}
            style={{ marginTop: '150px', marginLeft: '15%', marginRight: '50px', width: '220px', height: '300px', borderRadius: '37px', background: '#fff', border: 'solid 1px #01A7E1', color: '#01A7E1' }}
          >
            <UserOutlined style={{fontSize: '60px', paddingBottom: '10px'}}/>
            <h5>Pessoa</h5>
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            onClick={() => handleUserType('instituicao')}
            style={{ marginTop: '150px', marginLeft: '15%', marginRight: '50px', width: '220px', height: '300px', borderRadius: '37px', background: '#fff', border: 'solid 1px #01A7E1', color: '#01A7E1' }}
          >
            <BankFilled style={{fontSize: '60px', paddingBottom: '10px'}}/>
            <h5>Instituição</h5>
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            onClick={() => handleUserType('instituicao')}
            style={{ marginTop: '150px', marginLeft: '15%', marginRight: '50px', width: '220px', height: '300px', borderRadius: '37px', background: '#fff', border: 'solid 1px #01A7E1', color: '#01A7E1' }}
          >
            <HeartOutlined style={{fontSize: '60px', paddingBottom: '10px'}}/>
            <h5>Organização</h5>
          </Button>
        </Form.Item>
      </Form>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: '#01A7E1',
          },
        }}
      >

          <Steps
              style={{width: '750px', marginLeft: '10%', paddingTop: '20px'}}
              size='small'
              current={0}
              items={[
                {
                  title: 'Identificação',
                },
                {
                  title: 'Informações',
                },
                {
                  title: 'Conclusão'
                },
            ]} />
      </ConfigProvider>
    </div>
  );
};

export default UserType;
