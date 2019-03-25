#!/bin/bash

ssh-add ~/.ssh/github_id_rsa
git subtree push --prefix docs/ origin master