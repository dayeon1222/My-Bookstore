import styled from 'styled-components';

// 왼쪽 페이지 (텍스트)
export const LeftPage = styled.div`
	flex: 1;
	padding: 60px 45px;
	overflow-y: auto;
	background: white;

	//태블릿
	@media (max-width: 768px) {
		flex: none;
		padding: 85px 25px 30px;
	}
`;

//오른쪽 페이지 (이미지 영역)
export const RightPage = styled.div`
	flex: 1;
	padding: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #fcfcfc;
	position: relative;

	//태블릿
	@media (max-width: 768px) {
		flex: none;
		padding: 0 25px 120px;
		background-color: #fff;
	}
`;

// 페이지 내부 정렬
export const PageInner = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;

	justify-content: ${props =>
		props.$align === 'center' ? 'center' : 'flex-start'};

	align-items: ${props =>
		props.$align === 'center' ? 'center' : 'flex-start'};
`;
// 텍스트 스타일
export const ChapterTitle = styled.h2`
	font-size: 1.8rem;
	margin-bottom: 2rem;
	color: #222;
	font-weight: 700;
	word-break: keep-all;

	//모바일
	@media (max-width: 360px) {
		font-size: 1.5rem;
		line-height: 1.3;
	}
`;

export const ChapterContent = styled.div`
	font-size: 1.1rem;
	line-height: 1.9;
	color: #333;
	white-space: pre-wrap;
	word-break: keep-all;

	@media (max-width: 360px) {
		font-size: 1rem;
	}
`;

// 이미지 래퍼 (본문 이미지)
export const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
	flex: 1;
	height: 100%;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
	z-index: 5;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	//태블릿
	@media (max-width: 768px) {
		margin-top: 20px;
		min-height: 400px;
	}
`;

// 하단 네비게이션
export const FixedUI = styled.div`
	position: absolute;
	bottom: 30px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	align-items: center;
	gap: 25px;
	z-index: 9999;

	//태블릿
	@media (max-width: 768px) {
		position: fixed;
		bottom: 0;
		width: 100%;
		background: rgba(255, 255, 255, 0.98);
		backdrop-filter: blur(10px);
		padding: 20px;
		justify-content: center;
		border-top: 1px solid #eee;
	}
`;

export const NavButton = styled.button`
	padding: 12px 28px;
	background: #222;
	color: #fff;
	border: none;
	border-radius: 30px;
	cursor: pointer;
	font-weight: 600;
	transition: background 0.2s;
	opacity: ${props => (props.$disabled ? 0.2 : 1)};
	pointer-events: ${props => (props.$disabled ? 'none' : 'auto')};

	&:hover {
		background: #000;
	}
`;

// 커버이미지
export const CoverImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: auto;
	flex: 1;
	min-height: 500px;
	border-radius: 8px;
	overflow: hidden;

	//태블릿
	@media (max-width: 768px) {
		height: 350px;
		img {
			object-fit: cover;
		}
	}
`;

export const EmptyImage = styled.div`
	width: 100%;
	height: 300px;
	background: #f0f0f0;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ccc;
`;

// 표지 제목 영역
export const CoverTitleArea = styled.div`
	text-align: center;
	padding: 20px 0;
`;

export const MainTitle = styled.h1`
	font-size: 2.3rem;
	margin-bottom: 1.5rem;
	color: #222;
	word-break: keep-all;
`;

export const MainDescription = styled.p`
	font-size: 1.15rem;
	color: #666;
	line-height: 1.7;
`;

export const PageIndicator = styled.span`
	color: #888;
	font-size: 0.95rem;
	font-weight: 500;
`;
