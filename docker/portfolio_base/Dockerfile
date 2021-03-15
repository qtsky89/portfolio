FROM centos:7

LABEL maintainer="Wonhee Jang <Qtsky89@gmail.com>"
LABEL description="Dockerfile for portfolio"

# install package, set irteam
USER root
RUN yum -y install https://packages.endpoint.com/rhel/7/os/x86_64/endpoint-repo-1.7-1.x86_64.rpm
RUN curl -sL https://rpm.nodesource.com/setup_10.x | bash -
RUN yum -y install sudo git httpd
RUN yum clean all
RUN mkdir -p /etc/sudoers.d && \
    echo "irteam ALL=(root) NOPASSWD:ALL" > /etc/sudoers.d/irteam && \
    chmod 0440 /etc/sudoers.d/irteam

# httpd install
RUN mkdir -p /home1/irteam/apps && \
    mkdir -p /home1/irteam/deploy/portfolio && \
    mkdir -p /home1/irteam/logs/apache
COPY apache-2.4.46.tar.gz /home1/irteam/apps/
RUN cd /home1/irteam/apps && \
    tar -xzvf apache-2.4.46.tar.gz && \
    rm -f apache-2.4.46.tar.gz && \
    ln -s /home1/irteam/apps/apache-2.4.46 /home1/irteam/apps/apache
