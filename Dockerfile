FROM node:18

# Install ImageMagick 7
WORKDIR /tmp
RUN apt-get update -y && apt-get install build-essential
RUN curl https://imagemagick.org/archive/ImageMagick-7.1.0-49.tar.gz > /tmp/ImageMagick-7.1.0-49.tar.gz
RUN tar xvzf ImageMagick-7.1.0-49.tar.gz && cd ImageMagick-7.1.0-49 && ./configure && make && make install && ldconfig /usr/local/lib

WORKDIR /app
RUN corepack enable
