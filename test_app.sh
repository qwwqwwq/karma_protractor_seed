#!/bin/bash

# start servers
webdriver-manager start &
node app/server.js &

# run karma JS tests
node_modules/karma/bin/karma start

# run protractor E2E tests
protractor protractor.conf.js

# stop all these servers on exit
trap "kill 0" SIGINT SIGTERM EXIT

