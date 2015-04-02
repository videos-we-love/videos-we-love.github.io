#!/bin/sh
wget -O /videoswelove/videos.json http://videoswelove.org/data/videos.json
(sleep 12 ; nodejs /videoswelove/Load.js) &
/elasticsearch/bin/elasticsearch -Des.http.cors.enabled=true