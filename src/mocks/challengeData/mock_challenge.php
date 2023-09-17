<?php
// データベースに接続する
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users";

$conn = new mysqli($servername, $username, $password, $dbname);

// 接続エラーがあれば表示する
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// ユーザー名とパスワードをPOSTから取得する
$user = $_POST["user"];
$pass = $_POST["pass"];

// SQLインジェクションの脆弱性があるクエリを作成する
$sql = "SELECT * FROM users WHERE username='$user' AND password='$pass'";

// クエリを実行する
$result = $conn->query($sql);

// 結果が1行以上あればログイン成功と表示する
if ($result->num_rows > 0) {
  echo "<h1>ログイン成功</h1>";
  echo "<p>ようこそ、" . $user . "さん</p>";
} else {
  // 結果が0行ならログイン失敗と表示する
  echo "<h1>ログイン失敗</h1>";
  echo "<p>ユーザー名またはパスワードが間違っています</p>";
}

// データベース接続を閉じる
$conn->close();
?>
コピー
<html>
<head>
  <style>
    /* CSSでページの見た目を整える */
    body {
      font-family: Arial, sans-serif;
      background-color: lightblue;
    }

    .container {
      width: 500px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid black;
      background-color: white;
    }

    h1 {
      text-align: center;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    input {
      margin: 10px;
    }

    button {
      width: 100px;
      height: 40px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>ログインページ</h1>
    <form action="login.php" method="post">
      <input type="text" name="user" placeholder="ユーザー名" required>
      <input type="password" name="pass" placeholder="パスワード" required>
      <button type="submit">ログイン</button>
    </form>
  </div>
</body>
</html>