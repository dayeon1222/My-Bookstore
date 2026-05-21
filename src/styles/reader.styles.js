import styled from 'styled-components';

//  전체 컨테이너
export const FullContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${props => (props.$isMole ? '#1a1a1a' : '#f5f5f5')};
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	position: relative;

	//태블릿
	@media (max-width: 768px) {
		background-color: #f5f5f5 !important;
		overflow-y: auto;
		display: flex;
	}
`;

// 홈 버튼
export const HomeButton = styled.button`
	position: absolute;
	top: 20px;
	left: 20px;
	z-index: 9999;
	display: flex;
	align-items: center;
	gap: 8px;
	background: rgba(255, 255, 255, 0.9);
	padding: 8px 16px;
	border-radius: 20px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	cursor: pointer;
	color: #333;
	font-size: 0.9rem;
	font-weight: 600;
	backdrop-filter: blur(5px);

	//태블릿
	@media (max-width: 768px) {
		top: 15px;
		left: 15px;
	}
`;

// 종이책 역할
export const BookWrapper = styled.div`
	display: flex;
	width: 90%;
	max-width: 1200px;
	height: 80%;
	background: white;
	box-shadow: ${props =>
		props.$isMole
			? '0 20px 40px rgba(0, 0, 0, 0.5)'
			: '0 20px 40px rgba(0, 0, 0, 0.1)'};
	position: relative;
	transition: all 0.5s ease;

	//태블릿
	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
		height: auto;
		min-height: 100vh;
		box-shadow: none;
	}
`;

// 책 접히는 부분
export const CenterSpine = styled.div`
	width: 1px;
	height: 100%;
	background: #eee;
	position: relative;
	z-index: 10;

	//태블릿
	@media (max-width: 768px) {
		display: none;
	}
`;
