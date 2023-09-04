<?php
// セッションを開始する
session_start();

// セッション変数にユーザー名が保存されているかチェックする
if (!isset($_SESSION['username'])) {
  // 保存されていない場合はログインページにリダイレクトする
  header('Location: login.php');
  exit;
}

// セッション変数からユーザー名を取得する
$username = $_SESSION['username'];
?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>ログイン成功ページ</title>
</head>
<body>
  <h1>ログイン成功ページ</h1>
  <!-- ユーザー名を表示する -->
  <p><?php echo $username; ?>さん、こんにちは！</p>
</body>
</html>