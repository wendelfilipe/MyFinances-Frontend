FROM node:latest as build

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos de dependência do projeto
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia os arquivos do projeto para o diretório de trabalho
COPY . .

# Compila o código React para produção
RUN npm run build

# Estágio de produção
FROM nginx:alpine

# Copia os arquivos compilados do estágio de compilação para o diretório padrão do servidor nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponha a porta 80 para tráfego HTTP
EXPOSE 80

# Comando para iniciar o servidor nginx em execução no segundo plano
CMD ["nginx", "-g", "daemon off;"]