# Windows 环境 MySQL 5.7.44 x64 解压版配置文件 my.ini
<br /><br />

``` ini
[client]
 
	default-character-set = utf8
 
 
[mysqld]
 
	# 指定端口号
	port	=	33057
 
	# 指定用户名
	user 	= 	root
 
	basedir  	=	"D:/software/developer/database/mysql/mysql-5.7.44-x64"

	# 设置数据文件路径
	datadir  	=	"D:/software/developer/database/mysql/mysql-5.7.44-x64/data"
 
	# 临时路径
	tmpdir   	=	"D:/software/developer/database/mysql/mysql-5.7.44-x64/data"
 
	# 网络接口数据存取文件。
	socket   	=	"D:/software/developer/database/mysql/mysql-5.7.44-x64/data/mysql.sock"
 
	# 设置错误日志文件路径
	log-error	=	"D:/software/developer/database/mysql/mysql-5.7.44-x64/data/mysql_error.log"
 
	# 设置服务端的字符集为 utf8mb4
    character-set-server = utf8mb4
	
	# MySQL 5.7 服务端没有此配置。
	#default-character-set = utf8

    # 设置服务端的字符集校对为 utf8mb4_general_ci
    collation-server = utf8mb4_general_ci
 
  
	server_id = 2
 
	max_connections 	= 200
 
	table_open_cache 	= 256
 
	query_cache_size 	= 1M
 
	tmp_table_size 		= 32M
 
	thread_cache_size	= 8

	# 设置默认存储引擎为 InnoDB
	default-storage-engine	= InnoDB
 
	innodb_data_home_dir	=	"D:/software/developer/database/mysql/mysql-5.7.44-x64/data"
 
	innodb_flush_log_at_trx_commit = 1
 
	innodb_log_buffer_size = 128M
 
	# 设置基于内存的存储引擎的缓存大小
	innodb_buffer_pool_size = 128M
 
	innodb_log_file_size = 10M
 
	innodb_thread_concurrency = 16
 
	innodb-autoextend-increment = 1000
 
	join_buffer_size = 128M
 
	sort_buffer_size = 32M
 
	read_rnd_buffer_size = 32M
 
	max_allowed_packet = 32M
 
	explicit_defaults_for_timestamp = true
 
	sql-mode = "STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"
 
	#sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
 
	# 默认使用 mysql_native_password 插件进行权限认证
	default_authentication_plugin = mysql_native_password