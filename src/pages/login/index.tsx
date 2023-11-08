/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useContext,} from 'react'
import { useNavigate } from 'react-router-dom';
import * as S from './style'
import logo from "../../images/logo.svg"
import { Title } from '../../components/title'
import { Button, Form, Input, InputNumber } from 'antd';
import { AuthContext } from '../../context/AuthContext';

type FieldType = {
  username: string;
  password: string;
};

function Login() {
  const { signIn } = useContext(AuthContext);
  const navigate  = useNavigate();
  const onFinish = async (values: FieldType) => {
    try {
      const credentials: UserCredentials = {
        username: values.username!,
        password: values.password!
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
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600,  marginTop: '70px', alignItems: 'center', justifyContent: 'center'}}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item<FieldType>
                  name="username"
                  rules={[{ required: true, message: 'Insira um CPF ou CNPJ válido.' }]}
                  style={{ marginTop: '10px' }}
                >
                  <InputNumber controls={false} placeholder="CPF ou CNPJ" style={{ width: '267.74px'}}/>
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password placeholder="Senha" style={{ width: '267.74px'}}/>
                </Form.Item>
                  <div style={{color: '#01A7E1', width: '267.74px', justifyContent: 'end', alignItems: 'end', paddingTop: '10px'}}>
                    <a style={{color: '#01A7E1', fontWeight: '450', fontSize: '12px'}}>
                      Esqueceu a senha?
                    </a>
                  </div>

                <Form.Item >
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    style={{ marginTop: '15px', width: '267.74px', height: '40px', borderRadius: '37px', background: '#01A7E1'}}
                  >
                    Entrar
                  </Button>
                </Form.Item>
                <span style={{fontSize:'13px', margin: ' 0 0 0 10vh '}}>Novo aqui? <a onClick={() => navigate('/signup')} style={{color: '#01A7E1'}}>Criar Conta</a></span>
              </Form>
            </S.ImputsForm>
          </S.FormContainer>
        </S.Container>
    </S.LoginPage>
  )
}

export default Login
