#!/bin/sh
docker build -t elasticvideoswelove .
docker run -p 80:9200 elasticvideoswelove