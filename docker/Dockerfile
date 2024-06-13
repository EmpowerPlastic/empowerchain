FROM ubuntu:latest

RUN apt-get update && apt-get install -y curl git jq lz4 build-essential unzip

ARG version="1.20.5"
ENV PATH="/usr/local/go/bin:${PATH}"
ENV GOPATH="${HOME}/go"

WORKDIR /root

RUN curl -L -# -O "https://golang.org/dl/go${version}.linux-amd64.tar.gz" \
    && rm -rf /usr/local/go \
    && tar -C /usr/local -xzf "go${version}.linux-amd64.tar.gz" \
    && rm "go${version}.linux-amd64.tar.gz"

RUN touch ${HOME}/.bash_profile \
    && echo "export PATH=\$PATH:/usr/local/go/bin:\$HOME/go/bin" >> ${HOME}/.bash_profile \
    && echo "export GOPATH=\$HOME/go" >> ${HOME}/.bash_profile

ENV PATH="${PATH}:${GOPATH}/bin"

RUN . ${HOME}/.bash_profile

RUN rm -rf empowerchain \
    && git clone https://github.com/EmpowerPlastic/empowerchain \
    && cd empowerchain/chain \
    && git checkout v1.0.0-rc3 \
    && make install

COPY empower-setup.sh /root/empower-setup.sh
RUN chmod +x /root/empower-setup.sh
CMD ["/bin/bash", "/root/empower-setup.sh"]
