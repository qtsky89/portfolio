FROM qtsky89/portfolio_base:1.1.0

LABEL maintainer="Wonhee Jang <Qtsky89@gmail.com>"
LABEL description="Dockerfile for portfolio"

ARG BRANCH="master"

# set workdir
WORKDIR /home1/irteam

# copy apache conf file
COPY httpd.conf /home1/irteam/apps/apache/conf/httpd.conf

# git clone
RUN git clone -b ${BRANCH} https://github.com/qtsky89/portfolio /home1/irteam/apps/portfolio
COPY vue.config.local.js /home1/irteam/apps/portfolio/coreui/vue.config.local.js

# build vue
RUN cd /home1/irteam/apps/portfolio/coreui && \
    mv /home1/irteam/work/node_modules . && \
    mv /home1/irteam/work/package-lock.json . && \
    npm run build && \
    mv dist/* /home1/irteam/deploy/portfolio/

RUN chown irteam:irteam -R /home1/irteam/
USER irteam

ENTRYPOINT ["sudo", "/home1/irteam/apps/apache/bin/apachectl"]
CMD ["-k", "start", "-D", "FOREGROUND"]
