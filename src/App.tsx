import React from 'react'

export const App = (): React.ReactElement => {
	console.log(process.env.BASE_URL)
	return <div>My react project</div>
}
