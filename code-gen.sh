#!/bin/bash

# Path: code-gen.sh

protoc -I=./ --ts_out=./ src/proto/*.proto
