# Pull base image.
FROM dockerfile/elasticsearch

RUN sudo apt-get update
RUN sudo apt-get -y install nodejs

ADD videos.json /data/
ADD Load.js /data/

CMD ["nodejs", "/data/Load.js"]