import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import markdownFile from '@root/readme.md'
import React from 'react'

const Homepage = () => {
    const [text, setText] = useState('')

    useEffect(() => {
        // fetch(markdownFile)
        // .then((response) => response.text())
        // .then((md) => {
        //     setText(md)
        // })
    }, [])

    return (
        <div>
            <h1>Hello world</h1>
            <ReactMarkdown children={markdownFile} />
        </div>
    )
}

export default Homepage
