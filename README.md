### ✔️프로젝트 관련
> 📌 **상품 등록 페이지 admin 코드
→ plugoAdmin**
>
🌱 **프로젝트 노션** : https://www.notion.so/plugo-Assignment-9afc980762784ce5a5037001d5856d50
# ✅ 과제 요구사항

### 1. Git 관리 및 시간제한

- Task 단위의 커밋
- 8시간 내로 사이트 구축

### 2. 제안 스택

- Front-end
    - React
    - Bonus : react-query, react-router-dom, recoil / zustand / redux
- Backend
    - 구현할 수 있다면 보너스, 구현 불가하다면 목업 데이터 사용

### 3. 과제 수행 MVP

- Admin: Create Product
- Product List
- Product Detail Page
- Add to Cart Button
- Cart Detail Page

<br/>
<br/>

# 🛠 Development

### ✨ Front-end ✨

**[ 사용스택 ]** : TypeScript, React.js, MSW, axios, react-query, styled-component, antd, react-router-dom

- **유지/보수성 고려**
    - 제한시간이 많지 않아 개발시 하나의 가치에 중점을 둬야 할 것 같아, 일순위로 생각하는 유지보수에 중점을 두어 개발했습니다.
    - **페이지 단에서 필요한 함수들을 hooks로 분리**해 유지 보수가 보다 쉽도록 개발했습니다.
    → 함수의 보수가 필요한 경우 해당 파일만 찾아 보수하면 되도록 개발
        
        <img width="801" alt="스크린샷 2023-06-07 오후 4 52 05" src="https://github.com/wonny-won/plugoAssignment/assets/97152701/4c087e8e-8196-480e-82d9-9e7eeac875c6">
        

- **성능 고려**
    - **캐시 최적화를 위한 react-query 사용**
        - refetch 와 같은 상황이 없어 option 조작을 따로 하지 않고 default option을 그대로 사용했습니다.
- **디자인 패턴 - hooks 패턴**
    - 원래 사용하던 container/presenter 패턴은 최신 동향과 살짝 떨어져있다고 생각해 채택했습니다.
    - hooks 패턴을 이용해 웬만하면 50줄을 넘기지 않도록 개발했습니다.

<br/>
<br/>

# 📱 Features & Screens

1. **admin - 상품 등록 페이지**
- **권한 분기** [useAuth]
    - 로그인 기능이 없어 prompt에 입력한 암호를 기준으로 분기
    - 분기 함수는 hooks로 분리해 추후 로그인이 구현 되어도 보수에 쉽도록 개발했습니다.
- 상품 등록시 [상품명, 가격, 카테고리, 디테일] 에 내용이 비워져 있으면 submit 되지 않도록 **검증**

<img width="708" alt="스크린샷 2023-06-07 오후 6 02 36" src="https://github.com/wonny-won/plugoAssignment/assets/97152701/42fc464f-1577-43c9-9e6e-66a0aece495b">

1. **상품 리스트 / 카테고리 페이지**
- Nav바 메뉴 선택시 해당 카테고리 상품만 보이도록 구현
- 모든 상품 노출

<img width="724" alt="스크린샷 2023-06-07 오후 6 02 54" src="https://github.com/wonny-won/plugoAssignment/assets/97152701/be129cae-ee18-4497-82e7-433481b74af6">

1. **상품 디테일 페이지**
- 비회원 장바구니 기능 (localStorage 사용)

<img width="869" alt="스크린샷 2023-06-07 오후 6 03 23" src="https://github.com/wonny-won/plugoAssignment/assets/97152701/14fad24a-af01-4f46-a57e-f438463ee0e0">

1. **장바구니 페이지**
- 장바구니에서 삭제하기 기능
- 내가 담은 상품 목록 조회

<img width="836" alt="스크린샷 2023-06-07 오후 6 03 45" src="https://github.com/wonny-won/plugoAssignment/assets/97152701/77ef9681-e8d2-4380-969f-0897fd8453c2">

<br/>
<br/>

# 🏹 Trouble Shooting & 과제소감

### 1️⃣ 중.꺾.마! 이겨낸 trouble들

[plugo Assignment 트러블 슈팅](https://www.notion.so/plugo-Assignment-1b20a3aed0cd4a16b39968ee5d9d6c67?pvs=21)

### 2️⃣ 과제를 제출하는 제 소감은요…

[과제 소감](https://www.notion.so/2df8a13978d34e478ff132f465372f54?pvs=21)

