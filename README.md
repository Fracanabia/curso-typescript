# TYPESCRIPT

## INTRODUÇÃO

```bash
npm i -g typescript
```

## BASICO

### MANUAL

```bash
tsc basico.ts
node basico.js
```

#### AUTOMATICO

> plugin code runner

```bash
npm i -g ts-node
```

### BROWSER

```bash
npm init -y
npm i -s live-server
```

```json
{
  "name": "introducao",
  "version": "1.0.0",
  "description": "",
  "main": "basico.js",
  "scripts": {
    "start": "live-server"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "live-server": "^1.2.2"
  }
}
```

```bash
tsc -w
```
