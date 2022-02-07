# Rabbit MQ

Start docker:
```
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management
```

## Management api
Get message queue:
```
localhost:15672/api/queues/%2F/<queue_name>/get
```
Example:
```
localhost:15672/api/queues/%2F/ltfo_transaction_message_queue/get
```
