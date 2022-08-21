import { Component } from 'solid-js'
import { Link } from '@solidjs/router'

const MainPage: Component = () => {
    return <>
        <h1>SolidJS template with lazy <Link href="/routing">Routing</Link></h1>
    </>
}

export default MainPage