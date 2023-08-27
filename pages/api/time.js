export default function Handler(req, res) {
    let today = new Date()
    let mode = today.toLocaleTimeString()
    if(req.method === 'GET'){
        return (
            // 서버에 요청하면 응답을 꼭 해 줘야 해요!
            // 안 그러면.. 무한 로딩!

            // 오류가 없으면 200!
            // 서버에 오류가 있으면 500!
            // 유저 잘못은 400!

            res.status(200).json(mode))
    }
    else{
        res.status(400).json('잘못된 요청이에요!')
    }
}