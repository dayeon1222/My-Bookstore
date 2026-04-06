'use client';

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export default function Spotlight({ $opacity = 0.95 }) {
	const overlayRef = useRef(null);
	const timerRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleMouseMove = e => {
			if (overlayRef.current) {
				overlayRef.current.style.setProperty('--x', `${e.clientX}px`);
				overlayRef.current.style.setProperty('--y', `${e.clientY}px`);
			}
			setIsVisible(false);
			if (timerRef.current) clearTimeout(timerRef.current);
			timerRef.current = setTimeout(() => {
				setIsVisible(true);
			}, 3000);
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, []);

	return (
		<>
			<Overlay ref={overlayRef} $opacity={$opacity} />
			{isVisible && <Message>마우스를 움직여주세요!</Message>}
		</>
	);
}

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 9999;
	pointer-events: none;
	background: radial-gradient(
		circle 150px at var(--x, 0px) var(--y, 0px),
		transparent 0%,
		rgba(0, 0, 0, ${props => props.$opacity}) 100%
	);

	transition: background 0.5s ease;

	@media (max-width: 768px) {
		display: none !important;
	}
`;

const Message = styled.div`
	position: fixed;
	bottom: 10%;
	left: 50%;
	transform: translateX(-50%);
	color: white;
	font-size: 1.1rem;
	z-index: 10000;
	text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
	animation: fadeIn 1s ease-in-out;

	@media (max-width: 768px) {
		display: none;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;
