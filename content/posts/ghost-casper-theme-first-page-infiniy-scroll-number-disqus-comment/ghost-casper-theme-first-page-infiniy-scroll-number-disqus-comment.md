---
layout: post
title: 'ghost casper테마의 첫화면 최신글 숫자 줄이기, disqus 댓글 달기'
author: [Woosung]
tags: 
  - Ghost
image: img/ghost-casper-theme-first-page-infiniy-scroll-number-disqus-comment/front-page.png
date: '2020-06-03T14:49:51.000Z'
excerpt: ghost 플랫폼의 기본테마인 casper는 첫화면에 기본적으로 인피니티 스크롤을 적용하고 있습니다. 페이지 기능이 없이 그냥 스크롤만 하면 새로운 글이 로딩이 되는데, 그 숫자를 줄이고, 댓글 플러그인을 활성화하는 방법에 대해 알려드립니다.
draft: false
---

## 첫 화면에서 로딩되는 최신글 숫자 줄이기

    sudo nano /var/www/ghost/content/themes/casper/package.json
    

69~70번째 줄을 보면

    "config": {
        "posts_per_page": 25
    

위와 같이 25가 기본인 것을 알 수 있습니다.

즉 인피니티 스크롤을 해야하는데 25개가 먼저 펼쳐지고 스크롤을 25개가 출력되는 부분까지 하면 또다른 25개를 로딩한다는 것입니다.

그런데 첫페이지에서 25개를 출력하면 굉장히 CPU자원을 많이 먹습니다. 속도도 당연히 느리다고 느껴지구요.

그래서 저는 6 으로 고쳐서 6개를 본 이후에 또다른 6개가 출력되도록 수정했습니다.

현재 3.0.12 버전의 Casper 테마에서는 페이지 기능을 지원하지 않고, 스크를 했을때 자동으로 추가로 출력되는 구조이므로 이렇게 하는게 무난한 것 같습니다.

변경사항을 적용하려면 SSH에서 ghost 유저로 들어가서 ghost restart 하면 됩니다.

---

## 글 밑에 disqus 댓글 다는 방법

    sudo /var/www/ghost/content/themes/casper/post.hbs
    

117번째 줄 근처에 보면

    {{!--
    <section class="post-full-comments">
    If you want to embed comments, this is a good place to do it!
    </section>
    --}}
    

위 내용이 있는데, 위 내용을 지우거나 바로 밑에다가

    <div id="disqus_thread"></div>
    <script>
    var disqus_config = function () {
    	this.page.url = "{{url absolute="true"}}";  
    	this.page.identifier = "ghost-{{comment_id}}"
    	};
    	(function() {
    	var d = document, s = d.createElement('script');
    	s.src = 'https://yourdisqusid.disqus.com/embed.js';
    	s.setAttribute('data-timestamp', +new Date());
    	(d.head || d.body).appendChild(s);
    	})();
    </script>
    

위 내용을 넣으면 됩니다.

yourdisqusid 대신에 disqus에서 생성한 Shortname을 넣으면 됩니다.

변경사항을 적용하려면 SSH에서 ghost 유저로 들어가서 ghost restart 하면 됩니다.
