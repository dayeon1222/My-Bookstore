'use client'; //클라이언트 컴포넌트

import React, { useState, useEffect } from 'react';
import { stories } from '@/src/data/stories';
import * as HomeStyle from '../styles/home.styles';
import HeroSlider from '../components/HeroSlider';
import BookModal from '../components/BookModal';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
	const [isClient, setIsClient] = useState(false);
	//서버에서 미리 만들어온 화면(HTML)과 브라우저에서 작동하는 기능(JS)을
	//어긋남 없이 매끄럽게 연결하기 위해 하이드레이션 방어 로직을 사용
	const [selectedBook, setSelectedBook] = useState(null);
	//사용자가 클릭한 도서 정보

	const bookList = Object.keys(stories).map(key => ({
		id: key,
		...stories[key],
	}));
	//객체 형태의 stories 데이터를 배열로 변환하여 리스트 렌더링 준비

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsClient(true);
		}, 0); // SSR과 CSR의 HTML 결과가 달라 발생하는 에러를 방지하기 위해

		return () => clearTimeout(timer); // 메모리 누수 방지를 위한 클린업
	}, []);

	return (
		<HomeStyle.MainContainer>
			{/* 로고: 클릭 시 새로고침 효과를 주어 초기 상태로 리셋 */}
			<HomeStyle.Logo onClick={() => window.location.reload()}>
				<h1>My BookStore</h1>
				<span>My story doesn&apos;t end here</span>
			</HomeStyle.Logo>

			{/* 메인 섹션*/}
			<HeroSlider bookList={bookList} />

			{/* 하단 서재 섹션 */}
			<HomeStyle.ShelfSection>
				<HomeStyle.SectionTitle>이야기 서재</HomeStyle.SectionTitle>
				<HomeStyle.BookGrid>
					{bookList.map(book => (
						<HomeStyle.BookCard
							key={book.id}
							onClick={() => setSelectedBook(book)}
						>
							{/* 클릭시 해당 도서 정보 상태 저장 */}
							<HomeStyle.BookCoverImage>
								<Image
									src={book.mainImage}
									alt={book.title}
									fill
									sizes="(max-width: 768px) 50vw, 200px"
									style={{ objectFit: 'cover' }}
								/>
							</HomeStyle.BookCoverImage>
							<h3>{book.title}</h3>
							<p>작가의 의도 보기</p>
						</HomeStyle.BookCard>
					))}
				</HomeStyle.BookGrid>
			</HomeStyle.ShelfSection>

			{/* 모달 조건부 렌더링 */}
			{selectedBook && (
				<BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
			)}
			<Footer />
		</HomeStyle.MainContainer>
	);
}
