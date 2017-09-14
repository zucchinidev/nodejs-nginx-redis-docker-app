FROM debian:jessie

MAINTAINER Andrea Zucchini
# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
# Set environment variables
ENV HOME=/home/app

RUN apt-get update

# Install needed deps and clean up after
RUN apt-get install -y -q --no-install-recommends \
    apt-transport-https \
    build-essential \
    ca-certificates \
    curl \
    g++ \
    gcc \
    git \
    make \
    wget \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get -y autoclean

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 8.5.0

# Install nvm with node and npm
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.0/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# Set up our PATH correctly so we don't have to long-reference npm, node, &c.
ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Set the work directory
WORKDIR $HOME

RUN npm install -g nodemon
ADD . ./

RUN useradd --user-group --create-home --shell /bin/false app
RUN chown -R app:app $HOME/*

RUN npm i

USER app

#Expose the port
EXPOSE 3030

CMD ["nodemon", "app.js"]