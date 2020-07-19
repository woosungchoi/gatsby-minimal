---
layout: post
title: '구글 클라우드 플랫폼에서 root SSH키 생성 후 WINSCP SFTP 접속하기'
author: [Woosung]
tags: 
  - Google Cloud
image: img/google-cloud-platform-root-ssh-winscp-setting/sftp-cover.jpg
date: '2020-06-02T07:11:35.000Z'
excerpt: SFTP를 사용하여 탐색기처럼 폴더를 이동하고, 파일을 즉각적으로 수정하는 방법에 대한 글입니다. root 권한으로 보안에 취약하지만 쉽게 사용할 수 있는 장점이 있습니다.
draft: false
---

SFTP를 사용하는 이유는 root 권한으로 탐색기처럼 파일을 찾아서 바로 수정할 수 있습니다.

매우 직관적이기 때문에 원하는 폴더에 원하는 파일을 원하는 만큼 수정 후 바로 저장이 가능합니다.

단점은 root 권한으로 바로 로그인하기 때문에, root키가 털리면 서버의 생명은 끝난다는 것이고,

파일 전송에 CPU 자원을 많이 사용하기 때문에 전송 속도가 느리다는 점입니다. 구글 클라우드 무료 티어 기준으로 2~3MB/s 정도 나옵니다.

대략적으로 100MB 까지는 전송이 무난한데, 그 이상이면 기다리기 어려울 것입니다.

100MB 이상 대용량 파일은 FTP를 이용하는 것이 제일 좋습니다. 이것은 추후에 글을 작성할 예정입니다.

---

## root SSH 접속키 생성하기

구글 클라우드 플랫폼에 SSH키를 입력하고 PuTTY 접속하는 방법에 대하여 시작부터 끝까지 자세하게 설명해드립니다.

<a href="https://blog.wsgvet.com/google-cloud-platform-ssh-key-putty-connection" target="_blank" rel="noopener noreferrer">https://blog.wsgvet.com/google-cloud-platform-ssh-key-putty-connection</a>

위 게시물에서 PuttyGen 단계에서 키를 생성할 때

![](img/google-cloud-platform-root-ssh-winscp-setting/01-root-key-gen.png)

위와 같이 Key comment 에 root을 넣습니다.

Key passphrase 에 원하는 비번을 입력합니다.

Confirm passphrase 에 비번을 똑같이 입력합니다.

그리고 Save private key를 누릅니다.

ppk 파일을 안전한 곳에 다운로드합니다.

지난 게시물에 있듯이 구글 클라우드 플랫폼에 접속합니다.

<a href="https://console.cloud.google.com/compute/metadata/sshKeys" target="_blank" rel="noopener noreferrer">https://console.cloud.google.com/compute/metadata/sshKeys</a>

위 링크를 클릭하거나

![](img/google-cloud-platform-root-ssh-winscp-setting/02-go-to-metadata.png)

위와 같이 Compute Engine -> 메타데이터를 클릭한 뒤 

![](img/google-cloud-platform-root-ssh-winscp-setting/03-go-ssh-modify.png)

SSH 탭에 가서 PuttyGen에서 생성한 내용을 넣고 저장합니다.

자세한 내용은 지난 게시물을 참조하세요!

---

## WINSCP 설치 및 접속하기

이제 root로 putty 또는 SFTP를 지원하는 외부 프로그램에서 접속 가능합니다.

저는 개인적으로 SFTP는 WINSCP를 선호하고, FTP는 파일질라를 선호합니다.

WINSCP를 다운 받습니다.
<a href="https://winscp.net/eng/download.php" target="_blank" rel="noopener noreferrer">https://winscp.net/eng/download.php</a>

위 링크에서 다운 받고 실행합니다.

![](img/google-cloud-platform-root-ssh-winscp-setting/04-winscp-new.png)

위와 같이 뜨거나, 안뜨면 새로운 세션을 누르면 새로운 사이트를 추가할 수 있습니다.

파일 프로토콜은 SFTP, 호스트 이름은 서버의 외부IP,  사용자이름에 root, 비밀번호에는 안넣어도 됩니다. 어짜피 또 물어봅니다.

고급을 누릅니다.

![](img/google-cloud-platform-root-ssh-winscp-setting/05-privkey-input.png)

위와 같이 인증을 눌러서 개인키 파일을 선택합니다. 아까 생성한 root용 ppk을 넣으면 됩니다.

확인을 누르고, 가운데 저장을 누릅니다. 이름은 아무렇게 넣어도 됩니다.

이제 로그인을 해봅니다. 비번을 넣으라고 나오는데 아까 만든 비번을 넣고 확인을 누릅니다.

![](img/google-cloud-platform-root-ssh-winscp-setting/06-success.png)

드디어 위와 같이 접속이 되었습니다. 탐색기 형식으로 매우 간편하게 폴더 이동이 가능합니다.

root 사용자이기 때문에 모든 영역을 다닐 수 있으며, 왼쪽 PC에 있는 파일을 서버로 옮기거나,

오른쪽에 서버쪽 파일을 왼쪽 PC 쪽으로 아무런 제한없이 옮길 수 있습니다.

폴더를 만들고 권한 주는 것도 가능하구요.

그리고 오른쪽 서버의 특정 파일을 더블클릭하면 내부 편집기로 바로 편집 후 컨트롤 S를 누르면 바로 서버로 저장됩니다.

수정 후 PuTTY에서 nginx를 재시작할 수도 있고, 즉각적으로 수정 후 반영이 가능합니다.

---

## 다량의 파일을 이동하는 추천 방법

파일 이동시 되도록이면 zip이나 tar 같은 압축파일 형태로 옮기는 것을 추천드립니다.

파일을 다량으로 이동시키면 CPU가 매우 힘들어하기 때문에, 압축파일 형태로 옮긴 후 Putty에서 unzip이나 tar 명령어로 푸는 것이 제일 빠릅니다.

그누보드에 아미나의 나리야 빌더를 덮어씌우는 방법을 예시로 들어보겠습니다.

아미나 홈페이지에서 나리야빌더를 다운 받고 압축을 먼저 풉니다.

그러면 Nariya-1.0.5 폴더와 Nariya-1.0.5-Patch 폴더 2개가 나옵니다.

그누보드에 처음 나리야빌더를 씌운다고 했을때는 Nariya-1.0.5폴더의 내용물만 필요하겠죠?

압축이 귀찮다면 그냥 그대로 드래그 앤 드롭 형태로 폴더째로 옮겨도 됩니다. 다만 파일의 수량이 600개가 넘어가기 때문에 오래걸리고 힘들어합니다.

기다리실 수 있다면 그렇게 해도 되겠지만 몇가지 작업을 해서 좀더 빠르게도 가능합니다.

![](img/google-cloud-platform-root-ssh-winscp-setting/07-zip.png)

위와 같이 Nariya-1.0.5 폴더에 들어가서 원하는 폴더를 드래그하고 바로 zip으로 압축해줍니다.

압축을 풀었을때 그 경로에 바로 올 수 있게 말이죠.

![](img/google-cloud-platform-root-ssh-winscp-setting/08-drag-and-drop.png)

위와 같이 만든 압축파일을 서버의 원하는 폴더에 옮겨주면 복사가 됩니다.

이제 putty에 접속해서 아까 넣었던 폴더로 들어갑니다.

그누보드를 설치하셨다면 /var/www/gnuboard에 넣으셨을테니

    cd /var/www/gnuboard
    sudo unzip Nariya-1.0.5.zip
    

위 명령어로 풀어주면 됩니다.

혹시 unzip 패키지가 없다고 하면 설치해주면 됩니다.

    sudo apt install unzip
    

위 명령어로 설치 후 unzip 하면 됩니다.

나리야 빌더는 그누보드에 덮어쓰기 할게 없는데, 업데이트 하거나, 나리야 게시판 플러그인을 설치하면 덮어쓰기를 해야 합니다.

그럴경우

    Archive:  nb.zip
    replace adm/sql_write.sql? [y]es, [n]o, [A]ll, [N]one, [r]ename: A
    

위와 같이 새 파일로 교체하겠냐고 물어보면 대문자 A 엔터를 누르면 자동으로 덮어쓰기가 됩니다.

그리고 이 파일들을 root 계정으로 올렸기 때문에 가끔 퍼미션(권한) 오류가 생길 수 있습니다.

그래서 파일을 복사한 후

    sudo chown -R www-data:www-data /var/www/gnuboard
    sudo chmod -R 755 /var/www/gnuboard
    sudo chmod -R 707 /var/www/gnuboard/data
    

위와 같이 해당 폴더 이하의 권한을 다시 www-data에게 주고 755 707로 조정하는 것이 좋습니다.

말이 길어졌지만 실제 해보시면 정말 간단합니다 ^^

다음에는 phpmyadmin 설치에 대해 알려드리겠습니다.
