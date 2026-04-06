import styled from 'styled-components';

//메인 전체 컨테이너
export const MainContainer = styled.main`
	width: 100%;
	min-height: 100vh;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 100px;
	//태블릿
	@media (max-width: 768px) {
		padding-bottom: 60px;
	}
	//모바일
	@media (max-width: 360px) {
		padding-bottom: 40px;
	}
`;

// 메인페이지용 로고
export const Logo = styled.div`
	padding: 60px 20px 40px;
	text-align: center;
	cursor: pointer;
	width: 100%;

	h1 {
		font-size: 2.2rem;
		font-weight: 800;
		margin: 0;
		color: #333;
		letter-spacing: -1px;
		text-transform: uppercase;

		//태블릿
		@media (max-width: 768px) {
			font-size: 1.8rem;
		}
		//모바일
		@media (max-width: 360px) {
			font-size: 1.5rem;
		}
	}

	span {
		display: block;
		font-size: 0.9rem;
		color: #888;
		letter-spacing: 0.2em;
		margin-top: 5px;

		//태블릿
		@media (max-width: 768px) {
			font-size: 0.75rem;
		}
		//모바일
		@media (max-width: 360px) {
			font-size: 0.65rem;
			letter-spacing: 0.1em;
		}
	}
`;

//  서재 섹션 전체
export const ShelfSection = styled.section`
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;
	padding: 60px 20px;
	//태블릿
	@media (max-width: 768px) {
		padding: 40px 20px;
	}
	//모바일
	@media (max-width: 360px) {
		padding: 30px 15px;
	}
`;

//  섹션 제목
export const SectionTitle = styled.h2`
	font-size: 1.6rem;
	font-weight: 700;
	margin-bottom: 40px;
	color: #222;
	border-left: 4px solid #f1c40f;
	padding-left: 15px;

	@media (max-width: 360px) {
		font-size: 1.2rem;
		margin-bottom: 25px;
	}
`;

//  책 카드 그리드 레이아웃
export const BookGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 40px 30px;

	//태블릿
	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 25px 15px;
	}
	//모바일
	@media (max-width: 360px) {
		gap: 20px 10px;
	}
`;

// 개별 책 카드
export const BookCard = styled.div`
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-8px);
	} /*호버하면 살짝 뜸 */

	h3 {
		margin-top: 15px;
		font-size: 1.1rem;
		font-weight: 600;
		color: #333;
		word-break: keep-all;

		//모바일
		@media (max-width: 360px) {
			font-size: 0.95rem;
			margin-top: 10px;
		}
	}

	p {
		margin-top: 6px;
		font-size: 0.85rem;
		color: #999;
		line-height: 1.5;

		//모바일
		@media (max-width: 360px) {
			font-size: 0.75rem;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
	}
`;

// 책 표지 이미지 박스
export const BookCoverImage = styled.div`
	position: relative;
	width: 100%;
	aspect-ratio: 3 / 4;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s ease;
	}

	${BookCard}:hover & img {
		transform: scale(1.05);
		/*호버시 이미지카드 확대 살짝 */
	}
`;
