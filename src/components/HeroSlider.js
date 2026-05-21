import React, { useState, useEffect, useCallback } from 'react';
import * as Hero from '../styles/hero.styles';
import Image from 'next/image';

export default function HeroSlider({ bookList }) {
	// [상태 관리] 현재 어떤 슬라이드를 보여줄지 결정하는 번호 (0, 1, 2...)
	const [slideIndex, setSlideIndex] = useState(0);

	// [데이터 준비] 슬라이드 목록의 맨 앞에 '인트로(Welcome)' 페이지를 끼워넣음
	const introSlide = {
		id: 'intro',
		title: '마음을 움직이는 연습',
		description:
			'이곳은 단순히 이야기를 읽는 곳이 아니라,\n천천히 당신의 마음을 움직이는 연습을 하는 공간입니다.',
		mainImage: '/images/main.png',
		isIntro: true,
		bgColor: '#ffffff',
		isDark: false,
	};

	// 실제 책 리스트(bookList) 앞에 인트로를 합쳐서 전체 슬라이드 배열을 만듦
	const allSlides = [introSlide, ...bookList];

	// [기능: 다음 슬라이드]
	// 마지막 슬라이드에서 다음을 누르면 다시 0번(처음)으로 돌아가게 %(나머지 연산자) 사용
	const nextSlide = useCallback(
		() => setSlideIndex(prev => (prev + 1) % allSlides.length),
		[allSlides.length],
	);
	// [기능: 이전 슬라이드]
	// 0번에서 이전을 누르면 마지막 슬라이드로 가게끔 처리
	const prevSlide = useCallback(
		() =>
			setSlideIndex(prev => (prev - 1 + allSlides.length) % allSlides.length),
		[allSlides.length],
	);
	// [자동 재생] 6초(6000ms)마다 자동으로 다음 슬라이드로 넘어가는 타이머 설정
	useEffect(() => {
		const slideTimer = setInterval(nextSlide, 6000);
		return () => clearInterval(slideTimer); // 컴포넌트가 사라질 때 타이머도 종료
	}, [nextSlide]);

	const currentSlide = allSlides[slideIndex];

	return (
		<Hero.HeroWrapper $bgColor={currentSlide.bgColor}>
			{/* 왼쪽 화살표 버튼 */}
			<Hero.SlideButton $position="left" onClick={prevSlide}>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
				>
					<polyline points="15 18 9 12 15 6"></polyline>
				</svg>
			</Hero.SlideButton>

			<Hero.SlideItem key={slideIndex}>
				<Hero.HeroImageWrapper $isIntro={currentSlide.isIntro}>
					<Image
						src={currentSlide.mainImage}
						alt="메인 슬라이드 이미지"
						fill
						priority={currentSlide.isIntro}
						sizes="(max-width: 768px) 100vw, 50vw"
						style={{ objectFit: 'contain' }}
					/>
				</Hero.HeroImageWrapper>

				<Hero.HeroInfo $isDark={currentSlide.isDark}>
					<p>{currentSlide.isIntro ? 'Welcome' : 'MD`s Pick'}</p>
					<h1 style={{ whiteSpace: 'pre-wrap' }}>{currentSlide.title}</h1>
					<span style={{ whiteSpace: 'pre-wrap' }}>
						{currentSlide.description}
					</span>
				</Hero.HeroInfo>
			</Hero.SlideItem>
			{/* 오른쪽 화살표 버튼 */}
			<Hero.SlideButton $position="right" onClick={nextSlide}>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
				>
					<polyline points="9 18 15 12 9 6"></polyline>
				</svg>
			</Hero.SlideButton>
			{/* 하단 점(Dot) 네비게이션 */}
			<Hero.SlideDots>
				{allSlides.map((_, i) => (
					<Hero.Dot
						key={i}
						$active={i === slideIndex} //현재 보고 있는 슬라이드 점 다르게 표시
						onClick={() => setSlideIndex(i)} // 클릭하면 이동
					/>
				))}
			</Hero.SlideDots>
		</Hero.HeroWrapper>
	);
}
