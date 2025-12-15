# AudioDescritor de Imagens

## ► Descrição

Este projeto consiste em um **Descritor de Imagens**, desenvolvido com foco em **acessibilidade**, para auxiliar **pessoas com deficiência visual**. A aplicação permite que o usuário envie uma imagem, a qual é analisada por uma API de inteligência artificial que gera uma descrição textual do conteúdo visual e, em seguida, retorna essa descrição em formato de áudio, possibilitando a compreensão da imagem por meio de som.

## ► Tecnologias Utilizadas 
O sistema utiliza tecnologias de desenvolvimento web e integração com APIs de inteligência artificial e audio para interpretar imagens e reproduzir descrições.

Frontend: 
* JavaScript
* React + vite
* HTML5
* CSS3
  
Backend:
* Node.js
* API de Inteligência Artificial para descrição de imagens (https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstart?hl=pt&usertype=adc#googlegenaisdk_textgen_with_txt-nodejs_genai_sdk)
* API Text-to-Speech para converter a descrição gerada em aúdio (https://docs.cloud.google.com/text-to-speech/docs/create-audio-text-client-libraries?hl=pt_BR#client-libraries-install-nodejs)
---

## ► Integração Frontend e Backend
O frontend da aplicação se comunica com o backend por meio de requisições HTTP.  
O backend é responsável por receber a imagem enviada pelo usuário, processá-la utilizando um serviço de inteligência artificial, gerar a descrição e retornar o resultado para o frontend, que reproduz o aúdio para o usuário.

O código-fonte do backend está disponível em:
https://github.com/iane-clferreira/AudioDescritor_BackEnd.git

## ► Como Executar o Projeto

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/iane-clferreira/audiodescrritor-web.git
```

2. Acesse a pasta do projeto:

```bash
cd audiodescrritor-web
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto:

```bash
npm run dev
```
---

##  Funcionalidades

* Upload de imagens;
* Reprodução automática do áudio com a descrição gerada;
---

##  Observação

Este projeto foi desenvolvido com fins acadêmicos, como parte das atividades avaliativas da disciplina.
