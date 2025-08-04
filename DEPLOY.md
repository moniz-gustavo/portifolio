# 🚀 Guia de Deploy no GitHub Pages

Este guia te ajudará a fazer o deploy da landing page no GitHub Pages passo a passo.

## 📋 Pré-requisitos

- Conta no GitHub
- Git instalado no seu computador
- Node.js e npm/pnpm instalados

## 🔧 Passo a Passo

### 1. Criar Repositório no GitHub

1. Acesse [GitHub.com](https://github.com) e faça login
2. Clique em "New repository" (Novo repositório)
3. Nome do repositório: `gustavo-qa-landing` (ou o nome que preferir)
4. Marque como **Público** (necessário para GitHub Pages gratuito)
5. **NÃO** marque "Add a README file"
6. Clique em "Create repository"

### 2. Configurar o Projeto Localmente

1. **Baixe o projeto** que foi criado
2. **Abra o terminal** na pasta do projeto
3. **Inicialize o Git**:
```bash
git init
```

4. **Adicione o repositório remoto** (substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub):
```bash
git remote add origin https://github.com/SEU-USUARIO/gustavo-qa-landing.git
```

### 3. Fazer o Primeiro Commit

```bash
# Adicionar todos os arquivos
git add .

# Fazer o commit
git commit -m "Initial commit: Landing page Gustavo Nóbrega QA"

# Enviar para o GitHub
git push -u origin main
```

### 4. Configurar GitHub Pages

1. **Acesse seu repositório** no GitHub
2. Vá em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em "Source", selecione **"Deploy from a branch"**
5. Em "Branch", selecione **"gh-pages"**
6. Clique em **Save**

### 5. Fazer o Deploy

No terminal, execute:

```bash
# Instalar dependências (se ainda não fez)
npm install

# Fazer o deploy
npm run deploy
```

### 6. Acessar sua Landing Page

Após alguns minutos, sua landing page estará disponível em:
```
https://SEU-USUARIO.github.io/gustavo-qa-landing/
```

## 🔄 Atualizações Futuras

Para atualizar a landing page:

1. **Faça as alterações** no código
2. **Commit e push** para o repositório:
```bash
git add .
git commit -m "Descrição das alterações"
git push
```

3. **Faça o deploy novamente**:
```bash
npm run deploy
```

## ⚠️ Problemas Comuns

### Página não carrega
- Verifique se o repositório é público
- Aguarde alguns minutos após o deploy
- Verifique se a branch `gh-pages` foi criada

### Erro 404
- Confirme se o nome do repositório está correto no `vite.config.js`
- Verifique se a configuração `base` está correta

### Estilos não carregam
- Certifique-se de que o `base` no `vite.config.js` corresponde ao nome do repositório

## 🛠️ Configurações Importantes

### vite.config.js
```javascript
export default defineConfig({
  // ... outras configurações
  base: '/gustavo-qa-landing/', // Nome do seu repositório
})
```

### package.json
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

## 📞 Suporte

Se encontrar problemas:

1. Verifique a documentação do [GitHub Pages](https://docs.github.com/en/pages)
2. Consulte a documentação do [Vite](https://vitejs.dev/guide/static-deploy.html#github-pages)
3. Entre em contato para suporte técnico

---

✅ **Pronto!** Sua landing page profissional estará online e acessível para o mundo todo!

