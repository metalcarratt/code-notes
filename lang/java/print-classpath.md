# Print classpath
Print out the contents of the classpath to the logger:

```Java
private void printClasspath() {
        List<String> filenames = new ArrayList<>();
        logger.info("Classpath resources:");
        try (
                InputStream in = getResourceAsStream(".");
                BufferedReader br = new BufferedReader(new InputStreamReader(in))) {
            String resource;

            while ((resource = br.readLine()) != null) {
                logger.info(" - " + resource);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private InputStream getResourceAsStream(String resource) {
        final InputStream in = getContextClassLoader().getResourceAsStream(resource);
        return in == null ? getClass().getResourceAsStream(resource) : in;
    }

    private ClassLoader getContextClassLoader() {
        return Thread.currentThread().getContextClassLoader();
    }
```
