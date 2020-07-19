---
layout: post
title: 'ghost에 구글 SMTP 설정하기'
author: [Woosung]
tags: 
  - Ghost
image: img/ghost-google-smtp-mail-setting/gmail-cover-r.jpg
date: '2020-05-23T19:00:10.000Z'
excerpt: ghost에 구글 SMTP 셋팅하는 방법입니다.
draft: false
---

ghost 폴더에 있는

**config.production.json**

위 파일을 수정해야 합니다.

16번째 줄을 보면

```
    "mail": {
        "transport": "Direct" 
    },
```

위 내용이 있는데 이것을

```
    "mail": {
      "transport": "SMTP",
      "options": {
        "service": "Gmail",
          "auth": {
            "user": "yourgmailid@gmail.com",
            "pass": "yourpassword"
       }
      }
    },
```
    

위와 같은 형식으로 바꿔주면 됩니다.

```
su ghostusername
```

그리고 위 명령어로 ghost 계정으로 로그인하여

```
ghost restart
```

위 명령어로 ghost를 재실행 해줍니다.

> The content folder is not owned by the current user

혹시 위와 같은 에러가 떴을 땐 컨텐트 폴더를 현재 유저의 소유권으로 바꿔주면 됩니다.

exit 로 루트 계정으로 돌아갔다가

```
chown -R ghostusername:ghostusername /var/www/ghost
```

저는 위와 같이 해주고, 

```
su ghostusername
```

위 명령어로 해당 계정으로 다시 로그인하여

```
ghost restart
```

해주니 문제없이 넘어갔습니다.

혹시나 pass 부분에 구글 비번을 넣었음에도 메일이 가지 않는다면 앱비번을 만들어서 넣어주면 됩니다.

16자리 비번을 생성 후 비번을 교체해주면 잘 작동 됩니다.


<a href="https://www.wsgvet.com/bbs/board.php?bo_table=home&wr_id=594" target="_blank" rel="noopener noreferrer">우분투 20.04에서 구글 SMTP메일서버를 활용한 postfix 메일 보내기</a>


위 링크에서 상세히 나와있습니다.

비번을 수정 후 다시 ghost restart를 해줘야 됩니다.

관리자모드에서 lab에 들어가면 제일 밑에 mail 테스트를 할 수 있습니다.

제대로 수정되었다면

![](img/ghost-google-smtp-mail-setting/google-smtp-email.png)

위와 같이 메일을 받을 수 있습니다.