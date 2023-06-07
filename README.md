<aside>
📌 **상품 등록 페이지 admin 코드
→ plugoAdmin**

</aside>

# ✅ 과제 요구사항

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

---

# 🛠 Development

### ✨ Front-end ✨

**[ 사용스택 ]** : TypeScript, React.js, MSW, axios, react-query, styled-component, antd, react-router-dom

- **유지/보수성 고려**
    - 제한시간이 많지 않아 개발시 하나의 가치에 중점을 둬야 할 것 같아, 일순위로 생각하는 유지보수에 중점을 두어 개발했습니다.
    - **페이지 단에서 필요한 함수들을 hooks로 분리**해 유지 보수가 보다 쉽도록 개발했습니다.
    → 함수의 보수가 필요한 경우 해당 파일만 찾아 보수하면 되도록 개발
        
        ![스크린샷 2023-06-07 오후 4.52.05.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd0bf54b-b94d-4263-aa91-7a1972122497/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-07_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.52.05.png)
        

- **성능 고려**
    - **캐시 최적화를 위한 react-query 사용**
        - refetch 와 같은 상황이 없어 option 조작을 따로 하지 않고 default option을 그대로 사용했습니다.
- **디자인 패턴 - hooks 패턴**
    - 원래 사용하던 container/presenter 패턴은 최신 동향과 살짝 떨어져있다고 생각해 채택했습니다.
    - hooks 패턴을 이용해 웬만하면 50줄을 넘기지 않도록 개발했습니다.

---

# 📱 Features & Screens

1. **admin - 상품 등록 페이지**
- **권한 분기** [useAuth]
    - 로그인 기능이 없어 prompt에 입력한 암호를 기준으로 분기
    - 분기 함수는 hooks로 분리해 추후 로그인이 구현 되어도 보수에 쉽도록 개발했습니다.
- 상품 등록시 [상품명, 가격, 카테고리, 디테일] 에 내용이 비워져 있으면 submit 되지 않도록 **검증**

![스크린샷 2023-06-07 오후 5.11.32.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/851c8160-7a30-48d6-901e-24df8a8758b5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-07_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.11.32.png)

![스크린샷 2023-06-07 오후 5.10.59.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/818f7dc9-d8b1-4546-8196-c122706a955e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-07_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.10.59.png)

1. **상품 리스트 / 카테고리 페이지**
- Nav바 메뉴 선택시 해당 카테고리 상품만 보이도록 구현
- 모든 상품 노출

![스크린샷 2023-06-07 오후 5.08.48.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9f1e1ccd-1be5-4be5-9f6a-907de1462a8c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-07_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.08.48.png)

![스크린샷 2023-06-07 오후 5.09.15.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9b8fd2df-7886-4dc0-bb0f-be8d9694d679/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-07_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.09.15.png)

1. **상품 디테일 페이지**
- 비회원 장바구니에 담기기능 (localStorage 사용)

![스크린샷 2023-06-07 오후 5.09.51.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/56702aec-34c1-4b2c-aea6-7f865e4904c2/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-07_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.09.51.png)

1. **장바구니 페이지**
- 장바구니에서 삭제하기 기능

![스크린샷 2023-06-07 오후 5.10.22.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ab396a69-7d02-430a-b59c-f0404ea68347/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-07_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.10.22.png)

---

# 🏹 Trouble Shooting & 과제소감

### 1️⃣ 중.꺾.마! 이겨낸 trouble들

[plugo Assignment 트러블 슈팅](https://www.notion.so/plugo-Assignment-1b20a3aed0cd4a16b39968ee5d9d6c67?pvs=21)

### 2️⃣ 과제를 제출하는 제 소감은요…

[과제 소감](https://www.notion.so/2df8a13978d34e478ff132f465372f54?pvs=21)

---

# ✅ Result

- 깃허브 : https://github.com/wonny-won/plugoAssignment
- ‼️ **해당 프로젝트는 배포를 진행하지 않았습니다.**
