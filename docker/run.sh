#!/bin/sh
cd /data
curl -v -H "Cache-Control: no-cache" -X GET http://videoswelove.org/data/videos.json -o /videoswelove/videos.json 
(sleep 12 ; nodejs /videoswelove/Load.js) &
/elasticsearch/bin/elasticsearch