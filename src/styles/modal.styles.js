import styled from 'styled-components';

//화면 전체를 어둡게 덮는 막
export const ModalOverlay = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.9);
	backdrop-filter: blur(15px);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 3000;
	padding: 20px;

	//태블릿
	@media (max-width: 768px) {
		display: flex;
		padding: 0;
	}
`;

//실제 내용이 담긴 박스
export const ModalContent = styled.div`
	background: #111;
	width: 450px;
	padding: 40px;
	border-radius: 20px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	text-align: center;
	color: white;
	max-height: 90vh;
	overflow-y: auto; /* 내용이 많으면 스크롤 */

	//태블릿
	@media (max-width: 768px) {
		width: 100%;
		border-radius: 20px 20px 0 0; /* 위쪽만 둥글게 */
		padding: 30px 20px;
	}
`;

//모달 이미지
export const ModalImage = styled.div`
	position: relative;
	width: 200px;
	height: 250px;
	margin: 0 auto 20px;
	border-radius: 8px;
	overflow: hidden;
	//모바일
	@media (max-width: 360px) {
		width: 150px;
		height: 200px;
	}
`;

//작가 의도
export const IntentBox = styled.div`
	margin-bottom: 30px;
	small {
		color: #f1c40f;
		text-transform: uppercase;
		font-size: 0.7rem;
	}
	p {
		font-size: 1rem;
		opacity: 0.8;
		line-height: 1.7;
		margin-top: 10px;
		word-break: keep-all;
	}
`;

//읽기 버튼
export const ReadButton = styled.button`
	width: 100%;
	padding: 15px;
	background: white;
	color: black;
	border: none;
	border-radius: 10px;
	font-weight: bold;
	cursor: pointer;
	font-size: 1rem;
	&:hover {
		background: #eee;
	}
`;

//돌아가기 버튼
export const CloseText = styled.p`
	margin-top: 20px;
	font-size: 0.8rem;
	opacity: 0.4;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
`;
//구분선
export const Divider = styled.div`
	width: 30px;
	height: 2px;
	background: #fff;
	margin: 20px auto;
	opacity: 0.3;
`;
