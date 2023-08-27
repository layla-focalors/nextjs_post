export default function Write() {
    return(
        <div>
            <h4>글 작성 페이지!</h4>
            <form action="/api/write" method="POST">
                <input type="text" name="title" placeholder="제목을 입력하세요!"/>

                <input type="text" name="content" placeholder="내용을 입력하세요!"></input>

                <button type="submit">등록!</button>
            </form>
        </div>
    )
}