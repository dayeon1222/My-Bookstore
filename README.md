# My Bookstore

## 기획 의도: "마음을 움직이는 짧은 순간"

단순히 나를 소개하는 페이지를 넘어, 한 권의 인터랙티브 북을 통해 나의 이야기를 담고자 했습니다. 웹페이지는 방문자의 짧은 찰나를 사로잡아야 하며, 그 순간에 사람의 마음을 움직일 수 있어야 한다고 믿습니다.
이야기 끝에 배치된 초대장처럼 함께 나아갔으면 좋겠습니다.

1. 어린이들에게: 독서의 즐거움을
   책을 멀리하는 아이들이 웹이라는 친숙한 환경에서 직접 화면을 넘기고 상호작용하며, "책도 이렇게 재미있을 수 있구나"라는 새로운 경험을 가질 수 있기를 바랐습니다.

2. 어른들에게: 공감과 위로의 연대
   치열한 삶 속에서 저와 닮은 고민을 하고, 비슷한 상황을 겪고 있는 어른들에게 "혼자가 아니다"라는 힘을 주고 싶었습니다.

3. 나 자신에게: "나의 이야기는 여기서 끝나지 않기에"
   이 페이지는 저의 과거와 현재를 기록하는 동시에, 앞으로 펼쳐질 더 넓은 세상을 향한 예고편이기도 합니다.

## 주요 기능

- **인터랙티브 리딩**: 단순한 텍스트 나열이 아닌, 왼쪽(텍스트)과 오른쪽(삽화)이 조화된 책 형태의 UI를 제공합니다.
- **스토리별 테마 적용**: '두더지 이야기'와 같은 특정 스토리에는 다크 모드와 스포트라이트 효과가 자동으로 적용됩니다.
- **반응형 디자인**: 데스크탑의 '책' 레이아웃부터 모바일의 '세로형 리더'까지 최적화된 경험을 제공합니다.
- **엔딩 이벤트**: 이야기의 끝에서 나타나는 초대장과 특별한 선물 레이어로 몰입감 있는 마무리를 선사합니다.

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Styled-components
- **State Management**: React Hooks (`useState`, `use`)
- **Animation**: CSS Transitions & Lucide Icons

## Project Structure

src/
├── app/ # Next.js App Router (페이지 및 레이아웃)
├── components/ # 재사용 가능한 UI 컴포넌트 (BookReader, EndingLayers 등)
├── data/ # 스토리 콘텐츠 데이터 (JSON/JS 자료형)
└── styles/ # Styled-components 통합 관리 파일

## Troubleshooting (오류 해결 및 도전 과제)

1. Next.js Image 컴포넌트의 fill 속성 활용
   문제: 반응형 레이아웃에서 이미지의 정확한 크기(width/height)를 미리 알 수 없어 레이아웃이 깨지는 현상 발생.

해결: fill 속성과 object-fit: contain을 조합하여 부모 요소의 크기에 맞춰 이미지가 유연하게 조절되도록 구현함. 이때 부모 요소에 position: relative를 설정하여 이미지의 기준점을 명확히 함.

2. JSX 내 특수문자(Apostrophe) 이스케이프 처리
   문제: 문장 내에 '(작은따옴표)가 포함될 경우 JSX가 이를 코드로 인식하여 구문 오류(Syntax Error) 발생.

해결: '를 &apos; 또는 {"'"}와 같은 형태로 이스케이프 처리하거나 전체 문장을 백틱(``)으로 감싸 안전하게 렌더링함.

3. 텍스트 가독성 및 줄바꿈 최적화 (Word-break)
   문제: 모바일이나 좁은 화면에서 한글 문장이 단어 단위가 아닌 글자 단위로 잘려 가독성이 저하되는 현상 발생.

해결: CSS의 word-break: keep-all과 overflow-wrap: break-word 속성을 적용하여, 단어 형상을 유지하면서도 박스 밖으로 글자가 나가지 않도록 가독성을 개선함.

## 고쳐야할 오류

문제 (Error Message)
A tree hydrated but some attributes of the server rendered HTML didn't match the client properties.
서버에서 만든 HTML과 클라이언트(브라우저)에서 렌더링한 HTML 구조가 일치하지 않아 발생하는 에러입니다.
