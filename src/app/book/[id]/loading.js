'use client';

import React from 'react';
import * as S from '@/src/styles/skeleton.styles';

export default function Loading() {
	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: `
        @keyframes rawShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .immediate-skeleton {
          background: linear-gradient(90deg, #f2f2f2 25%, #ececec 50%, #f2f2f2 75%) !important;
          background-size: 200% 100% !important;
          animation: rawShimmer 1.5s infinite linear !important;
        }
      `,
				}}
			/>

			<S.SkeletonContainer>
				{/* 왼쪽 상단 서재 버튼 위치 */}
				<S.SkeletonBox
					className="immediate-skeleton"
					style={{
						position: 'fixed',
						top: '24px',
						left: '24px',
						width: '80px',
						height: '38px',
						borderRadius: '30px',
					}}
				/>

				{/* 책 본문 영역 */}
				<S.SkeletonBook>
					{/* 왼쪽 페이지: 텍스트 줄글 모형 */}
					<S.LeftPage>
						<S.SkeletonBox
							className="immediate-skeleton"
							style={{ width: '40%', height: '28px', marginBottom: '2.5rem' }}
						/>
						<S.SkeletonBox
							className="immediate-skeleton"
							style={{ width: '100%', height: '18px', marginBottom: '1rem' }}
						/>
						<S.SkeletonBox
							className="immediate-skeleton"
							style={{ width: '95%', height: '18px', marginBottom: '1rem' }}
						/>
						<S.SkeletonBox
							className="immediate-skeleton"
							style={{ width: '60%', height: '18px' }}
						/>
					</S.LeftPage>

					{/* 오른쪽 페이지: 일러스트 이미지 박스 모형 */}
					<S.RightPage>
						<S.SkeletonBox
							className="immediate-skeleton"
							style={{ width: '90%', height: '90%', borderRadius: '8px' }}
						/>
					</S.RightPage>
				</S.SkeletonBook>

				{/* 하단 네비게이션 바 */}
				<S.SkeletonNav>
					<S.SkeletonBox
						className="immediate-skeleton"
						style={{ width: '60px', height: '28px', borderRadius: '20px' }}
					/>
					<S.SkeletonBox
						className="immediate-skeleton"
						style={{ width: '50px', height: '16px' }}
					/>
					<S.SkeletonBox
						className="immediate-skeleton"
						style={{ width: '60px', height: '28px', borderRadius: '20px' }}
					/>
				</S.SkeletonNav>
			</S.SkeletonContainer>
		</>
	);
}
