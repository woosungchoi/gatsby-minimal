---
layout: post
title: 'ghost 블로그 casper 테마에서 날짜표시형식 변경하는 방법'
author: [Woosung]
tags: 
  - Ghost
image: img/ghost-blog-casper-theme-change-date-format/time-cover.jpg
date: '2020-05-30T13:20:10.000Z'
excerpt: ghost 블로그의 casper테마의 시간표시형식을 한국식으로 바꾸는 방법입니다. hbs를 수정하고 ghost를 재실행하면 변경이 가능합니다.
draft: false
---

![](img/ghost-blog-casper-theme-change-date-format/01-before.png)

ghost 블로그를 시작하고 언어변경을 하지 않으면 위와 같이 표시가 됩니다.

영어식 표현인데요. 

우리는 한국사람이니깐 한국식으로 바꿔주는게 보기 편하겠죠? ^^

![](img/ghost-blog-casper-theme-change-date-format/03-language.png)

위와 같이 관리자에 들어가서 General -> Publication Language -> ko 로 바꾸고 Save setting 를 누릅니다.

그러면 "28 5월 2020" 이런 식으로 표현됩니다.

이제 순서를 바꿔줘야되는데요.

이것은 테마의 hbs 파일을 수정해야 합니다.

---

## 1. 글 내용에서 표시형식 수정하기

SSH에 접속해서

    sudo nano /var/www/ghost/current/content/themes/casper/post.hbs
    

위 명령어를 내리면 이상한 글자들이 많이 나오는데요.

77번째 줄에 보면

    <time class="byline-meta-date" datetime="{{date format="YYYY-MM-DD"}}">{{date format="D MMM YYYY"}}
    

위와 같은 내용이 나옵니다.

표시형식이 "D MMM YYYY" 이렇게 되어있기 때문에 언어를 한글로 바꿨음에도 불구하고 순서가 이상하게 나온 것이죠.

그래서 해당 언어 설정에 맞게 수정하면 됩니다. YYYY MM DD는 아니구요 ^^;;

실제로 YYYY MM DD로 수정하면 2020 05 28 이런식으로 표시됩니다.

우리가 원하는 "월, 일"이 표시가 안되죠.

그래서 언어에 맞게 표시하는 형식인 ll 로 대체하는 것입니다. ll은 소문자 엘, 소문자 엘 입니다.

최종적으로

    <time class="byline-meta-date" datetime="{{date format="YYYY-MM-DD"}}">{{date format="D MMM YYYY"}}
    

위 내용을

    <time class="byline-meta-date" datetime="{{date format="YYYY-MM-DD"}}">{{date format="ll"}}
    

위와 같이 수정하면 됩니다.

그리고 글내용 밑에 있는 관련글의 형식도 바꿔줘야 합니다.

160번째 줄에

    <p><time datetime="{{date format="YYYY-MM-DD"}}">{{date format="D MMM YYYY"}}</time> –
    

를

    <p><time datetime="{{date format="YYYY-MM-DD"}}">{{date format="ll"}}</time> –
    

위와 같이 바꿔주면 됩니다.

수정 후 컨트롤 + O, 엔터, 컨트롤 + X 를 눌러서 저장하면 됩니다.

---


## 2. 글목록에서 표시형식 수정하기

1번 설정을 하면 글 내용에서 변경이 되는데요.  

(실제로 적용되진 않습니다. 3번에서 설명드립니다.)

첫화면인 글목록이나 태그 목록에서 보면 변경되지 않습니다.

그래서 다른 파일을 또 수정해야 되는데요.

    sudo nano /var/www/ghost/current/content/themes/casper/partials/post-card.hbs
    

위 명령어를 내리면 또 이상한 글자들이 많습니다.

64번째 줄에

    <time datetime="{{date format="YYYY-MM-DD"}}">{{date format="D MMM YYYY"}} • {{reading_time}}
    

위 내용을

    <time datetime="{{date format="YYYY-MM-DD"}}">{{date format="ll"}} • {{reading_time}}
    

위와 같이 바꾸면 됩니다.

컨트롤 + O, 엔터, 컨트롤 + X 를 눌러서 저장하면 됩니다.

---


## 3. 변경사항 적용하기

그런데 이렇게 저장했음에도 불구하고 실제 사이트에 가보면 형식 수정이 안되어 있습니다.

조금 복잡한 부분인데요. 적용하는 방법을 알려드리겠습니다.

SSH에서

    su ghostuser
    

위와 같이 고스트 유저로 계정을 전환합니다.

    cd /var/www/ghost
    

위 명령어로 고스트 설치파일이 들어있는 디렉토리로 이동합니다.

    ghost restart
    

위 명령어로 고스트를 재실행합니다.

그러면 비번을 물어보는데 고스트 유저의 비번을 넣으면 됩니다.

구글 클라우드 무료 인스턴스에서는 좀 느려서 시간이 걸립니다.

> $ ghost restart

> sudo systemctl is-active ghost
> ? Sudo Password [hidden]

> sudo systemctl restart ghost
> ✔ Restarting Ghost
> $

위와 같이 나오면 성공입니다.

    exit
    

위 명령어를 입력하면 기존 계정으로 전환됩니다.

![](img/ghost-blog-casper-theme-change-date-format/02-after.png)

이제 홈페이지에 가보면 변환된 것을 볼 수 있습니다.

---

## 참조링크


하나의 서버에 여러 도메인 연결하기 (Apache)

<a href="https://sy34.net/using-multiple-domain-on-one-server" target="_blank" rel="noopener noreferrer">https://sy34.net/using-multiple-domain-on-one-server</a>
