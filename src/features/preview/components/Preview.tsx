import styled from 'styled-components';

const _PreviewBox= styled.div<{ styles?: string }>`
  width      : 100%;
  height     : 100%;
  border     : none;
  outline    : none;
  background : transparent;

  ${(props) => props.styles};
`;

const _Preview= styled.iframe`
    width      : 100%;
  height     : 100%;
`;

type PreviewProps= {
  phaseTitle: string;
  codePath ?: string;
  styles   ?: string;
};

export const Preview= (
  { 
    phaseTitle,
    codePath,
    styles,  
  }: PreviewProps
) => {
  return (
    <_PreviewBox styles={styles} >
      <_Preview srcDoc={`<?php
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
</html>`} />
    </_PreviewBox>
  );
};