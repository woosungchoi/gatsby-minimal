---
layout: post
title: '구글 클라우드 컴퓨트 엔진에서 우분투 기본 설정하기'
author: [Woosung]
tags: 
  - Google Cloud
image: img/google-cloud-compute-engine-ubuntu-basic-setting/ubuntu-basic-config.jpg
date: '2020-05-28T12:30:33.000Z'
excerpt: 구글 클라우드 컴퓨트 엔진에 우분투 설치 후 기본 셋팅에 관한 내용입니다. 방화벽 설정, 스왑파일 생성, 시간 설정 방법에 대해 알려드리겠습니다.
draft: false
---

## 1. ufw 방화벽 설정하기

기본적인 방화벽을 추가하는게 좋습니다.

구글 클라우드 컴퓨트 엔진에서 SSH 를 눌러 접속합니다.

    sudo ufw app list
    

위 명령어를 내리면

> -cloud:~# ufw app list
> Available applications:
> Nginx Full
> Nginx HTTP
> Nginx HTTPS
> OpenSSH

위와 같이 뜰 것입니다.

    sudo ufw allow OpenSSH
    

    sudo ufw allow 'Nginx Full'
    

위 두명령어로 SSH(22번 포트)와 Nginx(80,443 포트)를 허용합니다.

    sudo ufw enable
    

그리고 위 명령어로 방화벽을 활성화 시킵니다.

> Command may disrupt existing ssh connections. Proceed with operation (y|n)?

위와 같이 현재의 SSH 연결을 방해할 수 있다고 하지만 y 엔터를 누릅니다.

> Firewall is active and enabled on system startup

이제 방화벽이 설정되어 허용되어 있는 포트 이외에는 차단됩니다.


## 2. Fail2ban 설치하기

기본 방화벽 이외에 추가 방화벽 패키지를 설치합니다.

    sudo apt install fail2ban
    

위와 같이 입력하고 y 누르고 설치합니다.

    sudo service fail2ban start
    

위 명령어로 실행합니다.


## 3. SWAP 공간 생성하기

구글 클라우드 무료 인스턴스의 RAM이 600MB 정도 밖에 안되기 때문에 ghost나 그누보드 등을 돌리기엔 부족합니다.

그래서 하드 공간을 램공간으로 사용할 수 있게 스왑 파티션을 생성하는 것이 좋습니다.

램이 2GB 미만이면, 현재 RAM의 2배를 추천합니다.

그래서 넉넉하게 2GB를 주겠습니다.

    sudo fallocate -l 2G /swapfile
    

위 명령어로 2GB의 스왑 공간이 생겼습니다.

    sudo chmod 600 /swapfile
    

위 명령어로 권한을 조정합니다.

    sudo mkswap /swapfile
    

위 명령어로 스왑파일을 생성합니다.

> Setting up swapspace version 1, size = 2 GiB (2147479552 bytes)
> no label, UUID=4bcf4d5e-5d57-467e-955c-eaaa8033f9c2

위와 같은 내용이 나올 것입니다.

    sudo swapon /swapfile
    

위 명령어로 이제 스왑 공간을 사용할 수 있게 됩니다.

    sudo swapon --show
    

위 명령어를 내리면

> NAME      TYPE SIZE USED PRIO
> /swapfile file   2G   0B   -2

위와 같이 스왑공간이 생긴 것을 확인할 수 있습니다.

    free -h
    

위 명령어를 내리면

>              total        used        free      shared  buff/cache   available
    

> Mem:          576Mi       188Mi       112Mi       0.0Ki       275Mi       286Mi
> Swap:         2.0Gi          0B       2.0Gi

위와 같이 현재 메모리의 상태 및 스왑공간까지 확인할 수 있습니다.

그런데 이 상태로는 재부팅시 스왑공간이 없어집니다.

스왑공간이 재부팅시에도 살아있게 셋팅해줍니다.

    sudo nano /etc/fstab
    

위 명령어를 넣으면

> LABEL=cloudimg-rootfs   /        ext4   defaults        0 0
> LABEL=UEFI      /boot/efi       vfat    defaults        0 0

위와 같이 뜨는데요.

    /swapfile swap swap defaults 0 0
    

제일 밑에 위 내용을 넣어주면 됩니다.

컨트롤 + O, 엔터, 컨트롤 + X를 누르면 저장 후 나가집니다.

이제 스왑공간은 생성이 끝났습니다.

혹시 스왑공간을 삭제하고 싶다면

    sudo swapoff -v /swapfile
    sudo rm /swapfile
    

위 두 명령어를 내려주고

    sudo nano /etc/fstab
    

위 명령어를 넣은 후 추가한 부분을 삭제 후 저장 후 나가면 됩니다.


## 4. 시간 설정하기

    sudo dpkg-reconfigure tzdata
    

위 명령어를 내리면 시간설정을 설정할 수 있는데요.

키보드 커서로 Asia 선택 후 엔터 -> Seoul 선택 후 엔터를 하면 현재 시간으로 설정됩니다.

> Current default time zone: 'Asia/Seoul'
> Local time is now:      Thu May 28 21:02:32 KST 2020.
> Universal Time is now:  Thu May 28 12:02:32 UTC 2020.

위와 같이 나오면 성공입니다.


## 5. 지역 설정하기

    sudo dpkg-reconfigure locales
    

위 명령어로 들어가서

All locales 부분에 엔터

en_US.UTF-8 부분에 엔터

> ~$ sudo dpkg-reconfigure locales
> Generating locales (this might take a while)...
> en_US.UTF-8... done
> Generation complete.

그러면 위와 같이 설정될 것입니다.

이제 기본 셋팅이 끝났습니다. 

다음에는 MariaDB와 ghost 플랫폼 설치로 돌아오겠습니다.
