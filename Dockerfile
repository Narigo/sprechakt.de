FROM node:18

# Install ImageMagick 7
WORKDIR /tmp
RUN apt-get update -y && apt-get install build-essential
RUN curl https://imagemagick.org/archive/ImageMagick.tar.gz > /tmp/ImageMagick.tar.gz
RUN tar xvzf ImageMagick.tar.gz && cd ImageMagick* && ./configure && make && make install && ldconfig /usr/local/lib

WORKDIR /app
RUN corepack enable
