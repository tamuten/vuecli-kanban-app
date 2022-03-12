// Node.js のrequireスタイルでインポート
const bodyParser = require('body-parser')

// Expressアプリケーションインスタンスを受け取る関数をエクスポート
module.exports = app => {
    app.use(bodyParser.json())

    // TODO: ここ以降にAPIの実装内容を追加していく
}