# Project TODAC

> 네이버 클라우드 데브옵스 3기 Team YOU 心 - 파이널 프로젝트<br>이승민, 장원태, 이재영, 한충희, 김나혜, 김동현, 유서연

## <a name="section0" />🚀바로가기

### [1.📱웹 앱 소개](#section1)

### [2.💼프로젝트 산출물](#section2)

### [3.👤역할 및 담당 업무](#section3)

### [4.⚙️담당 서브 시스템 구현 기능](#section4)

### [5.♾️DevOps](#section5)

### [6.🏗️CI/CD 구성](#section6)

### [7.💽ERD](#section7)

### [8.📊GitBranch 전략](#section8)

### [9.✔️문제 해결 부분](#section9)

### [10.🔧아쉬운 점 및 추가하고 싶은 기능](#section10)

### [11.💭프로젝트 소감 및 의의](#section11)

<!-- [**11.usecasediagram**]() 추가?

[**12.웹 아키텍쳐**]() 추가? 일단 킵 -->

---

### <a name="section1" />📱웹 앱 소개 [🔝](#section0)

> <b>T</b>his app may<br><b>O</b>ffer you<br> <b>D</b>ream<br> <b>A</b>nd<br> <b>C</b>omfort

-   TODAC은 언제 어디서든 바로 상담받을 수 있는 AI 심리 상담 서비스입니다.
-   언제든 대기하고 있는 상담사들과 실시간으로 채팅할 수 있고, 여러분이 직접 상담사를 커스텀할 수도 있답니다!
-   상담이 끝나면 요약본과 진단서를 제공받을 수도 있습니다.
-   커뮤니티에서는 상담 내용을 공유할 수 있고, 간단한 미니게임도 진행할 수 있습니다.
-   TODAC은 항상 당신의 곁에 있으니, 어려울 때 저희를 찾아주세요!

➕ 주요 기능

<pre>
·상담사를 선택할 수 있고, 자신만의 상담사 커스텀 가능
·상담 요약본 및 진단서 제공
·소통을 위한 게시판 제공
·구체적인 검색을 위한 필터 제공
·프로필을 꾸밀 수 있고, 업적기능을 통해 참여도 공유 가능
·1대1 문의 및 도움말 제공
·게임을 통하여 포인트 적립 가능
</pre>

### <a name="section2" />💼프로젝트 산출물 [🔝](#section0)

-   소스코드 <br> [Github - https://github.com/cwt629/TODAC](https://github.com/cwt629/TODAC)

-   [프로젝트 PPT 자료](https://acrobat.adobe.com/id/urn:aaid:sc:AP:c6587bd4-9880-4076-98d9-4666bd8b86a4)

-   [타임라인](https://acrobat.adobe.com/id/urn:aaid:sc:AP:30adedde-5dfc-4e14-926f-a71d19c19fd5)

-   [기능 구현 추적](https://acrobat.adobe.com/id/urn:aaid:sc:AP:75fda4e5-993c-46d5-8b5d-3e10e8a9eaf8)

-   **프로젝트 발표 영상**<br>
    [![TODAC프로젝트](https://i.ytimg.com/vi/o5niu0Hq_1A/hqdefault.jpg)](https://www.youtube.com/watch?v=o5niu0Hq_1A&t=1588s)

```
개발 의도 : 00:09:33 ~ 00:10:30
기술 소개 : 00:02:20 ~ 00:05:00
```

-   **TODAC 시연 영상**<br>
    [![TODAC프로젝트](https://i.ytimg.com/vi/2tgUH4aDxMA/hqdefault.jpg)](https://www.youtube.com/watch?v=2tgUH4aDxMA)

### <a name="section3" />👤역할 및 담당 업무 [🔝](#section0)

-   Cloud Native Operator : VPC구성, Subnet구성, LoadBalancer설정, SSL 인증, Cloud DB 설정, 도커 이미지 관리 등(Docker Compese, Docker File)
-   담당 시스템 : 커뮤니티
-   그 외 담당 업무 : 시연영상 제작

---

### <a name="section4" />⚙️담당 서브 시스템 구현 기능 [🔝](#section0)

#### 1\. 게시글 작성, 수정, 삭제

> 대표 사진 업로드 및 수정 가능. 게시글 작성 횟수에 따른 타이틀(업적) 기능 제공. 본인의 글만 수정 및 삭제 가능. 관리자 계정 로그인 시 모든 게시글에 대한 삭제 권한 제공.

<table width='100%'>
    <tr>
      <td align=center width='50%'>
        <b>게시글 작성</b>
      </td>
      <td align=center width='50%'>
        <b>게시글 수정</b>
      </td>
    </tr>
    <tr>
      <td align=center>
        <img src="https://github.com/cwt629/TODAC/assets/81515049/61785115-77da-4d96-ad85-faf21ea88885" width="200" height="400" alt="new">
      </td>
      <td align=center>
        <img src="https://github.com/cwt629/TODAC/assets/81515049/77d19398-74e7-46ed-ba0c-f605b7d61f71" width="200" height="400" alt="modify">
      </td>
    </tr>
    <tr>
      <td align=center width='50%'>
        <b>게시글 삭제</b>
      </td>
    </tr>
    <tr>
      <td align=center>
        <img src="https://github.com/user-attachments/assets/fd2b2b59-805b-4eaf-a3e7-a6f0ea3fdf1b" width="200" height="400" alt="delete">
      </td>
    </tr>
  </table>

#### 2\. 게시글 좋아요, 조회수에 따른 정렬과 검색 기능

> 게시글에 대한 좋아요 기능 제공, 게시글에 대한 도메인 로딩 시 조회수 증가. Sort By 함수를 사용하여 최신순, 좋아요순, 조회수순으로 정렬 제공.

<table width='100%'>
    <tr>
      <td align=center width='50%'>
        <b>게시글 좋아요 기능</b>
      </td>
      <td align=center width='50%'>
        <b>Sort By를 통한 게시글 정렬</b>
      </td>
    </tr>
    <tr>
      <td align=center>
      <img src="https://github.com/user-attachments/assets/caa8d3cb-9290-4fa3-9b6a-c7a81d965062" width="200" height="400" alt="likesortby">
      </td>
      <td align=center>
        <img src="https://github.com/user-attachments/assets/fd465722-cf98-4b6b-8ec6-64be180fde40" width="200" height="400" alt="sortby">
      </td>
    </tr>
    <tr>
      <td align=center width='50%'>
        <b>게시글 검색 기능</b>
      </td>
    </tr>
    <tr>
      <td align=center>
        <img src="https://github.com/user-attachments/assets/57f136eb-e69f-49c2-98b6-fc85563b753a" width="200" height="400"
        alt="search">
      </td>
    </tr>
  </table>

#### 3\. 댓글 작성, 삭제

> 게시글에 대해 댓글 작성과 삭제 기능 제공

<table width='100%'>
    <tr>
      <td align=center width='100%'>
        <b>댓글 작성 및 삭제</b>
      </td>
    </tr>
    <tr>
      <td align=center>
      <img src="https://github.com/user-attachments/assets/e02c4943-096c-4175-8c25-8ab204115e8b" width="200" height="400" alt="likesortby">
      </td>
    </tr>
  </table>

#### 4\. 게시글 공유, SNS 공유

> 게시글 링크 복사 기능 제공, 카카오톡 공유 기능 제공

<table width='100%'>
    <tr>
      <td align=center width='50%'>
        <b>게시글 링크 공유 기능</b>
      </td>
      <td align=center width='50%'>
        <b>SNS 카카오톡 공유 기능</b>
      </td>
    </tr>
    <tr>
      <td align=center>
      <img src="https://github.com/cwt629/TODAC/assets/81515049/738fbc08-69cf-4779-868e-6751f0f3722c" width="200" height="400"
      alt="url">
      </td>
      <td align=center>
        <img src="https://github.com/cwt629/TODAC/assets/81515049/f613a796-3835-429e-9263-ed1171e563b6" width="200" height="400"
        alt="kakaoLink">
      </td>
    </tr>
  </table>

---

## <a name="section5" />♾️DevOps [🔝](#section0)

![DevOps (1)](https://github.com/user-attachments/assets/b305d17c-6c7f-477c-94f6-8f63409d44e7)

<details>
  <summary>사용 기술 자세히보기</summary> 
    <div markdown="1">
        <ul>
            <li>Front-end : React 18, React-Router v6, MUI(UI/UX), clipboard, Kakao-js-sdk, axios, sweetalert2</li>
            <li>Back-end :JAVA 17, spring boot, spring sequrity, JPA, Node.js 21, jwt, aws-java-sdk-s3, lombok, OAuth 2.0, MySQL </li>
            <li>Naver Cloud Platfrom : VPC, Server, Global DNS, Certificate Manager, Cloud DB for MySQL, Load Balancer, CDN+, ObjectStorage</li>
            <li>Tools :npm, gradle, Jenkins, Docker, VS Code, Intellij IDEA </li>
            <li>WAS : Spring Boot Embedded Tomcat</li>
        </ul>
</details>

---

## <a name="section6" />🏗️CI/CD 구성 [🔝](#section0)

![Group 2](https://github.com/user-attachments/assets/ea8ddd60-b988-4011-9393-8bf8c3efa590)

<details>
  <summary>CI/CD 구성 자세히보기</summary>
    <div markdown="1">
        <ul>
            <li>
            빌드 및 배포 과정
            
1. 코드 푸시 (GitHub Repository에 Push): 개발자가 로컬 환경(IntelliJ IDEA 등)에서 코드를 수정하고, GitHub Repository에 코드를 푸시합니다.

2. Jenkins에 Webhook 전달 (빌드 유발):GitHub에서 코드가 푸시되면 Webhook을 통해 Jenkins 서버에 빌드 요청을 전달합니다.
   Jenkins는 이 Webhook을 트리거로 사용하여 빌드 작업을 시작합니다.

3. Gradle 빌드:Jenkins는 Gradle을 사용하여 프로젝트를 빌드합니다.
   이 단계에서 소스 코드를 컴파일하고, 테스트를 수행하며, 최종적으로 실행 가능한 JAR 파일을 생성합니다.

4. Docker 이미지 빌드:빌드된 JAR 파일을 기반으로 Docker 이미지를 생성합니다.
   Dockerfile을 사용하여 필요한 환경을 설정하고, JAR 파일을 이미지에 포함시킵니다.

5. Docker 이미지 푸시 (Docker Hub):
   생성된 Docker 이미지를 Docker Hub에 푸시합니다.
   Docker Hub는 이미지 저장소로, 여기서 이미지를 쉽게 관리하고 배포할 수 있습니다.

6. Docker 이미지 풀 (Naver Cloud Platform):Naver Cloud Platform에서 Docker Hub에 있는 이미지를 가져옵니다.
   이는 운영 환경에서 이미지를 사용하기 위해 필요한 단계입니다.

7. Docker 이미지 실행 (Spring Boot):가져온 Docker 이미지를 실행하여 Spring Boot 애플리케이션을 구동합니다.
   이는 실제 운영 환경에서 애플리케이션이 서비스되도록 하는 단계입니다.
   </li>
   </ul>
   </details>

---

## <a name="section7" />💽ERD [🔝](#section0)
![DB설계서](https://github.com/user-attachments/assets/32081985-aae8-4c97-b6bb-4f32c7329b3a)

---

## <a name="section8" />📊GitBranch 전략 [🔝](#section0)

![gitbranch 전략](https://github.com/user-attachments/assets/b038eeeb-1a1c-4aaa-90d3-6134de6c24fd)

<details>
  <summary>사용 전략 자세히보기</summary>

> 명확한 브랜치 구조, 안정적인 배포 관리, 협업 용이성을 위해 Git-flow 전략을 선택

<div markdown="1">
<ul>
    <li>master : 제품으로 출시될 수 있는 브랜치<br>
        develop : 다음 출시 버전을 개발하는 브랜치<br>
        feature : 기능을 개발하는 브랜치<br>
        release : 이번 출시 버전을 준비하는 브랜치<br>
        hotfix : 출시 버전에서 발생한 버그를 수정 하는 브랜치</li>
<br>    
<li>

1. 처음에는 master와 develop 브랜치가 존재합니다.develop 브랜치는 master에서부터 시작된 브랜치입니다.
2. develop 브랜치에서는 상시로 버그를 수정한 커밋들이 추가됩니다. 새로운 기능 추가 작업이 있는 경우 develop 브랜치에서 feature 브랜치를 생성합니다.feature 브랜치는 언제나 develop 브랜치에서부터 시작하게 됩니다.
3. 기능 추가 작업이 완료되었다면 feature 브랜치는 develop 브랜치로 merge 됩니다.
4. develop에 이번 버전에 포함되는 모든 기능이 merge 되었다면 QA를 하기 위해 develop 브랜치에서부터 release 브랜치를 생성합니다. QA를 진행하면서 발생한 버그들은 release 브랜치에 수정됩니다.
5. QA를 통과했다면 release 브랜치를 master와 develop 브랜치로 merge 합니다. 마지막으로 출시된 master 브랜치에서 버전 태그를 추가합니다.</li>

<br>
</ul>
</details>

---

## <a name="section9" />✔️문제 해결 부분 [🔝](#section0)

#### 1. 코드 관련 부분

> 외부인에게 공유된 게시물만 보이게하고 로그인 세션으로 리턴해야하는 보안문제

<details>
  <summary>코드 관련 문제 해결 자세히 보기</summary> 
    <div markdown="1">
        <ul>
            <li>문제 사항 및 고려 사항

-   복사된 링크나 SNS공유로 외부인이 접근했을 때 아이디가 없음에도 접근할 수 있는 문제 </li>

<li>
    해결방법
<ul>
<li>외부인의 접근을 위해 RouterBoardMain의 접근 제한을 해제하였습니다.</li>
<details>
  <summary>RouterBoardMain 설정 코드 자세히 보기</summary> 
    <div markdown="1">

```javascript
import React from "react";
import Header from "../Header";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer";
import BoardMain from "../components/community/board/BoardMain";
import BoardForm from "../components/community/board/BoardForm";
import BoardDetail from "../components/community/board/BoardDetail";
import BoardUpdateForm from "../components/community/board/BoardUpdateForm";

const RouterBoardMain = () => {
    return (
        <div className='app'>
            <Header />

            <div className='appcontent'>
                <Routes>
                    <Route path='' element={<BoardMain />} />
                    <Route path='form' element={<BoardForm />} />
                    <Route path='detail/:boardcode' element={<BoardDetail />} />
                    <Route path='updateform/:boardcode' element={<BoardUpdateForm />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
};

export default RouterBoardMain;
```

</details>
</ul>

-   해당 게시물의 모든 사용자 접근을 허용하여 게시물을 볼 수 있도록 해결
<li>외부인은 다른 url 접근 허용 불가해야하므로 BoardComment와 BoardDetail에 클릭 이벤트 핸들러를 추가하여 클릭 시 로그인으로 return 되도록 하였습니다.</li>
<details>
  <summary>이벤트 핸들러 설정 코드 자세히 보기</summary> 
    <div markdown="1">

```javascript
//BoardComment의 이벤트 핸들러
const handlePaperClick = () => {
    // 비로그인 사용자인 경우 로그인 안내 메시지 출력
    if (!usercode) {
        showLoginPrompt("로그인 하시겠습니까?");
    }
};
//BoardDetail의 이벤트 핸들러
const handleLike = async () => {
    if (!id) {
        showLoginPrompt("로그인 하시겠습니까?");
        return;
    }

    try {
        await axios.post(`/post/like?boardcode=${boardcode}&usercode=${sessionStorage.getItem("usercode")}`);
        setIsLiked(true);
        setLikeCount((prev) => prev + 1); // 좋아요 수 증가
    } catch (error) {
        console.error("Error liking board:", error);
    }
};
//공용 handleLike 코드
const showLoginPrompt = (message) => {
    Swal.fire({
        title: "로그인이 필요합니다",
        text: message,
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#5279FD",
        confirmButtonText: "로그인",
        cancelButtonText: "취소",
    }).then((result) => {
        if (result.isConfirmed) {
            // 로그인 페이지로 이동
            window.location.href = "/login";
        }
    });
};
```

</details>
</ul>

</li>
        </ul>
</details>
<br>

#### 2. 제한된 API 관련 부분

> Clipboard API는 https OR localhost인 사이트에서만 동작하는 문제

<details>
  <summary>API 관련 문제 해결 자세히 보기</summary> 
    <div markdown="1">
        <ul>
            <li>문제 사항 및 고려 사항

-   Clipboard API는 브라우저 보안 프로토콜로 인해서 https 환경에서만 지원하는 문제
-   execCommand() 는 deprecated 되어 사용하기 껄끄러운 문제
-   https로 변경 시 비용이 추가되기에 http를 사용하며 공유기능 추가하기 위한 목표
    </li>

<li>
    해결방법

-   clipboard.js 라이브러리를 추가하여 사용함으로 해결하였습니다.
<details>
  <summary>사용 기술 자세히보기</summary> 
    <div markdown="1">
        <ul>

```javascript
const handleCopyClipBoard = () => {
    const clipboard = new ClipboardJS(".copy-button", {
        text: function () {
            return `http://175.45.192.182${location.pathname}`;
        },
    });

    clipboard.on("success", function (e) {
        Swal.fire({
            title: "URL이 복사 되었습니다!",
            // text: e.text,
            icon: "success",
            confirmButtonColor: "#5279FD",
            confirmButtonText: "확인",
        });
    });

    clipboard.on("error", function (e) {
        console.error("클립보드 복사 실패", e);
    });

    // 클립보드에 복사를 시도
    clipboard.onClick({ delegateTarget: document.querySelector(".copy-button") });
};
```

   </ul>
</details>

</ul>
</details>

#### 3. 팀워크 관련 부분

> Back End 기술로 JPA 선정시 새로운 기술 적응에 대한 우려가 있는 팀원과의 소통

<details>
  <summary>팀 워크 관련 문제 해결 자세히 보기</summary> 
    <div markdown="1">
        <ul>
            <li>문제 사항 및 고려 사항

-   ORM 기술 습득과 더불어 개발 속도를 높이고, 데이터베이스 코드의 유지 보수성을 향상시키기 위한 목표
-   정규 수업시간에 배운 전통적인 MVC패턴 구현을 위한 기술 스택인 JSP, SPRING BOOT에 아직 어려움을 겪고 있던 팀원 들은 새로운 기술 습득 및 적용에 대한 부담이 우려되는 상황
    </li>

<li>
    해결방법

-   조금 더 늦게까지 남거나 주말간 코딩을 진행하여 저에게 할당된 분량을 먼저 빠르게 처리하였습니다.
-   그 후 JPA 핵심 개념과,ORM 매핑 과정, 어노테이션 사용법 등에 관한 예시 코드를 작성하고, 지식을 공유하였습니다.
-   위 과정들을 통해 팀 원들이 새 기술에 적응할 수 있다는 생각을 할 수 있도록 장려하였습니다.
-   결과적으로 완벽하게 JPA를 사용하지 못했지만, JPA의 전반적인 이해와 편리성에 대해 이해하고 새로운 기술도입을 바탕으로 얻는 이점을 느낄 수 있었다고 생각합니다.
</li>
        </ul>
</details>

---

## <a name="section10" />🔧아쉬운 점 및 추가하고 싶은 기능 [🔝](#section0)

**1. 토큰 방식 인증, 인가**

<details>
  <summary>자세히 보기</summary> 
    <div markdown="1">
      <ul>
  <li>선정 이유

-   전통적인 Session 방식이 아닌 최근 인증과 인가에 많이 사용되는 JWT를 제대로 이해하여 사용해 보고 싶습니다.
-   또, JWT의 보안 문제들을 해결할 수 있는 여러 방안들에 대해 고민하고 적용해 보고 싶습니다. </li>

<li>추후 관련 지식 습득을 위한 키워드

- JWT, Authentication(인증), Authorization(인가, 권한 부여) </li>
</ul>
    </details>
<br>

**2. 조회수가 두번 씩 찍히는 문제**

<details>
  <summary>자세히 보기</summary> 
    <div markdown="1">
      <ul>
  <li>선정 이유

-   해당 게시물 클릭 시 조회수가 두 번씩 찍히는 문제를 발견하였습니다.
-   react 에서 useEffect 가 2번 호출되는 현상이라고 생각되어 확인해보았지만 뒷단의 문제임을 확인할 수 있었습니다.
-   동시성을 고려한 프로그래밍을 하지 못하여 나타난 문제라고 생각이 들었지만 메인 프로젝트시 한정된 시간 문제로 끝내 개선시키지 못했기에 많은 아쉬움이 남아서 선택했습니다. </li>

<li>개선 방향

-   쿠키를 활용하여 계정이 중복으로 조회수를 올릴 수 없게 제한을 두는 방법입니다. </li>

<li>추후 관련 지식 습득을 위한 키워드

-   동시성 이슈, Session&Cookie </li>
</ul>
    </details>
<br>

**3. 페이징 처리**

<details>
  <summary>자세히 보기</summary> 
    <div markdown="1">
      <ul>
  <li>선정 이유

-   프론트엔드에서 게시물들의 페이징 처리를 진행하여 프론트엔드에서 구현한 페이지네이션은 처음에 모든 게시글 데이터를 가져와야 한다는 치명적인 단점이 존재하였습니다.
-   또한, 필터링 기능도 추가하여 게시글 수가 많아질수록 이 단점이 부각되는것을 알게 되었습니다.
-   데이터가 클라이언트 측으로 노출될 수도 있으니 보안 측면에서도 좋지 않다는 사실을 알게 되어 백엔드에서 페이징처리를 하지 못한 것에 아쉬움이 남았습니다. </li>

<li>개선 방향

-   데이터양에 맞는 페이징처리를 구현할 수 있도록 사전조사를 기반으로 Offset 방식과 Cursor 방식의 페이징 기법을 적용합니다. </li>

<li>추후 관련 지식 습득을 위한 키워드

-   Offset, Cursor 방식의 페이징 기법, MVC, CRUD 연동 </li>
</ul>
    </details>
<br>

**4. objectstorage 사진 용량 크기 제한**

<details>
  <summary>자세히 보기</summary> 
    <div markdown="1">
      <ul>
  <li>선정 이유

-   ObjectStorage 업로드 이미지 크기가 2GB로 제한되어 용량이 큰 사진들은 업로드가 되지 않는 문제가 있었습니다.
-   사용자들은 대부분 휴대폰으로 이미지를 업로드하기에 제한되는 이미지가 많아 불편함을 토로하였습니다. </li>

<li>개선 방향

-   이미지를 그대로 ObjectStorage에 업로드 하지 않고 서버측에서 이미지를 압축하여 압축된 이미지를 업로드하여 저장하고 사용자에게는 이미지 디코딩을 통하여 이미지를 제공합니다. </li>

<li>추후 관련 지식 습득을 위한 키워드

-   Deflater, Inflater, ByteArrayOutputStream, 손실 압축, 무손실 압축 </li>
</ul>
    </details>
<br>

**5. intercetpor를 사용하여 권한 설정**

<details>
  <summary>자세히 보기</summary> 
    <div markdown="1">
      <ul>
  <li>선정 이유

-   Router를 사용하여 간단하게 로그인 확인 로직을 구현했지만 보안이 취약하다는 단점과 중요한 API 요청에 대해서는 여전히 서버 측 검증이 필요함을 느끼게 되었습니다. </li>

<li>개선 방향

-   로그인 여부를 확인하는 로직이 필요한데 인터셉터를 이용하여 이 로그인확인 로직을 하나의 인터셉터로 처리할 수 있습니다. </li>

<li>추후 관련 지식 습득을 위한 키워드

-   DispatcherServlet, HttpRequest, HttpResponse, HandlerInterceptor </li>
</ul>
    </details>

---

## <a name="section11" />💭프로젝트 소감 및 의의 [🔝](#section0)

-   지난 한 달간의 프로젝트는 제게 여러 가지 측면에서 의미 있는 경험으로 남았습니다.  
    먼저, 게시판을 제작하며 CRUD를 토대로 전반적인 프론트엔드와 백엔드의 소통을 더욱 잘 이해할 수 있었고 새로운 기술과 도전에 부딪히는 경험을 쌓았습니다.  
    이론으로만 이해했던 기술들을 실제로 프로젝트에 녹여내면서 제 역할에서의 능력을 한층 향상시킬 수 있었습니다.

-   뿐만 아니라, 팀 내에서의 협력은 프로젝트의 핵심이었습니다. 많은 에러들과 어려운 문제에 직면했을 때 팀원들과
    함께 고민하고 해결책을 찾아내는 과정에서 팀워크의 중요성을 몸소 깨달았습니다.  
    또한, 이전의 프로젝트의 문제점들과 아쉬웠던 부분을 꼼꼼히 분석하고 보완하기 위해 노력했습니다.  
    팀원들과의 소통과 피드백을 수용하며 프로젝트에 적용한 결과, 각자 최대의 역량으로 서로 도우며 프로젝트에 임할 수 있었습니다.

-   세상에 완벽한 팀은 없을 것 입니다. 하지만 내가 먼저 동료이 짐을 덜어 짊어지고 책임을 질 수 있다면 결국 힘든 과정에서도 서로를 이끌어주며 목표를 완수할 수 있다는 점을 배웠습니다. 때문에 저는 앞으로의 많은 실무 프로젝트를 수행할 때에도 적극적으로 많은 책임을 짊어지는 개발자가 되리라 다짐했습니다.
