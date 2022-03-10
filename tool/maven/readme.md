# Maven

[Annoying issues with maven](annoying-issues.md)

## Quickstart
To create a basic Java applications:
```
mvn archetype:generate \
  -DarchetypeGroupId=org.apache.maven.archetypes \
  -DarchetypeArtifactId=maven-archetype-quickstart \
  -DarchetypeVersion=1.4
```

## Main manifest
https://stackoverflow.com/questions/9689793/cant-execute-jar-file-no-main-manifest-attribute

## Fat jar
https://stackoverflow.com/questions/574594/how-can-i-create-an-executable-jar-with-dependencies-using-maven

## Skip tests
```
mvn clean install -DskipTests
```
