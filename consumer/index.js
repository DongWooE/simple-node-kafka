const consumer = () => {
    const kafka = require('kafka-node');
    const Consumer = kafka.Consumer;
    const Client = kafka.KafkaClient;
    const topic = 'topic2';
  
    const client = new Client({ kafkaHost: 'localhost:9092' });
    const topics = [{topic,partition:0},{topic,partition:1},{topic,partition:2}];
    const options = {fetchMaxWaitMs: 1000, fetchMaxBytes: 1024 * 1024 ,autoCommit : true};
    const consumer = new Consumer(client, topics, options);
  
    consumer.on('message', (message)=>{
      console.log("consumer ::");
      console.log(message);
    })
    consumer.on('error', (error) =>{
      console.log(error);
    })
  };

  consumer();

  module.exports = consumer;
  