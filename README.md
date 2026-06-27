# 김동규 경력 포트폴리오

재무·회계·인사·총무·경영지원 직무 지원을 위한 개인 경력 포트폴리오입니다.

이 홈페이지는 개발 프로젝트보다 김동규의 실무 경력, 담당 업무 범위, 업무개선 경험을 먼저 보여주도록 구성되어 있습니다.

## 기술 스택

- React
- TypeScript
- Vite
- CSS
- GitHub Pages
- GitHub Actions

## 로컬 실행

```powershell
npm ci
npm run dev
```

## 빌드

```powershell
npm run lint
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

## 주요 수정 위치

경력 정보, 업무 역량, 주요 업무 경험, 업무개선 사례, 개인 프로젝트, 이메일과 홈페이지 주소는 모두 `src/data/portfolio.ts`에서 관리합니다.

- 공개하지 않을 전화번호와 거주지는 추가하지 않습니다.
- 확인되지 않은 경력연수, 성과 수치, 매출·금액 정보는 작성하지 않습니다.
- 개인 프로젝트 링크가 실제로 없으면 `url: undefined` 상태로 두면 “준비 중”으로 표시됩니다.

## 프로필 사진 추가 방법

정장 프로필 사진을 추가하려면 이미지를 아래 경로에 넣습니다.

```text
src/assets/profile/profile-suit.png
```

그다음 `src/data/portfolio.ts`에서 import한 뒤 `personalInfo.profileImage`에 연결합니다.

```ts
import profileSuitImage from '../assets/profile/profile-suit.png';

profileImage: profileSuitImage,
```

사진이 없으면 프로필 사진 영역은 표시되지 않습니다.

## 개인 프로젝트 이미지 추가 방법

개인 프로젝트 이미지는 `src/assets/projects/` 폴더에 있습니다.

1. 이미지 파일을 `src/assets/projects/`에 넣습니다.
2. `src/data/portfolio.ts` 상단에서 이미지 파일을 import합니다.
3. 해당 프로젝트의 `images` 배열에 `{ src, alt }` 형식으로 추가합니다.

## GitHub Pages 배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`의 GitHub Actions가 실행됩니다.

배포 과정:

1. `npm ci`
2. `npm run lint`
3. `npm run build`
4. GitHub Pages artifact 업로드
5. GitHub Pages 배포

Vite `base`는 개인 GitHub Pages 저장소인 `rlaehdrb1217.github.io`에 맞춰 `/`로 설정되어 있습니다.
