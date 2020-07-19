---
layout: post
title: 'nginx에 phpmyadmin 설정 및 비밀번호 셋팅하기 우분투 20.04'
author: [Woosung]
tags: 
  - Google Cloud
image: img/nginx-phpmyadmin-setting-and-password-config-ubuntu-20-04/phpmyadmin-cover.jpg
date: '2020-06-02T08:29:14.000Z'
excerpt: phpmyadmin은 DB를 관리하기 매우 편합니다. 우분투 20.04에서 패키지로 제공하기 때문에 쉽게 설치할 수 있습니다.
draft: false
---

Database 관리할 수 있는 강력한 툴인 phpmyadmin을 설치하는 방법에 대해 알려드리겠습니다.

기본적으로 홈페이지에 가서 소스 받아서 풀어도 되지만, 관리의 편리함을 위해서 패키지를 설치하는 방법에 대해 알려드리겠습니다.

---

## phpmyadmin 패키지 설치하기

    sudo apt update && sudo apt install phpmyadmin
    

위 명령어로 패키지 리스트를 업데이트하고, phpmyadmin 패키지를 설치합니다.

아마 엄청나게 많은 패키지가 설치될건데요. y 엔터를 눌러서 다 설치합니다.

![](img/nginx-phpmyadmin-setting-and-password-config-ubuntu-20-04/01-confing.png)

위와 같이 핑크색 바탕의 내용이 나오는데 우리가 사용하는 nginx는 없습니다.

탭을 누르고 엔터를 누릅니다.

![](img/nginx-phpmyadmin-setting-and-password-config-ubuntu-20-04/02-config-db.png)

위와 같이 dbconfig-common으로 db를 설정하겠냐고 물어보는데 yes에 엔터를 누릅니다.

![](img/nginx-phpmyadmin-setting-and-password-config-ubuntu-20-04/03-passwd.png)

위 화면은 phpmyadmin이 내부의 DB서버와 소통하는데 필요한 비번을 설정하는 화면입니다.

엔터를 누르면 랜덤으로 생성이 되고, 원하는 비번이 있다면 넣고 OK에 엔터를 누르면 됩니다.

설치가 끝났습니다.

---

## 경로 설정하기

/usr/share/phpmyadmin  이 경로에 보시면 설치가 잘 되어있는 것을 확인할 수 있습니다.

이제 nginx에서 해당 폴더를 가리키게 만들어줘야 합니다.

그누보드가 설치가 되었다면 그누보드 root 경로를 보고 거기에 붙여주면 될 것입니다.

ghost의 경우도 nginx-root에 붙여주면 될 것입니다.

예를들어 그누보드 루트가 /var/www/gnuboard라면 바로 밑에 pma라는 경로로 붙일 것입니다.

pma 대신에 아무거나 넣어도 상관없습니다. 참고로 phpmyadmin은 사용하지 마세요. 해커들이 좋아해요.

    sudo ln -s /usr/share/phpmyadmin /var/www/gnuboard/pma
    

이제 웹 브라우저에서 자신의 홈페이지 주소에서 /pma를 붙이면 바로 접속될 것입니다.

![](img/nginx-phpmyadmin-setting-and-password-config-ubuntu-20-04/04-pma.png)

위와 같이 뜨면 성공입니다.

이제 MariaDB에서 생성했던 gnuuser 라는 DB의 유저로 접속해봅니다.

![](img/nginx-phpmyadmin-setting-and-password-config-ubuntu-20-04/05-login-gnuuser.png)

위와 같이 뜨면 성공입니다.

이제 해당 권한이 있는 DB에서 수정은 편하게 할 수 있습니다.

---

## root 권한으로 접속하기

그런데 root 계정으로 로그인을 해야 DB 생성 및 삭제를 더 편하게 할 수 있습니다.

![](img/nginx-phpmyadmin-setting-and-password-config-ubuntu-20-04/06-login-fail-root.png)

하지만 위와 같이 현재 셋팅으로는 root 계정으로 로그인을 할 수 없습니다.

MariaDB에서 root 계정을 대신할 계정을 생성하여 작동하게 만듭니다.

    mysql -uroot -p
    

위 명령어로 MariaDB로 접속합니다.

    CREATE USER 'pmauser'@'%' IDENTIFIED BY 'yourpassword';
    

yourpasswd를 꼭 수정하세요.

root를 대신할 pmauser를 생성합니다.

    GRANT ALL PRIVILEGES ON *.* TO 'pmauser'@'%' WITH GRANT OPTION;
    

위 명령어로 pmauser에게 root 권한을 줍니다.

---

다시 phpmyadmin 로그인 페이지로 가서 pmauser로 로그인 해봅니다.

![](img/nginx-phpmyadmin-setting-and-password-config-ubuntu-20-04/07-pmauser-login.png)

위와 같이 DB 생성 및 삭제 권한이 있으면 성공입니다.

---

## phpmyadmin 경로에 비번 걸기

이런 강력한 기능을 가진 phpmyadmin을 아무나 로그인하고, 접속하면 안되겠죠?

그래서 비번을 걸어줄 것입니다.

    sudo apt install apache2-utils
    

위 명령어로 아파치 유틸을 설치합니다.

    sudo htpasswd -c /etc/nginx/.htpasswd yourid
    

yourid 부분을 원하는 아이디로 바꿔서 넣으세요.

그러면 새로운 비번을 생성할 수 있습니다.

원하는 비번을 두번 넣습니다. 비번은 표시되지 않으니 당황하지 마세요.

    sudo htpasswd -c /etc/nginx/.htpasswd yourid
    New password:
    Re-type new password:
    Adding password for user yourid
    

위와 같이 나온다면 성공입니다.

이제 nginx 설정파일에 가서 해당 경로에게 비번 설정을 합니다.

    sudo nano /etc/nginx/sites-available/gnuboard
    

그누보드 기준으로 위 명령어로 nginx 서버 설정에 들어갑니다.

    location /pma {
    auth_basic "Restricted Access";
    auth_basic_user_file /etc/nginx/.htpasswd;
            }
    

위와 같은 내용을 server{ } 사이에 적절하게 넣습니다.

우리는 https를 사용하기 때문에 listen 80이 있는 server{} 가 아닌 listen 443이 있는 곳에 넣어야 됩니다.

컨트롤 + O, 엔터, 컨트롤 + X로 저장 후 빠져나옵니다.

    sudo nginx -t
    

위 명령어로 nginx 테스트를 해봅니다.

    nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
    nginx: configuration file /etc/nginx/nginx.conf test is successful
    

위와 같은 내용이 나오면 이상없는 것입니다.

    sudo service nginx reload
    

위 명령어로 재시작합니다.

이제 다시 웹 브라우저에서 홈페이지 주소에서 /pma를 붙이면

![](img/nginx-phpmyadmin-setting-and-password-config-ubuntu-20-04/08-auth-ok.png)

위와 같이 암호를 요구하는 페이지가 나옵니다.

따라하기만 해도 잘 되죠 ^^ 감사합니다.

---

참조링크


Installing phpMyAdmin for Nginx on Ubuntu 18.04 / 19.10 | DevAnswers.co

<a href="https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-18-04" target="_blank" rel="noopener noreferrer">https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-18-04</a>

---

우분투 18.04 에 Nginx phpMyAdmin 설치하기 Installing phpMyAdmin for Nginx on Ubuntu 18.04

<a href="https://antilibrary.org/1901" target="_blank" rel="noopener noreferrer">https://antilibrary.org/1901</a>