---
layout: post
title: '구글 클라우드 플랫폼 가입, 도메인 연결, Nginx 설치'
author: [Woosung]
tags: 
  - Google Cloud
image: img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/hello-world-cover.jpg
date: '2020-05-27T19:03:00.000Z'
excerpt: 구글 클라우드 플랫폼에 가입하고 클라우드플레어에서 도메인과 연결해주는 방법에 대해 알려드립니다.
draft: false
---

도메인 주소도 받았고 네임서버도 재설정했으니, 이제 남은 것은 단 하나

가상서버호스팅만 구동하면 됩니다.

구글 클라우드 플랫폼으로 갑니다.

<a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer">https://cloud.google.com</a>

위 링크를 클릭하시면 바로갈 수 있습니다.

구글 아이디가 없다면 가입하셔야 합니다 ^^;

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/01-registration.png)

구글 아이디가 있다면 위와 같이 로그인 후 무료로 시작하기를 클릭합니다.

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/02-1st-step.png)

1/2단계에서 국가를 확인 후 계속을 누릅니다.

그런데 계속을 눌러도 반응이 없네요 -_-;;;

뭔가 문제가 있는 것 같은데요.

<a href="https://console.cloud.google.com" target="_blank" rel="noopener noreferrer">https://console.cloud.google.com</a>

그냥 위 링크를 클릭하니 환영한다고 합니다. ㅎㅎ

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/03_accept.png)

체크 후 동의 및 계속하기를 누릅니다.

이제 본 화면으로 들어왔습니다.

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/04_compute_engine.png)

$300 무료로 줄테니 써봐라... 라고 하지만  Compute Engine만 클릭합니다. (참고로 $300 그냥 써도 상관없습니다..)

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/05_make_project.png)

프로젝트 이름에 원하는 이름을 넣습니다.

저는 aced-ga 라고 넣고 만들기를 눌렀습니다.

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/06-1st-step.png)

이제 아까봤던 1/2단계가 다시 나왔네요. 체크 해준 뒤 계속을 누릅니다.

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/06-2nd-step.png)

2/2단계가 시작되었습니다. 개인을 클릭한 후 개인정보를 넣고 계속을 누릅니다.

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/07-2nd-step-2.png)

이제 결제를 위한 고객 정보 입력을 해야 합니다.

국내 휴대폰 전화번호를 넣고 코드 전송을 누른 뒤, 문자로 받은 코드를 코드 입력 부분에 넣고 계속을 누릅니다.

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/08-card-number.png)

카드 정보를 넣고 무료 평가판 시작하기를 누릅니다.

참고로 이것은 추후에 결제할 카드를 선택하는 것이라 당장은 결제에 대한 걱정은 안하셔도 됩니다.

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/09-vm-instance.png)

위와 같이 콘솔화면에서 Compute Engine -> VM인스턴스를 클릭합니다.

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/10-instance-make.png)

그리고 위와 같이 인스턴스 만들기를 클릭합니다.

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/11-change-setting.png)

최종적으로 위와 같이 셋팅하면 됩니다.

이름은 원하시는대로 넣으시구요.

나머지는 똑같이 하시면 됩니다.

부팅 디스크 부분은

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/12-booting-disc.png)

위와 같이 변경 후 선택하세요. **30**으로 숫자를 꼭 바꿔주세요.

그리고 선택을 누르시면 됩니다.

선택이 끝났다면 만들기를 누르면 됩니다.

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/13-done.png)

만들어졌다면 위와 같이 이름, 영역, 내부IP  외부IP 연결이라고 나와있습니다.

외부 IP의 경우 변경될 가능성이 높기 때문에 고정IP를 신청해야 합니다.

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/14-ext-ip.png)

위와 같이 구글 클라우드 플랫폼 콘솔에서 왼쪽에 메뉴를 누른 후

네트워킹 -> VPC 네트워크 -> 외부 IP 주소 를 클릭합니다.

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/15-ext-ip-reserve.png)

유형 밑에 임시를 눌러서 고정을 선택합니다.

그러면 새 고정 IP 주소 예약이 뜨는데

이름과 설명은 마음대로 넣고 예약을 누릅니다.

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/16-ex-ip-confirm.png)

이제 외부 주소가 고정이 되었습니다. 이 주소를 꼭 기억하세요!

---

클라우드 플레어로 들어가서 도메인 주소와 연결하겠습니다.

<a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer">https://www.cloudflare.com</a>

클라우드플레어에 접속하면

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/17-Active.png)

위와 같이 추가한 도메인 주소가 뜰겁니다. 혹시 이메일 인증 안하셨으면 꼭 하시구요.

해당 주소를 누르면 설정 화면으로 넘어갑니다.

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/18-select-DNS.png)

위와 같이 DNS를 누릅니다. 그리고 **+Add record**를 눌러줍니다.

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/19-root-A.png)

위와 같이 Type에는 A

Name 에는 @

IPv4 address에는 아까 기억한 외부IP 주소

Proxy status 에는 구름을 눌러서 DNS only로 변경 후 Save를 눌러줍니다.

**+Add record**를 한번 더 눌러서

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/domain-all.png)

위와 같이 Type에는 A

Name 에는 *

IPv4 address에는 아까 기억한 외부IP 주소

Proxy status 에는 구름이 없어지고 DNS only로 자동 변경되고, Save를 눌러줍니다.

이제 도메인 주소와 IP주소가 결합되어 IP주소를 기억할 필요가 없게 되었습니다.

---

구글 클라우드 플랫폼 콘솔에서 Compute Engine -> VM 인스턴스에 가보면

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/21-SSH-start.png)

위와 같이 연결 밑에 SSH가 있습니다. SSH 글자를 클릭하면

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/22-SSH-enter.png)

위와 같이 옛날 DOS 시절의 화면이 나옵니다.

이제 가상서버호스팅과 직접 대화를 나눌 수 있습니다.

> sudo apt update

를 넣고 엔터를 누릅니다.

참고로 위 내용을 그대로 쳐도 되지만 오타가 나올 수 있습니다.

그래서 위 내용을 마우스로 긁어서 컨트롤 + C 를 눌러 복사를 한 후

아까 SSH를 눌러서 뜬 그 창에 컨트롤 + V 를 누르면 붙여넣기가 됩니다.

그러면 뭔가 쫙 나오는데, 패키지 리스트를 업데이트하는 작업입니다.

> sudo apt upgrade

를 넣고 엔터를 누르면 어떤 리스트들이 나오고 Y/n과 같이 선택하라고 합니다.

Y를 누르고 엔터를 누릅니다. 이것은 현재 설치된 패키지에서 최신버전들을 설치하겠다는 의미입니다.

다음은 웹서버를 설치할 것입니다. Nginx를 설치해봅니다.

> sudo apt install nginx

위 명령어를 누르고 다시 y를 누른 후 엔터를 누릅니다.

이제 Nginx 웹서버가 설치되었습니다.

이제 외부IP 주소를 주소창에 치거나, 도메인 주소를 넣으면

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/23-welcome-to-nginx.png)

위와 같이 웰컴이 뜰 것입니다.

혹시나 접속이 안된다면 기다리거나, 휴대폰 LTE, 5G 상태에서 접속하면 접속이 될 수도 있습니다.

클라우드 플레어에서 변경사항이 늦게 전파될 수도 있기 때문입니다.

이제 인터넷 세상에 한 발을 내디뎠습니다.

이게 실제로 나의 서버임을 확인하기 위해 문구를 바꿔볼게요.

> sudo nano /var/www/html/index.nginx-debian.html

위 내용을 넣고 엔터를 치면 해당 문구를 수정할 수 있습니다.

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/24-welcome-edit.png)

위 화면에서 키보드 커서로 빨간색 박스 쪽으로 가서 마음대로 바꿉니다.

저는 14번째 줄에 있는

> Welcome to nginx!

위 내용을

> Welcome to nginx! Hello!!

위와 같이 Hello!! 를 추가해줬습니다.

그리고 컨트롤 + X 를 누른 후 Y를 누르고 엔터를 누르면 저장이 됩니다.

다시 인터넷 브라우저로 가서 외부IP주소나 도메인 주소를 넣고 들어가면

![](img/sign-in-google-cloud-platform-and-connect-domain-and-hello-world/25-Hello.png)

위와 같이 Hello!! 가 추가된 것을 확인할 수 있습니다.

다음에는 MariaDB와 nodejs 깔고 현재 이 블로그처럼 ghost 플랫폼을 운영하는 방법에 대해 알려드리겠습니다.
