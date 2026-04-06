import React from 'react';
import * as Reader from '../../styles/EndingLayers.style';

/**
 * 초대장(질문) 컴포넌트: 독자에게 질문을 던져 참여형 홈페이지
 */
export function Invitation({ onAccept }) {
	return (
		// 전체 화면을 덮는 검정배경
		<Reader.InvitationOverlay>
			{/* 실제 초대장 모양의 카드 컨테이너 */}
			<Reader.InvitationCard>
				{/* 카드 상단 디자인 요소 (색상 바 등) */}
				<Reader.TopBar />

				<Reader.InvitationContent>
					<h2>마지막 질문</h2>
					<div className="divider" />
					<p>
						이 두더지는 과연
						<br />
						자기만의 방법으로 완주를 할 수 있을까요?
					</p>
					{/* 수락 버튼: 클릭 시 FinalGift로 넘어가는 onAccept 함수 호출 */}
					<Reader.YesButton onClick={onAccept}>
						YES, 함께할래요.
					</Reader.YesButton>
				</Reader.InvitationContent>
			</Reader.InvitationCard>
		</Reader.InvitationOverlay>
	);
}

/**
 * 마지막 메시지 컴포넌트: 작가의 핵심 메시지를 전달하고 경험을 마무리합니다.
 */
export function FinalGift({ onHome }) {
	return (
		<Reader.FinalGiftOverlay onClick={onHome}>
			<p>두더지는 이 길을 당신과 함께 걷고 싶습니다.</p>
			<span>화면을 클릭하면 서재로 돌아갑니다.</span>
		</Reader.FinalGiftOverlay>
	);
}
