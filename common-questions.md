# Common questions

## About Git

### Question: "How to Checkout a File from Another Branch?"

```sh
git checkout <branchname> -- <file-path-and-name>
```

source: https://www.freecodecamp.org/news/git-checkout-file-from-another-branch/

### Question: "How to unstage a file (local add but not commit)?"

```sh
git restore --staged <file>
```

source: https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/git-unstage-file-all-index-commit-folder-add-delete

### Question: "How to remove a local commit, preserving updates?"

```sh
git reset HEAD^
```
