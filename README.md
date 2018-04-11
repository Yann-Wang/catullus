[![NPM](http://nodei.co/npm/catullus.png?downloads=true)](http://nodei.co/npm/catullus/)

[![NPM version](https://img.shields.io/npm/v/catullus.svg)]()


- catullus is a transpiler which can compile the code of javascript with the latest syntax to compatible mode.


### install

```shell
    npm install catullus --save
```

### environment
- the node version which is more than 6.9.0 is supported, the lower node version need to be tested.

### usage
- use it in the package.json as follows.
```json
    "script": {
        "build": "catullus babel src --out-dir lib/"
    }
```
- add .babelrc to the project root directory in which the content is as follows.
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

### why should we use this package ?
- make facility to configure the build environment of the project.


### License
- ISC
