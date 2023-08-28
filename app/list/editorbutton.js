'use client'

import Link from 'next/link'

export default function EditorButton(props) {
    let link = props.link
    let query = "/edit" + "/" + link
    return (
        <div>
            <Link href={query}>
                <button>글 수정!</button>
            </Link>
        </div>
    )
}

export { EditorButton }