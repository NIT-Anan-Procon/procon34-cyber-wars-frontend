import { rest } from 'msw';
import { 
  FETCH_GAME_START_TIME_URL, 
  START_GAME_URL, 
  GAME_SCORES_URL, 
  ATTACK_CHALLENGE_URL,
  ATTACK_HINT_URL,
  ATTACK_SEND_KEY_URL,
  DEFENCE_CODE_URL,
  BATTLE_REVISION_URL,
  BATTLE_SEND_KEY_URL
} from '@/constants/apiUrls';

import { 
  CHOICES_KEY, 
  CODE_KEY, 
  IS_CORRECT_KEY, 
  GAME_SCORE_KEY, 
  HINT_KEY, 
  HINT_SCORE_KEY, 
  IS_VALID_KEY, 
  SCORES_KEY, 
  START_TIME_KEY, 
  GOAL_KEY
} from '@/constants/responseKeys';
import { EXPLANATION_KEY, EXPLANATION_URL } from '@/features/games/explanation/api';
import { CHALLENGE_CODE_KEY, TARGET_CODE_PATH_KEY } from '@/features/games/challenge';
import { REVISION_PATH_KEY } from '@/features/games/codeController/api';

export const gameHandlers= [
  rest.patch( START_GAME_URL, ( _, res, ctx ) => {
    try {
      return res(
        ctx.status(200),
        ctx.delay(1000),
      );

    } catch(error) {
      return res( 
        ctx.status(400),
        ctx.delay(1000)
      );
    }
  }),

  rest.get( FETCH_GAME_START_TIME_URL, ( _, res, ctx ) => {
    try {
      const date = new Date();
      const utcTime= date.toUTCString();

      return res(
        ctx.status(200),
        ctx.json({ [ START_TIME_KEY ]: utcTime }),
        ctx.delay(1000),
      );

    } catch(error) {
      return res(
        ctx.status(400),
        ctx.delay(1000)
      );
    }
  }),

  rest.get( GAME_SCORES_URL, ( _, res, ctx ) => {
    try {
      const scores= [ 100, 120 ];

      return res(
        ctx.status(200),
        ctx.json({ [ SCORES_KEY ]: scores }),
        ctx.delay(1000)
      )

    } catch(error) {
      return res(
        ctx.status(400),
        ctx.delay(1000)
      )
    }
  }),
  rest.get( EXPLANATION_URL, ( _, res, ctx ) => {
    try {

      return res(
        ctx.status(200),
        ctx.json({ [ EXPLANATION_KEY ]: `4行目の
        `
        }),
        ctx.delay(1000)
      )

    } catch(error) {
      return res(
        ctx.status(400),
        ctx.delay(1000)
      )
    }
  }),
  rest.delete( START_GAME_URL, ( _, res, ctx ) => {
    try {
      return res(
        ctx.status(200),
        ctx.delay(1000)
      )

    } catch(error) {
      return res(
        ctx.status(400),
        ctx.delay(1000)
      )
    }
  })
];

export const attackPhaseHandler= [
  rest.get( ATTACK_CHALLENGE_URL, ( _, res, ctx ) => {
    try {
      return res(
        ctx.status(200),
        ctx.json({
          [ TARGET_CODE_PATH_KEY ]: 1,
          [ CHALLENGE_CODE_KEY ] : 
`<?php
_uire './vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$host = $_ENV['HOST'];
$user = $_ENV['USER'];
$password = $_ENV['PASSWORD'];
$db = $_ENV['DATABASE'];

$connection = new mysqli($host, $user, $password, $db);

if($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    $query = "SELECT * FROM users WHERE username = '$username' and password = '$password'";
    $result = $connection->query($query);
    
    if ($result->num_rows > 0) {
        echo "Login Successful!";
    } else {
        echo "Invalid Credentials!";
    }
}
?>

<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form method="POST">
        <input type="text" name="username" placeholder="Username">
        <input type="password" name="password" placeholder="Password">
        <input type="submit" value="Login">
    </form>
</body>
</html>
`,
              [ GOAL_KEY ]      : "このウェブアプリケーションは、ユーザー入力をエスケープせずにSQLクエリに直接使用するため、SQLインジェクション攻撃に対して脆弱です。つまり、攻撃者が特定の文字列を入力すると、データベース上の任意の操作が可能になります。",
              [ CHOICES_KEY ]   : [ "'", "or", "1", "=", "1" ],
              [ HINT_KEY ]      : "検索入力を使用して SQL クエリを操作する方法を考えてみましょう。 SQL では一重引用符が文字列区切り文字として扱われることに注意してください。",
              [ HINT_SCORE_KEY ]: -10
        }),
        ctx.delay(1000)
      )      
    } catch(error) {
      return res(
        ctx.status(400),
        ctx.delay(1000)
      );
    }
  }),
  rest.post( ATTACK_HINT_URL, ( _, res, ctx ) => {
    try {
      return res(
        ctx.status(200),
        ctx.delay(1000)
      );

    } catch(error) {
      return res(
        ctx.status(400),
        ctx.delay(1000)
      );
    }
  }),

  rest.post( ATTACK_SEND_KEY_URL, ( _, res, ctx ) => {
    try {
      return res(
        ctx.status(200),
        ctx.json(
          {
            [ IS_VALID_KEY ]  : true,
            [ IS_CORRECT_KEY ]: true,
            [ GAME_SCORE_KEY ]: 20,
          }
        ),
        ctx.delay(1000)
      );
    } catch(error) {
      return res(
        ctx.status(400),
        ctx.delay(1000)
      );
    }
  }),
];

export const defencePhaseHandler= [
  rest.put( DEFENCE_CODE_URL, ( _, res, ctx ) => {
    try {
      return res(
        ctx.status(200),
        ctx.json({ [ IS_VALID_KEY ]: true }),
        ctx.delay(1000)
      );
    } catch(error) {
      return res(
        ctx.status(400),
        ctx.delay(1000)
      );
    }
  }),
];

export const battlePhaseHandler= [
  rest.get( BATTLE_REVISION_URL, ( _, res, ctx ) => {
    try {
      return res(
        ctx.status(200),
        ctx.json(
          {
            [ REVISION_PATH_KEY ]: 1,
            [ CODE_KEY ]     : 
`<?php
_uire './vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$host = $_ENV['HOST'];
$user = $_ENV['USER'];
$password = $_ENV['PASSWORD'];
$db = $_ENV['DATABASE'];

$connection = new mysqli($host, $user, $password, $db);

if($connection->connect_error) {
  die("Connection failed: " . $connection->connect_error);
}

if (isset($_POST['username']) && isset($_POST['password'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];
  $query = "SELECT * FROM users WHERE username = '$username' and password = '$password'";
  $result = $connection->query($query);

  if ($result->num_rows > 0) {
    echo "Login Successful!";
  } else {
    echo "Invalid Credentials!";
  }
}
?>

<html>
<head>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <form method="POST">
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <input type="submit" value="Login">
  </form>
</body>
</html>
`
          }
        ),
        ctx.delay(1000)
      );

    } catch(error) {
      return res(
        ctx.status(400),
        ctx.delay(1000)
      );
    }
  }),

  rest.post( BATTLE_SEND_KEY_URL, ( _, res, ctx ) => {
    try {
      return res(
        ctx.status(200),
        ctx.json(
          {
            [ IS_VALID_KEY ]  : true,
            [ IS_CORRECT_KEY ]: true,
            [ GAME_SCORE_KEY ]: 20
          }
        ),
        ctx.delay(1000),
      );

    } catch(error) {
      return res(
        ctx.status(400),
        ctx.delay(1000)
      );
    }
  }),
];