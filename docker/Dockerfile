# Pull base image.
FROM dockerfile/elasticsearch

RUN sudo apt-get update
RUN sudo apt-get -y install nodejs

ADD Load.js /videoswelove/
ADD startAndLoadElasticSearch.sh /videoswelove/

CMD sh /videoswelove/startAndLoadElasticSearch.sh