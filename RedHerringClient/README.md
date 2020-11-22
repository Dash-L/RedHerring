# RedHerring Client
The client for RedHerring, run separately from the server   
[original repl](https://repl.it/@DashL/RedHerringClient)

# Running
1. Install [yarn](https://classic.yarnpkg.com/en/docs/install/)
2. Run `yarn` to install all dependencies. This only needs to be run once (right after you pull from this repository).   
    **NOTE:** on windows you may need to run `yarn add react-router-dom` before the project will build **or** you may want to try using `npm` to run the build **instead of** `yarn`.
    1. Install [npm] (https://www.npmjs.com/get-npm)

3. Create a .env file and add the line:
    ```
    REACT_APP_SERVER_URL=/*Your server*/
    ```
    Make sure to replace "Your server" with the url your [RedHerring-server](https://github.com/Dash-L/RedHerring/tree/main/RedHerringServer) is running on.
   
4. Run `yarn start` to start the app (in debug mode, recommended for local use). If you want a release build use `yarn build` (although you will need a little more setup to actually run it)

