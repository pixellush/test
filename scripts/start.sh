#!/bin/bash

source /home/ec2-user/.bash_profile

cd /home/ec2-user/app

nohup node index.js > /dev/null 2>&1 &
