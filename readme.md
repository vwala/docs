# Search

```
export ALGOLIA=true 
export ALGOLIA_ADMIN_KEY=
yarn build
```

# Update meta
```
cd utils && node content-generator.js && cd ..
```

# Release
```
yarn deploy
```

# Commit changes & release  
```
yarn deploy && git add . && git commit -m "fixes" && git push
```

# Useful links
- https://github.com/svg/svgo/issues/622
- Add ignore rule to yarnclean !svgo/.svgo.yml
