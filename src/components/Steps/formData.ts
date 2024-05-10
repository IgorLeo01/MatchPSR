export const formData = {
  nome: "",
  email: "",
  senha: "",
  nascimento: "",
  contato_info: "",
  cep: "",
  cnh: false,
  cidade: "",
  endereco: "",
  role: "",
  cnpj: "",
  cpf: "",
  numeroFuncionarios: "",
  description: "",
};

export interface IFormData {
  nome: string;
  email: string;
  senha: string;
  nascimento?: string;
  contato_info: string;
  cep: string;
  cnh?: boolean;
  cidade?: string;
  endereco: string;
  role: string;
  cnpj?: string;
  cpf?: string;
  numeroFuncionarios?: string;
  description?: string;
}
