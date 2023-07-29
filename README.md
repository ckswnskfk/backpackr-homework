# <img src="./src/assets/images/idus_icon_320.jpg" width="25"> 과제 전형

> Vite + Vue3 + Pinia + Typescript + Axios + Sass 등을 사용해 과제 구현  
> 기술스택  
>  ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## 과제 보기

- `npm run dev` 로 실행하실 수 있습니다.

## 기능 목록

- 입력 폼 UI
  - 텍스트 입력 시 `남은 글자 수` 표시
  - 최대 글자수 설정
  - `default`: 초기 값이 있을 수 있음. 내용이 없으면 placeholder 처리
  - `입력중`: 내용 변경 시 save 버튼 활성화(내용이 초기 값과 같으면 save 버튼 비활성화)
  - `disable`: 입력 불가 상태
  - `readonly`: 읽기 전용 상태
- 카드 UI
  - `세로형` 카드, `가로형` 카드
  - 카드 하단 텍스트 영역, `별점 처리` UI는 없을 수 있음
  - `별점 처리` UI: 1-5 사이 정수

## 웹 접근성 고려

- 스크린 리더 사용자를 위한 이미지 태그의 alt 속성을 한글로 작성했습니다.
- fieldset 내부에 legend 태그로 시멘틱한 form을 구성했고, legend 태그는 screen reader에서만 읽을 수 있도록 a11y 클래스를 만들어 부여했습니다.
- `aria-hidden="true"` 속성으로 screen reader가 읽을 필요 없는 부분을 넘어가도록 설정했습니다.

## 재사용성 고려

- 컴포넌트를 독립된 단위로 구성했습니다.
- 여러 곳에서 사용될 수 있는 상수나 함수를 따로 빼내어 재사용할 수 있게 했습니다.

## 사용한 기술 스택 및 라이브러리

1. **개발 환경**

   - Vite: create vue를 통해 자동으로 구성되므로 간단하고 최적화된 개발 경험 및 성능을 제공합니다.
   - TypeScript: 타입 검사와 코드에 대한 자동완성 기능을 제공하며 런타임 이전에 오류를 발견할 수 있으므로 코드의 안정성 및 원활한 유지 관리를 돕습니다.

2. **라이브러리**

   - Vue 3: Vue와 Composition API를 활용하여 구성 요소를 쉽게 조합하여 독립적으로 관리할 수 있는 코드 작성이 가능합니다.
   - Vue Router: 애플리케이션 내 페이지 전환 및 네비게이션을 관리하기 위한 라이브러리입니다.
   - Axios: 백엔드와 통신하며 쉽게 HTTP 요청/응답을 처리할 수 있습니다.
   - Pinia: 상태 관리 라이브러리로, Vue 3 Composition API와 보다 자연스럽게 통합되어 사용할 수 있습니다.

3. **테스팅 및 코드 품질 관리**

   - axios-mock-adapter: 백엔드를 가상으로 구현하여 개발 중인 애플리케이션에 대해 필요한 데이터를 모의로 요청할 수 있습니다.
   - eslint: 자동으로 코드의 문법 오류를 검사하고 컨벤션을 확인하여 통일된 코드 품질 유지에 돕습니다.
   - Prettier: 코드 포맷터로, 일관된 코드 스타일을 유지하고 작성을 도와줍니다.

4. **추가 개발 도구**
   - npm-run-all: 모든 NPM 작업들을 동시에 실행하게 해주는 툴. 복잡한 스크립트를 간소화해줍니다.
   - @vue/tsconfig, @tsconfig/node18, @types/node: 프로젝트 전체에서 적합한 TypeScript 구성을 제공하고 일반적인 Node.js 개발에 필요한 타입 정의를 제공합니다.
