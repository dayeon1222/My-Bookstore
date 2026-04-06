import styled, { keyframes } from 'styled-components';

// [애니메이션] 슬라이드가 바뀔 때 아래에서 위로 살짝 올라오며 나타나는 효과
const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
`;
//슬라이더 전체 배경박스
export const HeroWrapper = styled.section`
	width: 100%;
	height: 600px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	/* 서버에서 받아온 배경색($bgColor)을 적용하고, 바뀔 때 부드럽게 전환 */
	background-color: ${props => props.$bgColor || '#ffffff'};
	transition: background-color 0.8s ease-in-out;
	background-image: radial-gradient(
		circle at center,
		rgba(255, 255, 255, 0.2) 0%,
		transparent 100%
	);

	//태블릿
	@media (max-width: 768px) {
		height: 550px;
	}
	//모바일
	@media (max-width: 360px) {
		height: 500px;
	}
`;

//슬라이드 내용들
export const SlideItem = styled.div`
	display: flex;
	align-items: center;
	gap: 60px;
	max-width: 1200px;
	width: 100%;
	padding: 0 10%;
	animation: ${fadeIn} 1.2s ease-out;

	/* 태블릿 */
	@media (max-width: 768px) {
		flex-direction: column-reverse; /* 글이 아래, 그림이 위로 가게 하려면 reverse */
		gap: 30px;
		padding: 0 5%;
		text-align: center;
	}
`;

//제목과 설명 담는 곳
export const HeroInfo = styled.div`
	p {
		color: #f1c40f; /* 단어 단위로 줄바꿈하여 가독성 향상 */
		font-weight: bold;
		letter-spacing: 2px;
		font-size: 0.8rem;
		text-transform: uppercase;
	}
	h1 {
		font-size: 3.2rem;
		margin: 15px 0;
		font-weight: 600;
		line-height: 1.2;
		word-break: keep-all;
		/*배경에 따라 글자색 변경 */
		color: ${props => (props.$isDark ? '#fff' : '#222')};

		//태블릿
		@media (max-width: 768px) {
			font-size: 2.2rem;
		}
		//모바일
		@media (max-width: 360px) {
			font-size: 1.8rem;
		}
	}
	span {
		opacity: 0.7;
		font-size: 1.2rem;
		max-width: 500px;
		display: block;
		line-height: 1.8;
		font-weight: 300;
		word-break: keep-all;
		color: ${props => (props.$isDark ? '#fff' : '#333')};

		@media (max-width: 768px) {
			font-size: 1rem;
			margin: 0 auto;
		}
	}
`;

//좌우버튼
export const SlideButton = styled.button`
	position: absolute;
	top: 50%;
	${props => props.$position}: 30px; /* props로 받은 좌/우 위치에 따라 배치 */
	transform: translateY(-50%);
	color: black;
	border: 1px solid rgba(255, 255, 255, 0.1);
	width: 54px;
	height: 54px;
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
	transition: all 0.3s;

	/* 태블릿 */
	@media (max-width: 768px) {
		width: 40px;
		height: 40px;
		${props => props.$position}: 10px;
	}

	/* 📱 모바일 */
	@media (max-width: 360px) {
		display: none; /* 점(Dots)으로만 이동하게 하고 버튼은 숨김*/
	}

	&:hover {
		background: rgba(255, 255, 255, 0.2);
		transform: translateY(-50%) scale(1.1);
	}
`;

/* 하단 점 */
export const SlideDots = styled.div`
	position: absolute;
	bottom: 30px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	gap: 10px;

	//모바일
	@media (max-width: 360px) {
		bottom: 20px;
		gap: 8px;
	}
`;

//이미지 영역
export const HeroImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 60vh;
	overflow: hidden;
	//모바일
	@media (max-width: 768px) {
		height: 30vh;
	}
`;

//낱개 점
export const Dot = styled.div`
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: ${props =>
		props.$active ? '#f1c40f' : 'rgba(180, 180, 180, 0.3)'};
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background: rgba(255, 255, 255, 0.5);
	}
	//모바일
	@media (max-width: 360px) {
		width: 6px;
		height: 6px;
		gap: 8px;
	}
`;
