# ❗️️b❗️a❗️m❗️

[![Greenkeeper badge](https://badges.greenkeeper.io/jongacnik/bam.svg)](https://greenkeeper.io/)

Starter kit.

**Never finished...**

## Featuring

- [byo](https://github.com/jongacnik/byo) + [preact](https://github.com/developit/preact)
- [gr8](https://github.com/jongacnik/gr8) + [ress](https://github.com/filipelinhares/ress)
- [git-ftp](https://github.com/git-ftp/git-ftp) deploy
- scaffolding

## Notes

I like to keep it basic. It's easy to swap out the renderers in byo or to swap it out entirely with [choo](https://github.com/yoshuawuyts/choo), as projects require.

### Scripts

```bash
# start dev
npm start

# build dist
npm run build

# deploy
npm run deploy
```

### Deploy

I use [git-ftp](https://github.com/git-ftp/git-ftp) for deploy. A config file is expected specifying some values:

```bash
USERNAME=username
PASSWORD=password
SERVER=ftp://127.0.0.1/some_location
```

### Alias

I create a bash alias for cloning this repo:

```bash
# in .bash_profile
alias bam='git clone https://github.com/jongacnik/bam'
```

usage:

```bash
bam project-name
```

## Todo

- [ ] Force bundle refresh on `design.js` update
- [ ] Server render
