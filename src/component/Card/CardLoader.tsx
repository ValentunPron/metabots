import React from "react"
import ContentLoader from "react-content-loader"

export const CardLoader = () => (
	<ContentLoader
		speed={2}
		width={'100%'}
		height={'100%'}
		viewBox="0 0 360 490"
		backgroundColor="#2901807a"
		foregroundColor="#45d9fc"
	>
		<rect x="0" y="0" rx="13" ry="13" width="360" height="490" />
	</ContentLoader>
)
