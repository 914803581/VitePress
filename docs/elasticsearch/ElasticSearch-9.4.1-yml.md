# Windows 11 之 ElasticSearch 9.4.1 关键🔑配置⚙️
<br /><br />

找到 ElasticSearch 🔍根目录中的 conf 目录下 elasticsearch.yml 文件📃，然后找到关键🔑配置⚙️➡️【集群名（cluster.name）】、【节点名（node.name）】、【网络🌐主机（network.host）】、【端口号（http.port）】配置。

比如：
```yml
cluster.name: my-eslearn-cluster
node.name: my-eslearn-node
network.host: 127.0.0.1
http.port: 9200