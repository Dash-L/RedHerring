@echo off
cd RedHerringServer
call poetry install
start "" poetry run python main.py
cd ../RedHerringClient
call yarn
echo REACT_APP_SERVER_URL=http://127.0.0.1:5000 > .env
start "" yarn start