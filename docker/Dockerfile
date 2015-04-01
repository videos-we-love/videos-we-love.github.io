# Pull base image.
FROM dockerfile/elasticsearch

RUN sudo apt-get update
RUN sudo apt-get -y install nodejs

ADD Load.js /data/

CMD /elasticsearch/bin/elasticsearch& | curl http://videoswelove.org/data/videos.json -o /data/videos.json && nodejs /data/Load.js