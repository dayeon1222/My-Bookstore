'use client';

import React from 'react';
import * as S from './loading.styles';

export default function Loading() {
	return (
		<S.SkeletonContainer>
			{/* 왼쪽 상단 서재 버튼 위치 스켈레톤 */}
			<S.SkeletonBox
				style={{
					position: 'fixed',
					top: '24px',
					left: '24px',
					width: '80px',
					height: '38px',
					borderRadius: '30px',
				}}
			/>

			{/* 책 본문 영역 스켈레톤 */}
			<S.SkeletonBook>
				{/* 왼쪽 페이지: 제목과 본문 글자 줄 모형 */}
				<S.LeftPage>
					{/* 장 제목 (ChapterTitle) 자리에 대응 */}
					<S.SkeletonBox
						style={{ width: '40%', height: '28px', marginBottom: '2.5rem' }}
					/>

					{/* 본문 텍스트 (ChapterContent) 자리에 대응하는 3줄 줄글 */}
					<S.SkeletonBox
						style={{ width: '100%', height: '18px', marginBottom: '1rem' }}
					/>
					<S.SkeletonBox
						style={{ width: '95%', height: '18px', marginBottom: '1rem' }}
					/>
					<S.SkeletonBox style={{ width: '60%', height: '18px' }} />
				</S.LeftPage>

				{/* 오른쪽 페이지: 일러스트 이미지 박스 모형 */}
				<S.RightPage>
					{/* 동화책 삽화 (ImageWrapper) 자리에 대응 */}
					<S.SkeletonBox
						style={{ width: '90%', height: '90%', borderRadius: '8px' }}
					/>
				</S.RightPage>
			</S.SkeletonBook>

			{/* 하단 네비게이션 바 스켈레톤 */}
			<S.SkeletonNav>
				{/* 이전 버튼 모형 */}
				<S.SkeletonBox
					style={{ width: '60px', height: '28px', borderRadius: '20px' }}
				/>
				{/* 페이지 표시 모형 */}
				<S.SkeletonBox style={{ width: '50px', height: '16px' }} />
				{/* 다음 버튼 모형 */}
				<S.SkeletonBox
					style={{ width: '60px', height: '28px', borderRadius: '20px' }}
				/>
			</S.SkeletonNav>
		</S.SkeletonContainer>
	);
}
