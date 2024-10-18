FROM public.ecr.aws/docker/library/node:20-alpine3.19 AS base

WORKDIR /usr/app
COPY ./ /usr/app


RUN npm i --legacy-peer-deps
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "start"]
