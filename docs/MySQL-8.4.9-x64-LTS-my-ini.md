# Windows 11 之 MySQL-8.4.9-x64-LTS 版配置文件 my.ini

<br /><br />
  
########## MySQL-8.4.9-x64-LTS 版配置开始 ##########

# MySQL 客户端配置
[client]
    # 设置客户端的默认字符集为 utf8mb4
    default-character-set = utf8mb4


# MySQL 服务端（静默模式）配置
[mysqld]

    #skip-grant-tables

    # 设置服务端的字符集为 utf8mb4
    character-set-server = utf8mb4

    # 设置服务端的字符集校对为 utf8mb4_general_ci
    collation-server = utf8mb4_general_ci

    # 设置端口号为 3306，MySQL 默认的端口号就是 3306。
    port = 3306

    # 指定用户名为 root
    user = root

    # 指定 MySQL-8.4.9-x64 服务的基础路径，即其根路径。
    basedir = "D:/software/developer/database/mysql/mysql-8.4.9-x64"

    # 此版本不能显式指定数据目录，会自动创建。
    #datadir  ="D:/software/developer/database/mysql/mysql-8.4.9-x64/data"

    # 此版本不能显式指定临时目录。
    #tmpdir   ="D:/software/developer/database/mysql/mysql-8.4.9-x64/data"

    # 指定 scoket 文件全路径。
    socket = "D:/software/developer/database/mysql/mysql-8.4.9-x64/data/mysql.sock"

    # 指定记录错误信息的日志文件的完整路径。
    log-error = "D:/software/developer/database/mysql/mysql-8.4.9-x64/data/mysql_error.log"

    # 指定默认的存取引擎为 InnoDB。
    default-storage-engine = InnoDB



    server_id = 1

    #skip-locking

    # 设置最大连接数
    max_connections = 200

    # 设置打开的表格可占用的缓存大小。
    table_open_cache = 256

    # 设置临时表的大小
    tmp_table_size = 32M

    # 设置线程占用的缓存大小
    thread_cache_size = 8


    # 设置 InnoDB 引擎的根目录。
    innodb_data_home_dir = "D:/software/developer/database/mysql/mysql-8.4.9-x64/data"

    # 设置 InnoDB 刷盘日志在事务上的提交 SQL 条数
    innodb_flush_log_at_trx_commit = 1

    # 设置 InnoDB 引擎的缓冲池大小。
    innodb_buffer_pool_size = 256M

    # 设置 InnoDB 引擎的日志的缓冲区的大小
    innodb_log_buffer_size = 128M

    # 设置 InnoDB 引擎的日志文件的大小
    innodb_log_file_size = 10M

    # 设置 InnoDB 引擎的线程并发数
    innodb_thread_concurrency = 16

    # 设置 InnoDB 引擎的自动扩展项之自增
    innodb-autoextend-increment = 1000

    # 加入缓冲区的大小
    join_buffer_size = 128M

    # 排序缓冲区的大小
    sort_buffer_size = 32M

    read_rnd_buffer_size = 32M

    # 最大允许的包的大小
    max_allowed_packet = 32M

    # 明确的默认时间戳。
    explicit_defaults_for_timestamp = true

    # 自 8.0 开始不再支持 NO_AUTO_CREATE_USER
    sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO

# innodb_force_recovery= 1


########## MySQL-8.4.9-x64-LTS 版配置结束 ##########