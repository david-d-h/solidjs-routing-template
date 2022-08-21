import type { Component } from 'solid-js'
import { Routes, Route, Link } from '@solidjs/router'

import { lazy } from 'solid-js'
const Routing = lazy(() => import("./routes/Routing"))
const MainPage = lazy(() => import("./routes/MainPage"))

const App: Component = () => {
	return <>
		<Routes>
			<Route path="/" component={MainPage} />
			<Route path="/routing" component={Routing} />
		</Routes>
	</>
}

export default App
