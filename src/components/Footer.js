'use client';

import React from 'react';
import * as FooterStyle from '../styles/footer.styles';

//Footer
export default function Footer() {
	return (
		<FooterStyle.FooterContainer>
			<FooterStyle.FooterLogo>
				<h2>My BookStore</h2>
				<p>Please join me in filling the pages of our journey together</p>
			</FooterStyle.FooterLogo>

			<FooterStyle.Copyright>
				© {new Date().getFullYear()} My BookStore. All rights reserved.
			</FooterStyle.Copyright>
		</FooterStyle.FooterContainer>
	);
}
