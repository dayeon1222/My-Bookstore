import { stories } from '@/src/data/stories';
import BookDetailView from '@/src/components/book/BookDetailView';

// 1. 서버에서 안전하게 타이틀 설정
export async function generateMetadata({ params }) {
	const resolvedParams = await params;
	const id = resolvedParams.id;
	const story = stories[id];

	return {
		title: story ? `${story.title} | 나의 서재` : '이야기 서재',
	};
}

// 2. 뼈대 컴포넌트
export default function Page({ params }) {
	return <BookDetailView params={params} />;
}
