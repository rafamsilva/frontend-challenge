# sagah.manager

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Firebase Config

### Follow the below instructions

https://firebase.google.com/docs/cli?hl=pt-br#cli-ci-systems

### Installing docker local machine

```
docker run --name ubuntu1804 -p 9005:9005 -d -t ubuntu:18.04
```

```
docker exec -it ubuntu1804 /bin/bash
```

### Inside docker you should install the following packages

```
apt update
apt install sudo -y
apt install curl -y
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
apt -y install nodejs
npm install -g firebase-tools
```

## Publishing with Firebase Hosting

Follow those instructions to install firebase on your machine. https://firebase.google.com/docs/cli#cli-ci-systems

After you have installed firebase, keep following  the below instructions

```
firebase login:ci
```

Given a url, paste it on a WebBroser and login into your account


```
Waiting for authentication...

✔  Success! Use this token to login on a CI server:

1//0hZMZPdgdZYp_CgYIARAAGBESNwF-L9IrxfttAPVin5-JLVafszIPAF6j8JKByZTQedKFXnGv6f_-SO8Bj2bKGYrTbN-tuLn1a10

Example: firebase deploy --token "$FIREBASE_TOKEN"
```


On Windows
```
SET FIREBASE_TOKEN=1//0hvwdxCCSz5e2CgYIARAAGBESNwF-L9IrwYbgGoRG0QzwLkKlrqXsplJz4EYjpecLHVgn3srIcex6Y_ZtjCbNnnEs0PddOoBYK64
```

On Linux/MacOS
```
export FIREBASE_TOKEN=1//0hvwdxCCSz5e2CgYIARAAGBESNwF-L9IrwYbgGoRG0QzwLkKlrqXsplJz4EYjpecLHVgn3srIcex6Y_ZtjCbNnnEs0PddOoBYK64
```

## Creating project via CLI

go to https://console.firebase.google.com/u/0/project/_/hosting?pli=1 and create your new project


```
firebase init
```


```
direbase deploy -m "COMMENT HERE"
```
