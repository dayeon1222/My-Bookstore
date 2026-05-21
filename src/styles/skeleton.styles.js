import styled, { keyframes } from 'styled-components';

// 슥 지나가는 반짝임 효과 애니메이션
const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// 모든 스켈레톤 박스의 기본 베이스 (반짝이는 회색 배경)
export const SkeletonBox = styled.div`
	background: linear-gradient(90deg, #f2f2f2 25%, #ececec 50%, #f2f2f2 75%);
	background-size: 200% 100%;
	animation: ${shimmer} 1.5s infinite linear;
	border-radius: 6px;
`;

// 전체 화면 레이아웃 (기존 FullContainer 감성 유지)
export const SkeletonContainer = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
	background: #f9f9f9;
	position: relative;
`;

// 책 형태로 접혀있는 중앙 박스 (BookWrapper 크기와 싱크 맞춤)
export const SkeletonBook = styled.div`
	display: flex;
	width: 90%;
	max-width: 1200px;
	height: 80%;
	max-height: 700px;
	background: white;
	border-radius: 12px;
	box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
	overflow: hidden;

	@media (max-width: 768px) {
		flex-direction: column;
		height: 90%;
	}
`;

// 왼쪽 페이지 (텍스트 구역)
export const LeftPage = styled.div`
	flex: 1;
	padding: 60px 45px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	border-right: 1px solid #eaeaea;

	@media (max-width: 768px) {
		border-right: none;
		border-bottom: 1px solid #eaeaea;
		padding: 30px;
	}
`;

// 오른쪽 페이지 (이미지 구역)
export const RightPage = styled.div`
	flex: 1;
	padding: 40px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 768px) {
		padding: 20px;
	}
`;

// 하단 네비게이션 바 모형
export const SkeletonNav = styled.div`
	position: fixed;
	bottom: 24px;
	left: 50%;
	transform: translateX(-50%);
	width: 320px;
	height: 48px;
	background: rgba(255, 255, 255, 0.8);
	border-radius: 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 16px;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
`;
