# nginx 1.28.0 配置文件 nginx.conf
<br /><br />

``` conf
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
	accept_mutex off;  # Windows 下可关闭互斥锁
    worker_connections  4096;	# 根据内存调整，通常 1024-4096
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;		# 启用零拷贝传输
	sendfile_max_chunk 512k;      # 每个 sendfile 调用最大传输量
	tcp_nopush on;                # 仅在 sendfile on 时有效，累积数据包后发送

    #keepalive_timeout  0;
    keepalive_timeout  65;
	keepalive_requests 1000;      # 单个连接最大请求数
	
	# 缓冲优化
    output_buffers 4 32k;         # 输出缓冲区
    postpone_output 1460;         # 推迟发送 

    #gzip  on;
	
	# 上游代理配置（如有反向代理需求）
    upstream backend_servers {
        server 127.0.0.1:8004;    # 你的应用服务器地址
        keepalive 32;              # 保持连接池大小
    }
	
	# 配置上游服务
	upstream joyupx_servers {
        #server backend1.example.com weight=3;
        #server backend2.example.com;
        #server backend3.example.com;
		server 127.0.0.1:8060 weight=1;
		#server 127.0.0.1:8070 weight=1;
		server 127.0.0.1:8080 weight=1;
    }

    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
		
		location /proxy/joyupx/single/ {
			proxy_pass http://127.0.0.1:8060/;
		}
		
		location /proxy/joyupx/ {
			proxy_pass http://joyupx_servers/;
			proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		}

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

    server {
            listen 8888 default_server;
            listen [::]:8888 default_server;
            server_name _;
    
            # 关键配置：指定资源目录和默认文件
            root /service/joyupx/cms/client/dist;  # 资源根目录
            index index.html;          # 默认入口文件
        autoindex on;              # 可选：开启目录列表（仅测试环境建议开启）

        location / {
			try_files $uri $uri/ /index.html;
        }

        location ^~ /static {
			alias /service/joyupx/cms/client/dist/assets;
			expires 30d; # 缓存控制，设置缓存过期时间为 30 天。
			try_files $uri $uri/ =404;
			access_log off;        # 关闭日志提升性能
		}

        location ~* \.(jpg|jpeg|png|gif|ico|svg|css|js)$ {
            expires 30d; # 设置图片缓存时间为30天
        }
    }

    server {
        listen 8082 default_server;
        listen [::]:8082 default_server;
        server_name _;

        # 关键配置：指定资源目录和默认文件
        root D:/visualStudioCode-workspace/cms/joyupx-cms-client/dist;  # 资源根目录
        index index.html;          # 默认入口文件
        autoindex on;              # 可选：开启目录列表（仅测试环境建议开启）

        location / {
                try_files $uri $uri/ /index.html;
            }

        location ^~ /static {
            alias D:/visualStudioCode-workspace/cms/joyupx-cms-client/dist/assets;
            expires 30d; # 设置缓存过期时间为30天
            try_files $uri $uri/ =404;
        }


        location ^~ /avatar {
            alias D:/tmp/avatar;
            expires 30d; # 设置缓存过期时间为30天
            try_files $uri $uri/ =404;
        }


        location ^~ /image {
            alias D:/tmp/image;
            expires 30d; # 设置缓存过期时间为30天
            try_files $uri $uri/ =404;
        }

        location ^~ /video {
            alias D:/tmp/video;
            expires 30d; # 设置缓存过期时间为30天
            try_files $uri $uri/ =404;
        }

        location ^~ /cms-server/ {
            proxy_pass http://127.0.0.1:8081/;
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }

        location ~* \.(jpg|jpeg|png|gif|ico|svg|css|js)$ {
            expires 30d; # 设置图片缓存时间为30天
        }
		
		location ^~ /distributed-transaction-demo/ {
            proxy_pass http://127.0.0.1:8004/;
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_http_version 1.1;              # 使用 HTTP/1.1
            proxy_set_header Connection "";      # 清空 Connection 头
			
			# 超时设置
            proxy_connect_timeout 5s;
            proxy_send_timeout 20s;
            proxy_read_timeout 20s;
            
            # 缓冲区设置
            proxy_buffering on;
            proxy_buffer_size 16k;
            proxy_buffers 4 16k;
            
            # 重要：关闭临时文件
            proxy_max_temp_file_size 0;
        }
    }
	
	server {
        listen 11435 default_server;
        listen [::]:11435 default_server;
        server_name _;

        # 关键配置：指定资源目录和默认文件
        index index.html;          # 默认入口文件
        autoindex on;              # 可选：开启目录列表（仅测试环境建议开启）

        location / {
			try_files $uri $uri/ /index.html;
        }
		
		location ~* \.(jpg|jpeg|png|gif|ico|svg|css|js)$ {
            expires 30d; # 设置图片缓存时间为30天
        }

        location ^~ /deepseek-model/ {
            proxy_pass http://127.0.0.1:11434/;
			
			# --- 跨域核心配置开始 ---
			
			# 1. 屏蔽后端可能自带的跨域头，防止与 Nginx 配置冲突导致重复报错
			proxy_hide_header Access-Control-Allow-Origin;
			proxy_hide_header Access-Control-Allow-Methods;
			proxy_hide_header Access-Control-Allow-Headers;
			proxy_hide_header Access-Control-Allow-Credentials;
			
			# 2. 【需替换】指定允许跨域的前端域名（生产环境强烈建议写具体域名，不要用 *）
			add_header 'Access-Control-Allow-Origin' '*' always;
			# 允许携带凭证（如 Cookie、Session），如果不需要携带可去掉此行
			add_header 'Access-Control-Allow-Credentials' 'true' always;
			# 允许的请求方法
			add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
			# 允许的自定义请求头（如 Token、Content-Type 等）
			add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization, X-Requested-With' always;
			# 预检请求缓存时间（减少 OPTIONS 请求次数）
			add_header 'Access-Control-Max-Age' 3600 always;

			# 3. 单独处理 OPTIONS 预检请求（浏览器在发复杂请求前会先发这个试探）
			# 直接返回 204 状态码，不转发给后端，提高性能
			if ($request_method = 'OPTIONS') {
				return 204;
			}
			
			# --- 跨域核心配置结束 ---

			# --- 常规反向代理配置（按需保留） ---
			proxy_set_header Host $host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_set_header X-Forwarded-Proto $scheme;
        }

    }



}
