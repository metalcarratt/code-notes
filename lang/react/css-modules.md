# CSS Modules

## Using CSS Modules
1. Create a normal css file but re-name it as `*.module.css`
2. Import into a component as an object:
   ```JavaScript
   import styles from './myStyles.module.css';
   ```
3. Reference the class names directly:
   ```Html
   <div className={styles.name} />
   ```
   
## Use multiple class names
Mixing css modules with normal class names:
```Html
<div className={`normalClass ${styles.moduleName}`} />
```

Multiple css module class names:
```Html
<div className={`${styles.class1} ${styles.class2} ${styles2.otherClass}`} />
```

