FROM gitpod/workspace-full:latest

USER gitpod

RUN pip3 install pytest pytest-testdox mock && npm i breathecode-cli@1.1.98 -g
