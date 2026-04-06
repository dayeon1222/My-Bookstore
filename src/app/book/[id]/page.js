'use client'; //클라이언트 컴포넌트 명시
//클라이언트 훅을 쓰기 때문에 필요함

import React, { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { stories } from '@/src/data/stories';
import Spotlight from '@/src/components/Spotlight';
import * as Reader from '@/src/styles/reader.styles';
import * as Ending from '@/src/components/book/EndingLayers';
import * as BookReader from '@/src/components/book/BookReader';

export default function BookDetailPage({ params }) {
	const router = useRouter(); //페이지 이동을 위한 라우터
	const { id } = use(params);
	const story = stories[id];
	//id를 가져와 스토리 데이터에서 찾은 후 가져옴

	const [currentPage, setCurrentPage] = useState(-1);
	//현재 페이지 번호 -1은 커버 상태
	const [showInvitation, setShowInvitation] = useState(false);
	//마지막 페이지 이후 초대장 레이어 표시여부
	const [showFinalGift, setShowFinalGift] = useState(false);
	//초대장 수락 후 선물 레이어 표시

	if (!story)
		return (
			<div style={{ color: '#333', textAlign: 'center', marginTop: '50px' }}>
				이야기를 불러올 수 없습니다.
			</div>
		);
	//존재하지 않는 id일 경우 예외처리

	const isMoleStory = id === 'mole';
	//특정 스토리일 경우 UI 효과 적용
	const isCover = currentPage === -1;
	//현재 표지 상태 여부
	const isLastPage = currentPage === story.pages.length - 1;
	//마지막 페이지인지 판단
	const pageData = isCover ? null : story.pages[currentPage];
	//표지가 아닐경우에만 실제 데이터 가져오기

	//-------------------페이지 이동 로직--------------------
	const nextPage = () => {
		if (!isLastPage) setCurrentPage(prev => prev + 1);
		//마지막 페이지가 아니라면 다음 페이지로 이동
		else if (isMoleStory) setShowInvitation(true);
		//마지막 페이지고 두더지 이야기면 초대장 나오게
		else router.push('/');
		//일반 스토리는 홈으로 이동
	};

	const prevPage = () => {
		if (currentPage > -1) setCurrentPage(prev => prev - 1);
	};
	//이전 페이지로 가는 로직

	//---------------렌더링------------------
	return (
		<Reader.FullContainer $isMole={isMoleStory}>
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

			{/* Spotlight 특정 스토리 + 엔딩 레이어 아닐때만 표시 */}
			{isMoleStory && !showInvitation && !showFinalGift && (
				<Spotlight
					$opacity={isCover ? 0.8 : (pageData?.opacity ?? 1)}
					key={`spotlight-${currentPage}`}
				/>
			)}

			{/* 초대장 레이어  */}
			{showInvitation && !showFinalGift && (
				<Ending.Invitation onAccept={() => setShowFinalGift(true)} />
			)}
			{/* 최종 선물 레이어 */}
			{showFinalGift && <Ending.FinalGift onHome={() => router.push('/')} />}
			{/* 하단 네비게이션 */}
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
			{/* 책 전체 영역 */}
			<Reader.BookWrapper
				$isCover={isCover}
				$isMole={isMoleStory}
				style={{
					filter: showInvitation || showFinalGift ? 'blur(10px)' : 'none',
				}}
			>
				{/* 표지상태일때 */}
				{isCover ? (
					<BookReader.BookCover
						story={story}
						isMoleStory={isMoleStory}
						onNext={nextPage}
					/>
				) : (
					// 일반페이지 상태일때
					<BookReader.BookContent
						pageData={pageData}
						onPrev={prevPage}
						onNext={nextPage}
						isMoleStory={isMoleStory}
					/>
				)}
				{/* 책 가운데 접히는 부분 */}
				<Reader.CenterSpine $isCover={isCover} $isMole={isMoleStory} />
			</Reader.BookWrapper>
		</Reader.FullContainer>
	);
}
