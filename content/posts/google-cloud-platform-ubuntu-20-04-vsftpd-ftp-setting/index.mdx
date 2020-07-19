---
layout: post
title: '구글 클라우드 우분투 20.04에서 vsftpd로 FTP 접속하는 방법'
author: [Woosung]
tags: 
  - Google Cloud
image: img/google-cloud-platform-ubuntu-20-04-vsftpd-ftp-setting/vsftpd-cover.jpg
date: '2020-06-02T17:53:31.000Z'
excerpt: 우분투 20.04에서 vsftpd 패키지를 설치하고 기본 셋팅을 합니다. 그 후 서버와 구글 클라우드 방화벽 셋팅을 하고, 파일질라에 접속하여 파일을 전송합니다.
draft: false
---

## FTP를 사용해야 하는 이유

대용량 파일을 서버로 업로드하기 위해서는 FTP를 쓰는 것이 제일 쉽고 빠릅니다.

구글 클라우드 플랫폼에서 root SSH키 생성 후 WINSCP SFTP 접속하기

<a href="https://blog.wsgvet.com/google-cloud-platform-root-ssh-winscp-setting" target="_blank" rel="noopener noreferrer">https://blog.wsgvet.com/google-cloud-platform-root-ssh-winscp-setting</a>

지난번에 소개해드렸던 SFTP의 경우 root 계정으로 어느 위치든 편하게 이동할 수 있는 장점이 있지만

보안접속 특성상 CPU를 엄청나게 먹습니다. 그리고 속도도 2~3MB/s 정도 밖에 나오지 않습니다.

그래서 우분투 20.04에 vsftpd를 설치하고 파일을 이동하는 방법에 대해 설명드리겠습니다.

---

## FTP 유저 생성 - 1 (단순 생성)

1번 방법은 단순히 /home/ftpuser 디렉토리에만 파일을 업로드 및 수정할 수 있게하는 셋팅입니다.

웹서버의 루트에 직접 파일을 업로드 및 수정하려면 **FTP 유저 생성-2** 로 가세요!

    sudo adduser ftpuser
    

위 명령어로 ftpuser 라는 계정을 생성합니다.

    ~# sudo adduser ftpuser
    Adding user `ftpuser' ...
    Adding new group `ftpuser' (1004) ...
    Adding new user `ftpuser' (1003) with group `ftpuser' ...
    Creating home directory `/home/ftpuser' ...
    Copying files from `/etc/skel' ...
    New password:
    Retype new password:
    passwd: password updated successfully
    Changing the user information for ftpuser
    Enter the new value, or press ENTER for the default
            Full Name []:
            Room Number []:
            Work Phone []:
            Home Phone []:
            Other []:
    Is the information correct? [Y/n] y
    ~#
    

위와 같이 생성 후 비번을 지정하고, 밑에 물어보는게 있는데 그냥 엔터 막 누르면 됩니다. 마지막에 y엔터 해주시구요.

home directory `/home/ftpuser'  이 의미는 ftpuser가 로그인하게 되면 home 디렉토리가 그렇다는 뜻입니다. 권한도 여기 밖에 없어서 이곳으로 파일을 전송한 후 root 권한이 있는 계정으로 원하는 폴더로 옮긴 후 unzip을 이용하면 빠르겠죠? ^^

---

## FTP 유저 생성 - 2 (홈페이지 폴더에 직접 업로드 및 삭제 수정하기)

1번 방법으로는 단순하게 업로드 후 root 계정으로 SSH접속해서 일일이 이동 후 압축 해제 및 권한 설정으로 매우 복잡합니다. 그래서 ftp유저에게 직접 파일을 수정하는 권한을 주면 문제가 없겠죠? ^^

FTP서버의 루트를 /var/www/gnuboard 로 잡을 것입니다.

해당 경로를 자신에게 맞게 수정하세요!!

    sudo useradd ftpwww -g www-data
    

ftpwww라는 계정을 www-data그룹에 속하도록 하면서 유저를 생성합니다.

    sudo passwd ftpwww
    

ftpwww 계정의 비번을 생성합니다. FTP클라이언트에서 접속할 때 필요한 비번입니다.

    sudo usermod -d /var/www/gnuboard ftpwww
    

ftpwww의 홈 디렉토리를 /var/www/gnuboard 로 잡습니다.

    sudo chown -R www-data:www-data /var/www/gnuboard
    

/var/www/gnuboard 디렉토리와 그 이하 파일 및 폴더의 소유권을  www-data그룹의 www-data에게  줍니다.

    sudo chmod -R 775 /var/www/gnuboard
    

775로 잡은 이유는 ftpuser2가 www-data그룹 소속이기 때문에 쓰기를 할 수 있게 하기 위함입니다.

이제 기본 설정은 끝났습니다. vsftpd 설정에도 약간의 차이가 있으니 참고하세요!

---

## vsftpd 설치

    sudo apt install vsftpd
    

위 명령어로 잘 설치될 것입니다.

    sudo mv /etc/vsftpd.conf /etc/vsftpd.conf_orig
    

위 명령어로 기존 vsftpd 설정을 백업합니다.

    sudo nano /etc/vsftpd.conf
    

위 명령어로 설정파일을 새로 생성할 것입니다.

"FTP 유저 생성 - 1 번의 경우"

    listen=NO
    listen_ipv6=YES
    anonymous_enable=NO
    local_enable=YES
    write_enable=YES
    local_umask=022
    dirmessage_enable=YES
    use_localtime=YES
    xferlog_enable=YES
    connect_from_port_20=YES
    chroot_local_user=YES
    secure_chroot_dir=/var/run/vsftpd/empty
    pam_service_name=vsftpd
    rsa_cert_file=/etc/ssl/certs/ssl-cert-snakeoil.pem
    rsa_private_key_file=/etc/ssl/private/ssl-cert-snakeoil.key
    ssl_enable=NO
    pasv_enable=Yes
    pasv_min_port=10000
    pasv_max_port=10100
    allow_writeable_chroot=YES
    

위 내용을 복사해서 붙여넣기 합니다. (FTP 유저 생성 - 1 번의 경우 위와 같이 하면 됩니다.)

---

FTP 유저 생성 - 2의 경우 약간 다릅니다.

    listen=NO
    listen_ipv6=YES
    anonymous_enable=NO
    local_enable=YES
    write_enable=YES
    local_umask=002
    file_open_mode=0777
    dirmessage_enable=YES
    use_localtime=YES
    xferlog_enable=YES
    connect_from_port_20=YES
    chroot_local_user=YES
    secure_chroot_dir=/var/run/vsftpd/empty
    pam_service_name=vsftpd
    rsa_cert_file=/etc/ssl/certs/ssl-cert-snakeoil.pem
    rsa_private_key_file=/etc/ssl/private/ssl-cert-snakeoil.key
    ssl_enable=NO
    pasv_enable=Yes
    pasv_min_port=10000
    pasv_max_port=10100
    allow_writeable_chroot=YES
    

위와 같이 넣습니다.

    local_umask=002
    file_open_mode=0777
    

위 설정에 의해서 ftpwww가 업로드한 파일과 폴더의 권한이 775로 맞춰집니다.

그누보드의 경우

웹루트에 있는 config.php에서 166번째 줄에 보면

    // 퍼미션
    define('G5_DIR_PERMISSION',  0755); // 디렉토리 생성시 퍼미션define('G5_FILE_PERMISSION', 0644); // 파일 생성시 퍼미션
    

위와 같은 내용이 나옵니다.

즉 www-data에 의해 파일이나 폴더가 업로드 되면 주어지는 퍼미션에 대한 옵션인데요.

    // 퍼미션
    define('G5_DIR_PERMISSION',  0775); // 디렉토리 생성시 퍼미션define('G5_FILE_PERMISSION', 0664); // 파일 생성시 퍼미션
    

www-data 그룹에 있는 ftpwww도 수정할 수 있게 바꿔야 정상적으로 삭제도 되겠죠? ^^

---

컨트롤 + O, 엔터, 컨트롤 + X 로 저장 후 빠져나옵니다.

    sudo systemctl restart vsftpd && sudo systemctl enable vsftpd
    

위 명령어로 vsftpd의 설정을 적용하고 재부팅시 시작하도록 합니다.

---

## ufw 방화벽 설정하기

우분투 20.04 자체 방화벽인 ufw에서 방화벽을 엽니다.

    sudo ufw allow from any to any port 20,21,10000:10100 proto tcp
    

위와 같이 방화벽 셋팅을 완료합니다.

이제 구글 클라우드 플랫폼에서도 열어줘야 합니다.

---

## 구글 클라우드 플랫폼 방화벽 열어주기

![](img/google-cloud-platform-ubuntu-20-04-vsftpd-ftp-setting/01-open-google-cloud.png)

구글 클라우드 플랫폼에 접속 -> VPC 네트워크 -> 방화벽을 클릭합니다.

![](img/google-cloud-platform-ubuntu-20-04-vsftpd-ftp-setting/02-make-firewall.png)

위와 같이 + 방화벽 규칙 만들기를 클릭합니다.

![](img/google-cloud-platform-ubuntu-20-04-vsftpd-ftp-setting/03-firewall-set.png)

빨간색 박스에 있는 내용을 다 넣습니다.

특히 tcp에 20,21,10000-10100  을 넣어줍니다. 그리고 저장을 누릅니다.

![](img/google-cloud-platform-ubuntu-20-04-vsftpd-ftp-setting/04-compute-engine-vm.png)

Compute Engine의 VM 인스턴스를 누릅니다.

![](img/google-cloud-platform-ubuntu-20-04-vsftpd-ftp-setting/05-select-vm.png)

자신의 서버를 누릅니다.

![](img/google-cloud-platform-ubuntu-20-04-vsftpd-ftp-setting/06-modify.png)

위와 같이 수정을 누릅니다.

![](img/google-cloud-platform-ubuntu-20-04-vsftpd-ftp-setting/07-network-tag-add.png)

네트워크 태그에 ftpd 를 넣습니다.

제일 밑에 저장을 누릅니다.

이제 서버 셋팅은 끝났습니다.

---

## filezilla 설치 후 접속하기


<a href="https://filezilla-project.org/download.php?type=client" target="_blank" rel="noopener noreferrer">https://filezilla-project.org/download.php?type=client</a>

위 링크로 가서 filezilla client 를 다운 받습니다.

설치하면

![](img/google-cloud-platform-ubuntu-20-04-vsftpd-ftp-setting/09-filezilla.png)

위와 같은 화면이 나오는데 왼쪽위에 아이콘을 누른 후 스샷에 있는대로 정보를 넣습니다.

호스트에는 외부IP 주소나 홈페이지주소를 넣으면 됩니다.

포트는 안넣어도 알아서 21로 잡아주니깐 안넣을거구요.

암호화도 그냥 있는거 쓰면 됩니다.

사용자에는 아까 생성한 ftpuser를 넣구요.

비밀번호도 아까 만들었던 그 비번을 넣으면 됩니다.

그리고 연결을 누릅니다.

![](img/google-cloud-platform-ubuntu-20-04-vsftpd-ftp-setting/10-filezilla-success.png)

드디어 연결이 성공했습니다.

왼쪽 부분이 내 컴퓨터 부분이고 오른쪽이 서버 쪽 공간입니다.

참고로 서버 쪽 공간은 /home/ftpuser 디렉토리입니다.

업로드를 해보면 100Mbps 기준 회선에서 풀속도가 나옵니다. 11.2MB/s 까지도 나오더라구요. ㅎㅎ

이제 업로드 후 SSH로 접속해서 원하는 곳으로 이동해준 후 압축을 풀어서 쓰시면 됩니다.

예를들면

    sudo mv /home/ftpuser/abcd.zip /var/www
    

위와 같이 FTP폴더에 업로드한 abcd.zip 파일을 /var/www 에 옮기는 것입니다.

그런 후 unzip을 하면 제일 좋겠죠? ^^

---

## TLS를 통한 암호화 전송하기(옵션)

위와 같은 방식으로 파일을 전송하면 전혀 암호화되지 않습니다.

그래서 암호화 전송을 설정하면 안심이 되겠죠? 

마침 우리는 Let's Encrpyt에서 발급 받은 Wildcard 인증서가 있죠 ^^

그 인증서를 이용해서 TLS 전송을 할 예정입니다.

    sudo mv /etc/vsftpd.conf /etc/vsftpd.conf_plain
    

기존에 쓰던 파일을 _plain 이름으로 바꿔줍니다.

    sudo nano /etc/vsftpd.conf
    

위 명령어로 새로 생성합니다.

    listen=NO
    listen_ipv6=YES
    anonymous_enable=NO
    local_enable=YES
    write_enable=YES
    local_umask=002
    file_open_mode=0777
    dirmessage_enable=YES
    use_localtime=YES
    xferlog_enable=YES
    connect_from_port_20=YES
    chroot_local_user=YES
    secure_chroot_dir=/var/run/vsftpd/empty
    pam_service_name=vsftpd
    pasv_enable=Yes
    pasv_min_port=10000
    pasv_max_port=10100
    allow_writeable_chroot=YES
    ssl_enable=YES
    allow_anon_ssl=NO
    force_local_data_ssl=YES
    force_local_logins_ssl=YES
    ssl_tlsv1=YES
    ssl_sslv2=NO
    ssl_sslv3=NO
    require_ssl_reuse=NO
    ssl_ciphers=HIGH
    rsa_cert_file=/etc/letsencrypt/live/aced.ga/fullchain.pem
    rsa_private_key_file=/etc/letsencrypt/live/aced.ga/privkey.pem
    

위 내용을 복사해서 붙여넣기 합니다. (FTP 유저 생성 -2 셋팅과 같습니다.)

마지막에  인증서 경로를 **꼭** 바꿔주세요!!!!!!!

컨트롤 + O, 엔터, 컨트롤 + X 로 저장 후 빠져나옵니다.

    systemctl restart vsftpd
    

---

## 파일질라에서 파일을 암호화 전송하기(옵션)

이제 파일질라로 가서 똑같이 접속합니다.

![](img/google-cloud-platform-ubuntu-20-04-vsftpd-ftp-setting/11-secure.png)

그러면 위와 같이 letsencrypt 인증서 내용이 나오는데 확인을 누르면 접속됩니다.

이제 안전하게 파일을 전송할 수 있습니다.

다만 전송속도가 10~20% 정도 내려가는 것 같습니다.

암호화없이 전송시 11.2MB/s까지 나왔는데 TLS로 전송하니 9~9.5MB/s로 내려가네요.

그래도 암호화되게 전송하니 안심이 되네요 ^^

---

## 기존 설정으로 돌리기

혹시나 암호화 안해도 되니 빠른 속도를 원하시면 기존 설정으로 돌리면 됩니다.

    sudo mv /etc/vsftpd.conf /etc/vsftpd.conf_tls
    

    sudo mv /etc/vsftpd.conf_plain /etc/vsftpd.conf
    

위 두 명령어를 내리면 tls용 설정파일을 _tls를 붙여주고, 기존에 plain 설정파일을 적용하는 것입니다.

    systemctl restart vsftpd
    

그리고 위 명령어로 재시작해주면 됩니다.

---

## 참조사이트

How to setup FTP server on Ubuntu 20.04 Focal Fossa Linux - LinuxConfig.org

<a href="https://linuxconfig.org/how-to-setup-ftp-server-on-ubuntu-20-04-focal-fossa-linux" target="_blank" rel="noopener noreferrer">https://linuxconfig.org/how-to-setup-ftp-server-on-ubuntu-20-04-focal-fossa-linux</a>

---

[GCP] Google cloud FTP 포트 추가

<a href="https://blog.crois.net/2018/11/23/cloud-google-cloud-ftp-%ED%8F%AC%ED%8A%B8-%EC%B6%94%EA%B0%80" target="_blank" rel="noopener noreferrer">https://blog.crois.net/2018/11/23/cloud-google-cloud-ftp-%ED%8F%AC%ED%8A%B8-%EC%B6%94%EA%B0%80</a>

---

How To Install an FTP server (vsftpd) on Ubuntu 20.04 | DevAnswers.co

<a href="https://devanswers.co/install-ftp-server-vsftpd-ubuntu-20-04/#7-secure-ftp-with-tls-recommended" target="_blank" rel="noopener noreferrer">https://devanswers.co/install-ftp-server-vsftpd-ubuntu-20-04/#7-secure-ftp-with-tls-recommended</a>

---

우분투에서 vsFTPd 기본 업로드 파일 권한이 작동하지 않습니다

<a href="https://qastack.kr/server/571289/vsftpd-default-uploaded-file-permissions-on-ubuntu-not-working" target="_blank" rel="noopener noreferrer">https://qastack.kr/server/571289/vsftpd-default-uploaded-file-permissions-on-ubuntu-not-working</a>

---

리눅스 사용자 관리 명령어 (추가 useradd, adduser, 삭제 userdel, 변경 usermod)

<a href="https://withcoding.com/101" target="_blank" rel="noopener noreferrer">https://withcoding.com/101</a>

---

리눅스 사용자 추가/수정/삭제/againg - useradd

<a href="https://webdir.tistory.com/128" target="_blank" rel="noopener noreferrer">https://webdir.tistory.com/128</a>