FROM node:14.17.1
WORKDIR /src
RUN npm install -g @vue/cli@3.0.1 @vue/cli-service-global@3.0.1
