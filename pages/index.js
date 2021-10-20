import { useEffect } from 'react'

export default function Home() {
	useEffect(() => {
		fetch('/api/hello')
			.then((res) => res.json())
			.then((data) => console.log(data))
	}, [])
	return <div>Testing</div>
}
