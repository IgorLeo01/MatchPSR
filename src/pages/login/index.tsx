import React, { useContext, useState } from 'react';
import * as S from './style';
import logo from '../../images/logo.svg';
import { Title } from '../../components/title';
import { Button, Form, Input } from 'antd';
import { AuthContext } from '../../context/AuthContext';
import InputMask from 'react-input-mask';
import CreateAccount from '../CreateAccount';
import { Link } from 'react-router-dom';

type FieldType = {
  username: string;
  password: string;
};

function Login() {
  const { signIn } = useContext(AuthContext);
  const [formattedUsername, setFormattedUsername] = useState<string>('');
  const [rawUsername, setRawUsername] = useState<string>(''); 

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRawUsername(e.target.value.replace(/\D/g, '')); 
    console.log('xxx', rawUsername.length);
  };
  const applyMask = (rawValue: string): string => {
    const numericDigits = rawValue.replace(/\D/g, ''); 
    if (numericDigits.length > 11) {
      return numericDigits.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    } else {
      return numericDigits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
  };

  const handleBlur = () => {
    setFormattedUsername(applyMask(rawUsername));
  };

  const onFinish = async (values: FieldType) => {
    try {
      const credentials: UserCredentials = {
        username: rawUsername,
        password: values.password!,
      };
      await signIn(credentials);
      console.log('Login bem-sucedido!');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <S.LoginPage>
        <S.Container>
            <S.loginInformation>
              <img
                src={logo}
                width={140}
                alt="Logomarca"
                style={{ marginLeft: '50px', marginTop: '35px'}}
              />
              <S.Title>Bem-vindo de volta!</S.Title>
              <span style={{color: '#fff', paddingLeft: '50px'}}>Transformando vidas, construindo carreiras!</span>
            </S.loginInformation>
            <S.FormContainer>
              <Title style={{fontSize: '37px', marginTop: '5px'}}>Entre</Title>
              <S.ImputsForm>
                <Form onFinish={onFinish}>
                  <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Insira um CPF ou CNPJ válido.' }]}
                    style={{ marginTop: '10px' }}
                  >
                    <Input
                      name='username'
                      onBlur={handleBlur}
                      onChange={handleUsernameChange}
                      value={formattedUsername}
                      style={{ width: '267.74px'}}
                      />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
                  >
                    <Input.Password placeholder="Senha" style={{ width: '267.74px'}}/>
                  </Form.Item>
                    <div style={{color: '#01A7E1', width: '267.74px', justifyContent: 'end', alignItems: 'end', paddingTop: '10px'}}>
                      <a style={{color: '#01A7E1', fontWeight: '450', fontSize: '12px'}}>
                        Esqueceu a senha?
                      </a>
                    </div>

                    <Form.Item>
                      <Button 
                        type="primary" 
                        htmlType="submit" 
                        style={{ marginTop: '15px', width: '267.74px', height: '40px', borderRadius: '37px', background: '#01A7E1'}}
                      >
                        Entrar
                      </Button>
                    </Form.Item>
                    <h5>Novo aqui? <Link to="/signup">Crie sua conta</Link></h5>
                  </Form>
              </S.ImputsForm>
            </S.FormContainer>
          </S.Container>
    </S.LoginPage>
  );
}

export default Login;
