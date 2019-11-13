1. Install typescript globally with `sudo npm i -g typescript`
2. You can verify that it is properly installed with `tsc --version`
3. Compile your typescript file with `tsc app.ts`
    1. Optionally, you can set typescript to watch the file with `tsc app.ts -w`
4. Create a config file automatically with `tsc --init`
    1. This will create a json file with several options
        1. For example, by default the target is es5 and you can change that with the `target` json option
        2. Set the `outputDir` value to `./dist`
        3. Set the `rootDir` value to `./src`
        4. Set the `moduleResolution` value to `node`
    2. With this tsconfig.json file, you can now just type `tsc`
5. Init package.json with `npm init -y`
6. Install express with `npm i express`
7. Install dev dependencies with `npm i -D typescript ts-node nodemon @types/node @types/express`