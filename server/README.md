# RedHerring Server
The server for the RedHerring project, run separately from the client   
[original repl](https://repl.it/@DashL/RedHerringServer)

## Running
1. Install [poetry](https://github.com/python-poetry/poetry)
2. Run `poetry build`
3. Run the server with `python main.py`   
by default this puts the server on `0.0.0.0:5000` meaning port 5000 must be exposed to access the server externally.   
If you run the server somewhere other than the original repl, you will have to set an environment variable when running the client, see the README.md for the client for info.
