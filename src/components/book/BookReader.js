import React from 'react';
import * as Reader from '@/src/styles/BookReader.style';
import Image from 'next/image';

// 표지 컴포넌트
export function BookCover({ story, isMoleStory, onNext }) {
	return (
		<>
			<Reader.LeftPage>
				{/* 왼쪽 페이지 */}
				<Reader.PageInner $align="top">
					<Reader.CoverImageWrapper>
						<Image
							src={story.mainImage}
							alt="Cover"
							fill
							sizes="(max-width: 768px) 80vw, 400px"
						/>
					</Reader.CoverImageWrapper>
				</Reader.PageInner>
			</Reader.LeftPage>
			{/* 오른쪽 페이지: 제목과 설명을 배치하고 클릭 시 다음 페이지로 유도 */}
			<Reader.RightPage onClick={onNext}>
				<Reader.PageInner $align="center">
					{/* $isMole 값에 따라 테마(어두움/밝음)가 바뀌는 스타일 컴포넌트 */}
					<Reader.CoverTitleArea $isMole={isMoleStory}>
						<Reader.MainTitle>{story.title}</Reader.MainTitle>
						<Reader.MainDescription>{story.description}</Reader.MainDescription>
					</Reader.CoverTitleArea>
				</Reader.PageInner>
			</Reader.RightPage>
		</>
	);
}

// 내용 페이지 컴포넌트
export function BookContent({ pageData, onPrev, onNext, isMoleStory }) {
	return (
		<>
			{/* 왼쪽 페이지: 텍스트 정보 중심. 클릭 시 이전 페이지로 이동 */}
			<Reader.LeftPage onClick={onPrev}>
				<Reader.PageInner $align="top">
					{/* 소제목이 존재할 때만 렌더링 (옵셔널 렌더링) */}
					{pageData?.title && (
						<Reader.ChapterTitle>{pageData.title}</Reader.ChapterTitle>
					)}
					{/* 동화 본문 텍스트 출력 */}
					<Reader.ChapterContent>{pageData?.text}</Reader.ChapterContent>
				</Reader.PageInner>
			</Reader.LeftPage>
			{/* 오른쪽 페이지: 삽화 중심. 클릭 시 다음 페이지로 이동 */}
			<Reader.RightPage onClick={onNext}>
				<Reader.PageInner $align="center">
					<Reader.ImageWrapper>
						{/* 이미지가 있을 경우에만 Image 컴포넌트 노출, 없을 경우 대체 문구 노출 */}
						{pageData?.image ? (
							<Image
								src={pageData.image}
								alt="page image"
								fill
								sizes="(max-width: 768px) 80vw, 400px"
								style={{
									objectFit: 'contain',
									transition: 'opacity 0.4s ease',
								}}
							/>
						) : (
							<Reader.EmptyImage>그림 준비 중</Reader.EmptyImage>
						)}
					</Reader.ImageWrapper>
				</Reader.PageInner>
			</Reader.RightPage>
		</>
	);
}

// 네비게이션 UI 컴포넌트
export function BookNav({
	isCover, // 현재 표지인지 여부
	isLastPage, // 현재 마지막 페이지인지 여부
	isMoleStory, // 두더지 이야기(특수 엔딩 필요)인지 여부
	currentPage, // 현재 페이지 번호
	totalPages, // 전체 페이지 수
	onPrev, // 이전 이동 함수
	onNext, // 다음 이동 함수
	visible, // UI 표시 여부 (엔딩 레이어 팝업 시 숨김 처리용)
}) {
	// 특정 상황(초대장 오픈 등)에서 UI를 완전히 제거하기 위한 조건부 렌더링
	if (!visible) return null;

	return (
		<Reader.FixedUI>
			{/* 이전 버튼: 표지일 때는 클릭이 불가능하도록 $disabled 속성 전달 */}
			<Reader.NavButton
				onClick={onPrev}
				$disabled={isCover}
				$isMole={isMoleStory}
			>
				◀ 이전
			</Reader.NavButton>
			{/* 페이지 지시어: 표지일 때는 '표지'라고 표시하고, 본문에서는 현재 위치/전체 쪽수 표시 */}
			<Reader.PageIndicator $isMole={isMoleStory}>
				{isCover ? '표지' : `${currentPage + 1} / ${totalPages}`}
			</Reader.PageIndicator>
			<Reader.NavButton onClick={onNext} $isMole={isMoleStory}>
				{isCover
					? '시작하기 ▶' //표지일때
					: isLastPage
						? isMoleStory
							? '초대장 💌' //두더지 이야기 일때
							: '서재로 돌아가기 ✔' //일반 동화책 일때
						: '다음 ▶'}
			</Reader.NavButton>
		</Reader.FixedUI>
	);
}
