import styled from 'styled-components';

// 초대장 및 특수 레이어
export const InvitationOverlay = styled.div`
	position: absolute;
	inset: 0;
	background: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 2000;
	backdrop-filter: blur(4px);
`;

export const InvitationCard = styled.div`
	background: white;
	width: 320px;
	padding: 40px;
	text-align: center;
	border-radius: 20px;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

export const TopBar = styled.div`
	width: 40px;
	height: 2px;
	background: #333;
	margin: 0 auto 20px;
`;

export const InvitationContent = styled.div`
	h2 {
		font-size: 1.2rem;
		margin-bottom: 15px;
		color: #222;
	}
	p {
		font-size: 1rem;
		line-height: 1.6;
		margin-bottom: 30px;
		color: #444;
	}
`;

export const YesButton = styled.button`
	width: 100%;
	padding: 15px;
	background: #000;
	color: white;
	border: none;
	border-radius: 10px;
	font-weight: bold;
	cursor: pointer;
`;

export const FinalGiftOverlay = styled.div`
	position: absolute;
	inset: 0;
	background: #000;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 3000;
	text-align: center;
	p {
		font-size: 1.1rem;
		margin-bottom: 10px;
	}
	span {
		font-size: 0.8rem;
		color: #666;
	}
`;
