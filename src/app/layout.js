'use client';

import { createGlobalStyle } from 'styled-components';
import StyledComponentsRegistry from '../lib/registry';

const GlobalStyle = createGlobalStyle`
  img {
    user-select: none !important;
    -webkit-user-select: none !important;
    
    -webkit-user-drag: none !important;
    
    -webkit-touch-callout: none !important;
  }

  body {
    user-select: none;
  } 
 
`;

export default function RootLayout({ children }) {
	return (
		<html lang="ko">
			<body>
				<StyledComponentsRegistry>
					<GlobalStyle />
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
