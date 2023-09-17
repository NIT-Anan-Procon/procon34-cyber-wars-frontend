export const mockChallenge= `
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
</html>`