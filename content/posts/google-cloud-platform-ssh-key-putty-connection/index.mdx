---
layout: post
title: '구글 클라우드 플랫폼에서 SSH키 생성 후 PuTTY 접속하기'
author: [Woosung]
tags: 
  - Google Cloud
image: img/google-cloud-platform-ssh-key-putty-connection/ssh-connection-cover-resized-tiny.jpg
date: '2020-06-02T05:32:00.000Z'
excerpt: 구글 클라우드 플랫폼에 SSH키를 입력하고 PuTTY 접속하는 방법에 대하여 시작부터 끝까지 자세하게 설명해드립니다.
draft: false
---

구글 클라우드 플랫폼에서 SSH로 접속할 때, 기본적으로 제공하는 브라우저 접속은 로그인이 필요하고, 반응이 느립니다. 

그래서 서버에 접속하지 않아도 SSH를 생성하여 putty나 SFTP 같은 외부 프로그램에서 접속하는 것이 훨씬 편하고 직관적이며, 활용도가 높습니다.

저는 이때까지 SSH 접속은 그냥 root로 로그인 후 작업하는 것이 당연하다고 생각했는데, 이번에 SSH 키 생성해서 접속하는 방식을 해보고진짜 보안에 좋겠구나라는 생각을 하게 되었습니다.

처음에는 외부에서 SSH키를 생성해서 서버에 입력하는 것에 이상하게 생각했었는데, 생각보다 훨씬 직관적이고, 믿을 수 있는 방법인 것 같습니다.

이제 서버 외부에서 SSH키를 생성해서 구글 클라우드 플랫폼에 입력 후 putty 접속에 관한 내용을 적어보겠습니다.

---

## PuTTY 및 PuTTYgen 설치하기

(1) 32bit 용 프로그램 다운 받기

[https://the.earth.li/~sgtatham/putty/latest/w32/putty.exe](https://the.earth.li/~sgtatham/putty/latest/w32/putty.exe)

[https://the.earth.li/~sgtatham/putty/latest/w32/puttygen.exe](https://the.earth.li/~sgtatham/putty/latest/w32/puttygen.exe)

(2) 64bit 용 프로그램 다운 받기

[https://the.earth.li/~sgtatham/putty/latest/w64/putty.exe](https://the.earth.li/~sgtatham/putty/latest/w64/putty.exe)

[https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe)

자신의 컴퓨터에 맞는 bit를 선택해서 다운 받으면 됩니다.

가급적이면 자신의 컴퓨터에 맞게 받으시고, 푸티와 푸티젠의 비트도 같게 받아주세요.

---

## PuTTYgen으로 SSH키 생성하기

puttygen.exe를 실행하면

![](img/google-cloud-platform-ssh-key-putty-connection/01-puttygen-gen.png)

위와 같이 나오는데요.

Generate를 누릅니다.

![](img/google-cloud-platform-ssh-key-putty-connection/02-progress.png)

위와 같이 진행사항이 업데이트가 되는데, 기다린다고 올라가지 않고 마우스 커서를 빨간 공간 안에서 흔들어 줘야 합니다.

![](img/google-cloud-platform-ssh-key-putty-connection/03-gen_fin.png)

그러면 위와 같이 Key가 생성되었습니다.

![](img/google-cloud-platform-ssh-key-putty-connection/04-save_priv-key.png)

위와 같이 Key comment에 원하는 아이디를 넣습니다. 참고로 root도 가능합니다.

root로 만들면 다음 글에 있는 SFTP 사용할때 사용할 수 있습니다. 하지만 관리는 잘 못하면 서버가 그냥 없어진다고 보시면 됩니다. 키는 비번을 포함하여 유출되지 않도록 노력해야 합니다.

Key passphrase 에 원하는 비번을 입력합니다.

Confirm passphrase 에 비번을 똑같이 입력합니다.

참고로 Key passphrase에 비번을 안넣어도 됩니다. 대신 key가 유출되면 끝이겠죠? ^^

다 입력했으면 Save private key를 눌러서 ppk 파일을 다운받습니다.

로그인할때 꼭 필요한 파일입니다. 안전한 곳에 저장하세요.

![](img/google-cloud-platform-ssh-key-putty-connection/05-copykey.png)

그리고 위와 같이 빨간 박스에 있는 내용물들을 모두 긁어서 복사합니다.

---

## 구글 클라우드 플랫폼에 Key 정보 입력하기

이제 구글 클라우드 플랫폼에 접속합니다.

<a href="https://console.cloud.google.com/compute/metadata/sshKeys" target="_blank" rel="noopener noreferrer">https://console.cloud.google.com/compute/metadata/sshKeys</a>

위 링크를 클릭하거나

![](img/google-cloud-platform-ssh-key-putty-connection/06-go-to-metadata.png)

위와 같이 Compute Engine -> 메타데이터를 클릭합니다.

![](img/google-cloud-platform-ssh-key-putty-connection/07-go-ssh-modify.png)

위와 같이 SSH키 탭을 누르고 수정을 누릅니다.

제일 밑에 있는 "+ 항목 추가" 를 누릅니다.

![](img/google-cloud-platform-ssh-key-putty-connection/08-save-key.png)

위와 같이 PuttyGen에서 복사한 내용을 그대로 붙여넣기 합니다. 그러면 왼쪽에 지정한 id가 입력이 됩니다.

저장을 누르면 서버에 key 정보를 입력한 것입니다. 이제 만든 ppk 파일로 putty와 SFTP에 접속이 가능합니다.

---

## Putty 설정하기

이제 생성한 ppk 파일로 구글 클라우드 플랫폼에 로그인하지 않아도 SSH 접속이 가능합니다.

아까 다운 받은 Putty.exe 파일을 실행합니다.

![](img/google-cloud-platform-ssh-key-putty-connection/09-putty-start.png)

위와 같이 뜰겁니다.

이제 Host Name에 아까 PuttyGen에서 생성한 내용을 넣을 것입니다.

형식은 아까만든아이디@서버의외부아이피  예를들어 1234567@35.197.123.123  이렇게 넣습니다.

Saved Sessions에 원하는 이름을 넣고 Save를 누릅니다.

![](img/google-cloud-platform-ssh-key-putty-connection/10-input-data.png)

위와 같이 넣고 Save를 누르면 밑에 그 원했던 이름이 뜹니다.

앞으로 접속할 때 Saved Sessions에 있는 리스트를 클릭 후 Load를 누르고 키를 넣고 Open을 누르면 됩니다.

일단 Saved Sessions에 있는 방금 만든 내용을 클릭 후 Load를 누릅니다.

이제 ppk 파일을 불러와야 합니다.

![](img/google-cloud-platform-ssh-key-putty-connection/11-input-key.png)

위와 같이 왼쪽에 Connection에 SSH에 Auth를 누릅니다.

그리고 오른쪽에 Browse 를 클릭하면 ppk를 불러올 수 있는 창이 뜹니다.

아까 저장했던 ppk 파일을 선택합니다.

그리고 밑에 있는 Open을 클릭합니다.

![](img/google-cloud-platform-ssh-key-putty-connection/12-alert.png)

위와 같이 경고가 나오는데 당황하지 마시고 예를 누르면 됩니다

---

## PuTTY  접속하기

아까 PuttyGen에서 비번을 넣고 키를 만들었다면

![](img/google-cloud-platform-ssh-key-putty-connection/12-auth-with-passwd.png)

위와 같이 비번을 넣으라고 나옵니다.

아까 만들었던 비번을 넣으면 됩니다. 그러면 구글 클라우드 플랫폼에서 봤던 그 SSH가 화면이 나올 것입니다.

![](img/google-cloud-platform-ssh-key-putty-connection/12-auth-without-passwd.png)

혹시 비번을 안넣고 만들었다면 위와 같이 그냥 바로 접속됩니다. 보안에는 안좋아보이죠? ^^

웹브라우저 SSH와 차이점이라고 하면 인터넷에서 글자를 복사한 후 Putty에서는 마우스 우클릭을 해야 붙여넣기가 되는 것입니다.

웹브라우저에서는 컨트롤  v를 눌렀지만 여기서는 그냥 우클릭 한방이면 붙여넣기가 됩니다.

그리고 putty에서 글자를 긁으면 자동으로 복사되는건 똑같습니다.

나머지는 같으니깐 설명할건 없을 것 같네요.

다음에 접속할때 이것만 기억하시면 됩니다.

Saved Sessions에 저장한 이름 클릭 후 Load -> Connection에 SSH에 Auth를 누르고 Browser 누른 후 ppk파일 선택 -> Open 끝입니다.

다음에는 SFTP를 이용하여 탐색기처럼 생긴 프로그램으로 편하게 파일 관리하는 방법에 대해 알려드리겠습니다.
