# Annoying maven issues


## Pom missing but it's not
```
The POM for nz.co.flexicards:integration_common:jar:2019.10.2 is missing, no dependency information available
```

In `.m2` delete `_remote.repositories`.

Reference: https://stackoverflow.com/questions/45730541/the-pom-for-is-missing-no-dependency-information-available-even-though-it
