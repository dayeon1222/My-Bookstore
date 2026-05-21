'use client';

import React, { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { stories } from '@/src/data/stories';
import Spotlight from '@/src/components/Spotlight';
import * as Reader from '@/src/styles/reader.styles';
import * as Ending from '@/src/components/book/EndingLayers';
import * as BookReader from '@/src/components/book/BookReader';

export default function BookDetailView({ params }) {
	const router = useRouter();
	const { id } = use(params);
	const story = stories[id];

	const [currentPage, setCurrentPage] = useState(-1);
	const [showInvitation, setShowInvitation] = useState(false);
	const [showFinalGift, setShowFinalGift] = useState(false);

	if (!story)
		return (
			<div style={{ color: '#333', textAlign: 'center', marginTop: '50px' }}>
				이야기를 불러올 수 없습니다.
			</div>
		);

	const isMoleStory = id === 'mole';
	const isCover = currentPage === -1;
	const isLastPage = currentPage === story.pages.length - 1;
	const pageData = isCover ? null : story.pages[currentPage];

	const nextPage = () => {
		if (!isLastPage) setCurrentPage(prev => prev + 1);
		else if (isMoleStory) setShowInvitation(true);
		else router.push('/');
	};

	const prevPage = () => {
		if (currentPage > -1) setCurrentPage(prev => prev - 1);
	};

	return (
		<Reader.FullContainer $isMole={isMoleStory}>
			{isMoleStory && !showInvitation && !showFinalGift && (
				<Spotlight
					$opacity={isCover ? 0.8 : (pageData?.opacity ?? 1)}
					key={`spotlight-${currentPage}`}
				/>
			)}

			{showInvitation && !showFinalGift && (
				<Ending.Invitation onAccept={() => setShowFinalGift(true)} />
			)}
			{showFinalGift && <Ending.FinalGift onHome={() => router.push('/')} />}

			{/* 홈 버튼 */}
			<Reader.HomeButton onClick={() => router.push('/')} $isMole={isMoleStory}>
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2.5"
				>
					<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
					<polyline points="9 22 9 12 15 12 15 22"></polyline>
				</svg>
				<span>서재</span>
			</Reader.HomeButton>

			<BookReader.BookNav
				isCover={isCover}
				isLastPage={isLastPage}
				isMoleStory={isMoleStory}
				currentPage={currentPage}
				totalPages={story.pages.length}
				onPrev={prevPage}
				onNext={nextPage}
				visible={!showInvitation && !showFinalGift}
			/>

			<Reader.BookWrapper
				$isCover={isCover}
				$isMole={isMoleStory}
				style={{
					filter: showInvitation || showFinalGift ? 'blur(10px)' : 'none',
				}}
			>
				{isCover ? (
					<BookReader.BookCover
						story={story}
						isMoleStory={isMoleStory}
						onNext={nextPage}
					/>
				) : (
					<BookReader.BookContent
						pageData={pageData}
						onPrev={prevPage}
						onNext={nextPage}
						isMoleStory={isMoleStory}
					/>
				)}
				<Reader.CenterSpine $isCover={isCover} $isMole={isMoleStory} />
			</Reader.BookWrapper>
		</Reader.FullContainer>
	);
}
