# Aplicação Express com TypeScript - Serviço de Disparo de E-mails

Esta aplicação fornece um serviço de disparo de e-mails utilizando Node.js, Express, TypeScript, Nodemailer, Routers, CORS, FS, PATH e Variáveis de Ambiente. O principal objetivo deste projeto é fornecer um exemplo de como configurar um serviço simples de envio de e-mails com autenticação usando o Gmail (ou outros provedores SMTP) e como configurar o servidor para rodar com TypeScript.

## Requisitos

Antes de começar, você precisará de:

- **Node.js** (versão 14 ou superior)
- **pnpm** (gerenciador de pacotes) ou **npm**
- Conta de e-mail com permissão para envio via SMTP (como o Gmail)
- Token de senha de app do seu provedor de e-mail (se estiver usando o Gmail)

## Instalação

1. Instale as dependências::

   ```bash
   pnpm install
   ```

   ou

   ```bash
   npm install
   ```

2. Crie um arquivo .env na raiz do projeto com a variáveis de ambiente:

   ```bash
   PORT=5000

   EMAIL_HOST=smtp_do_provedor
   EMAIL_PORT=465
   EMAIL_SECURE=true
   EMAIL_USER=seu_email
   EMAIL_PASS=token_gerado_no_provedor
   ```

   - PORT: A porta em que o servidor irá rodar.
   - EMAIL_HOST: O servidor SMTP do provedor de e-mail (exemplo: para o Gmail, use smtp.gmail.com).
   - EMAIL_PORT: A porta do servidor SMTP. Para o Gmail, geralmente é 465 para conexão segura.
   - EMAIL_SECURE: Se a conexão será segura (verdadeira para a maioria dos provedores SMTP).
   - EMAIL_USER: O endereço de e-mail usado para autenticação no servidor SMTP.
   - EMAIL_PASS: O token gerado pela conta de e-mail (caso esteja usando o Gmail, será uma "Senha de app").

   Isso configura a porta em que o servidor irá rodar. Você pode alterar o valor de PORT conforme sua necessidade.

3. Gerar Senha de App no Gmail

Se você for usar o Gmail para envio de e-mails, precisará gerar uma Senha de app. Isso é necessário para garantir a segurança da sua conta, especialmente se você tiver a verificação em duas etapas ativada.

- Acesse sua conta do Google em https://myaccount.google.com/.
- Vá até a seção Segurança e procure por Senhas de app.
- Siga as instruções para gerar a senha.

## Execução

    pnpm run dev

ou

    npm run dev

## Criação de Senha do Aplicativo Gmail

- Acesse sua conta do Google:
- Comece visitando a página de gerenciamento da Conta do Google. Você pode fazer isso navegando até https://myaccount.google.com/ .
- Entrar : Entre na Conta do Google associada ao endereço do Gmail que você deseja usar para enviar e-mails programaticamente.
- Segurança : Na barra lateral esquerda, clique em “Segurança”.
- Procure no buscardor por "Senhas de app".

  video de exemplo: https://www.youtube.com/shorts/UqtYrqv3z58

## Testar envio de email

- Rota: http://localhost:5000/test/send-email
- Método: POST
- Body:

```
  {
    "to": "rick.wes1@gmail.com",
    "subject": "Teste Titulo do E-mail",
    "text": "Este é um e-mail de teste enviado pelo Nodemailer!",
    "template": "emailTemplate1"
  }
```

template voce define o template html usado para o email.
