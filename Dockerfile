FROM teracy/angular-cli

#RUN useradd -ms /bin/bash node

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

ADD package.json /home/node/app/package.json

RUN cd /home/node/app && npm install --production

COPY . /home/node/app

USER root
RUN chown -R node:node .
USER node

RUN ng build --prod --env=prod

EXPOSE 4200
CMD ["ng", "serve","--disableHostCheck"]
