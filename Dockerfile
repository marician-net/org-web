


FROM node:alpine 
RUN apk add git && yarn
ARG pm2_public
ARG pm2_secret
#Install app dependencies
#COPY package.json /
COPY . .
COPY ./.storybook ./
COPY ./public ./
COPY ./scripts ./
COPY ./src ./
COPY ./package*.json ./
COPY ./yarn*.lock ./
COPY ./static.json ./
RUN yarn
COPY . ./
RUN yarn build
RUN true

RUN true
COPY ./tsconfig.json ./
RUN true

EXPOSE 8080
EXPOSE 3000


# Bundle app source
##RUN yarn install --no-bin-links


CMD ["serve", "-s", "build", "-l", "3000"]

CMD ["yarn", "start"]
# #RUN npx hardhat node &
# CMD ["cat /proc/sys/fs/inotify/max_user_watches"] 
# CMD ["pm2-runtime", "start", "ecosystem.config.js"]
