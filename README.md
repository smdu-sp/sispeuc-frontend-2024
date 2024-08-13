<p align="center">
  <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/licenciamento/" target="blank"><img src="https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/chamadas/URBANISMO_E_LICENCIAMENTO_HORIZONTAL_FUNDO_CLARO_1665756993.png" width="200" alt="SMUL Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Base de desenvolvimento Frontend - SMUL/ATIC</p>

## Descrição

Base de desenvolvimento frontend de SMUL/ATIC:

- NEXT: https://nextjs.org/docs
- MUI/JOYUI: https://mui.com/joy-ui/getting-started/

## Instalação

```bash
npm install
```

## Criando o arquivo .env

```bash
copy example.env .env
```

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copie o código gerado para o campo NEXTAUTH_SECRET no arquivo .env

## Rodando a aplicação

Por padrão, a aplicação rodará na porta 3001.

```bash
# atualiza a cada mudança nos arquivos
npm run dev
```
```bash
# modo de desenvolvimento
npm run start
```
```bash
# modo de produção
npm run prod
```
