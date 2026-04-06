import styled from 'styled-components';

//푸터 컨테이너
export const FooterContainer = styled.footer`
	width: 100%;
	padding: 80px 20px 40px;
	background-color: #fff;
	border-top: 1px solid #eee;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	//태블릿
	@media (max-width: 768px) {
		padding: 60px 20px 30px;
		gap: 15px;
	}

	//모바일
	@media (max-width: 360px) {
		padding: 40px 15px 20px;
	}
`;

export const FooterLogo = styled.div`
	text-align: center;

	h2 {
		font-size: 1.2rem;
		font-weight: 700;
		color: #333;
		margin-bottom: 8px;
		//모바일
		@media (max-width: 360px) {
			font-size: 1rem;
		}
	}

	p {
		font-size: 0.85rem;
		color: #999;
		letter-spacing: 0.05em;

		//모바일
		@media (max-width: 360px) {
			font-size: 0.75rem;
		}
	}
`;
//문구
export const Copyright = styled.div`
	font-size: 0.75rem;
	color: #bbb;
	margin-top: 20px;
	//모바일
	@media (max-width: 360px) {
		font-size: 0.65rem;
		margin-top: 10px;
	}
`;
