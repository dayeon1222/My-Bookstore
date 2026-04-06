import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import * as Modal from '../styles/modal.styles';

export default function BookModal({ book, onClose }) {
	const router = useRouter();

	// [방어적 프로그래밍] 데이터가 없을 경우 컴포넌트를 렌더링하지 않아 에러 방지
	if (!book) return null;

	return (
		/* 모달 바깥 어두운 배경: 클릭 시 onClose가 실행되어 모달이 닫힘 */
		<Modal.ModalOverlay onClick={onClose}>
			{/* [중요] e.stopPropagation(): 이벤트 전파 방지
               바깥 배경(Overlay)을 클릭하면 닫히되, 
               안쪽 컨텐츠(Content)를 클릭할 때는 닫히지 않도록 설정
            */}
			<Modal.ModalContent onClick={e => e.stopPropagation()}>
				<Modal.ModalImage>
					<Image
						src={book.mainImage}
						alt={`${book.title} 표지`}
						fill
						priority // 모달 오픈 시 바로 보여야 하므로 우선 로드 설정
						sizes="200px"
						style={{ objectFit: 'cover' }}
					/>
				</Modal.ModalImage>

				<h2>{book.title}</h2>
				<Modal.Divider />
				{/* 작가의 의도 섹션: 데이터가 없을 경우를 대비한 기본 문구 설정 */}
				<Modal.IntentBox>
					<small>Author&apos;s Intent</small>
					<p>
						{book.authorIntent || '작가가 아직 의도를 작성하지 않았습니다.'}
					</p>
				</Modal.IntentBox>
				{/* 클릭 시 상세 도서 읽기 페이지로 이동  */}
				<Modal.ReadButton onClick={() => router.push(`/book/${book.id}`)}>
					이야기 읽으러 가기
				</Modal.ReadButton>
				{/* 닫기 버튼: 부모로부터 전달받은 onClose 함수 실행 */}
				<Modal.CloseText onClick={onClose}>돌아가기</Modal.CloseText>
			</Modal.ModalContent>
		</Modal.ModalOverlay>
	);
}
