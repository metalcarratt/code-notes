# Rabbit MQ

Start docker:
```
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management
```

## Management api
Get message queue:
```
POST localhost:15672/api/queues/%2F/<queue_name>/get
```
Example:
```
POST localhost:15672/api/queues/%2F/ltfo_transaction_message_queue/get
```

List queues:
```
GET localhost:15672/api/queues
```


## How I got it working

In `application.properties`:
```
spring.rabbitmq.host = 127.0.0.1
spring.rabbitmq.port = 5672
spring.rabbitmq.username = guest
spring.rabbitmq.password = guest
```

In `Route`:
```
from("rabbitmq:ltfo4?queue=queue1&durable=false&autoDelete=false")
                .log("Message ${body}");
```
where `ltfo4` is the name of the exchange and `queue1` is the name of the queue.

This depends on the producer creating an exchange and queue as follows:
```
private final static String EXCHANGE_NAME = "ltfo4";

...

channel.exchangeDeclare(EXCHANGE_NAME, "direct", false, false, null);
channel.queueDeclare("queue1", false, false, false, null);
```

Maven dependencies:
```
<dependencyManagement>
		<dependencies>
			<dependency>
				<groupId>org.apache.camel.springboot</groupId>
				<artifactId>camel-spring-boot-bom</artifactId>
				<version>${camel.version}</version>
				<type>pom</type>
				<scope>import</scope>
			</dependency>
		</dependencies>
	</dependencyManagement>

<properties>
		<camel.version>3.14.1</camel.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>

		<dependency>
			<groupId>org.apache.camel.springboot</groupId>
			<artifactId>camel-spring-boot-starter</artifactId>
		</dependency>

		<dependency>
			<groupId>org.apache.camel</groupId>
			<artifactId>camel-rabbitmq</artifactId>
			<version>${camel.version}</version>
		</dependency>

		<dependency>
			<groupId>org.apache.camel.springboot</groupId>
			<artifactId>camel-rabbitmq-starter</artifactId>
			<version>${camel.version}</version>
		</dependency>
    ```
