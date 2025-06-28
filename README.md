# cllaude99_lib

<div align="center">
    <img src="https://img.shields.io/badge/Node.js-20.11.0-339933?logo=nodedotjs"/>
    <img src="https://img.shields.io/badge/pnpm-8.15.6-F69220?logo=pnpm"/>
    <img src="https://img.shields.io/badge/TypeScript-5.3.3-3178C6?logo=typescript"/>
    <br />
    <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react"/>
    <img src="https://img.shields.io/badge/Vite-5.0.10-646CFF?logo=vite"/>
    <img src="https://img.shields.io/badge/Storybook-7.6.7-FF4785?logo=storybook"/>
    <br />
    <img src="https://img.shields.io/badge/Emotion-11.11.3-DB7093?logo=emotion"/>
    <img src="https://img.shields.io/badge/Turborepo-2.5.4-EF4444?logo=turborepo"/>
    <img src="https://img.shields.io/badge/ESLint-8.57.0-4B32C3?logo=eslint"/>
    <img src="https://img.shields.io/badge/Prettier-3.5.3-F7B93E?logo=prettier"/>
</div>

## 프로젝트 소개

cllaude99_lib는 모던하고 확장 가능한 React 컴포넌트 라이브러리입니다. Turborepo를 기반으로 한 모노레포 구조를 채택하여 효율적인 개발 환경을 제공합니다.

### 주요 특징

- 🚀 **Turborepo 기반 모노레포**: 빠른 빌드 속도와 효율적인 패키지 관리
- 💅 **Emotion을 활용한 스타일링**: CSS-in-JS로 컴포넌트별 스타일 캡슐화
- 📱 **반응형 디자인**: 모바일 퍼스트 접근으로 다양한 디바이스 지원
- 📚 **Storybook 문서화**: 컴포넌트 문서화 및 시각적 테스트 환경 제공
- 🔍 **TypeScript**: 정적 타입 검사로 안정적인 개발 경험 제공

### 패키지 구조

```
cllaude99_lib
├── apps
│   └── web                 # 컴포넌트 라이브러리 데모 및 문서화 웹사이트
├── packages
│   ├── ui                  # 핵심 UI 컴포넌트 라이브러리
│   ├── eslint-config      # 공유 ESLint 설정
│   └── typescript-config  # 공유 TypeScript 설정
└── config files
    ├── .eslintrc.js       # ESLint 설정
    ├── .prettierrc        # Prettier 설정
    ├── turbo.json         # Turborepo 파이프라인 설정
    └── pnpm-workspace.yaml # 워크스페이스 설정
```

### 패키지 설명

- **apps**

  - `web`: 컴포넌트 라이브러리 데모 및 문서화 웹사이트

- **packages**

  - `ui`: 핵심 UI 컴포넌트 라이브러리
  - `eslint-config`: 공유 ESLint 설정
  - `typescript-config`: 공유 TypeScript 설정

- **설정 파일**
  - `turbo.json`: Turborepo 파이프라인 설정
  - `pnpm-workspace.yaml`: 워크스페이스 설정
  - `.eslintrc.js`: ESLint 설정
  - `.prettierrc`: Prettier 설정

### 시작하기

```bash
# 패키지 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 빌드
pnpm build

# 린트 실행
pnpm lint
```
