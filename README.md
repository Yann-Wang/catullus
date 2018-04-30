
- catullus is a transpiler which can compile the code of javascript with the latest syntax to compatible mode.


### install

```shell
    yarn add catullus --dev
```

```shell
    npm install catullus --save-dev
```


### usage
- use it in the package.json as follows.

```json
    "script": {
        "build": "catullus babel src --out-dir lib/"
    }
```

- add .babelrc to the project root directory in which the content is as follows.

- for node package, write like this.

```json
    {
        "presets": [
            [
                "env",
                {
                    "targets": {
                        "node": "6.9"
                    }
                }
            ]
        ],
        "plugins": [
            "transform-object-rest-spread",
            "transform-decorators-legacy",
            "add-module-exports"
        ],
        "env": {
            "development": {
                "sourceMaps": "inline"
            }
        }
    }
```

- for react package, write like this.
- (Attention: this tool doesn't support compile the file of which the extension is not .js)
- if you need import .css, .jpg, .png, .svg and some other file, please use webpack.

```json
    {
        "presets": [
            [
                "env",
                {
                    "targets": {
                    "browsers": [
                        "> 1%",
                        "last 2 versions"
                    ]
                    }
                }
            ],
            "react",
            "stage-2"
        ],
        "plugins": [
            "transform-object-rest-spread",
            "transform-decorators-legacy",
            "add-module-exports"
        ],
        "env": {
            "development": {
                "sourceMaps": "inline"
            }
        }
    }
```

### why should we use this package ?
- make facility to configure the build environment of the project.

### Contributing
- install dependencies and devDependencies

```shell
    yarn install --production=false
```

- compile

```shell
    yarn run build
```

- publish

```shell
    yarn publish
```

### License
- ISC
