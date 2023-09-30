## 環境構築
1. `git clone https://github.com/iwarei/react-laravel-template-fe.git`
2. `npm install`
3. `npm start`

## ほか、メモ
認証関連の機能は作成済みなので、すぐに実機能の実装に取り掛かれます!

### 新しいページの作成方法
1. まず、新しいページ用のコンポーネントを`src\components\pages`配下に作成します。
   各ページでレイアウトを共通化する場合は、`src\components\templates\PageTemplate.tsx`をカスタムしていきページ用のコンポーネントも`PageTemplate.tsx`のchildrenとすると便利です。

2. 作成したページのコンポーネントを実際に表示できるようにしていきます。
   `AppRouters.tsx`を編集していきます。
   例えば、`/example`にアクセスされたときに表示するページを追加した場合、以下を`<Routes>`の子要素として追加していきます。
  ``` typescript
  import { Example } from './components/pages/Example';

  // ...中略
  <Routes>
    <Route path="example" element={<Example />} />
  </Routes>
  ```
  また、追加したページはログイン認証していないと表示しないようにしたい場合は下記のようにRouteAuthGuardの子要素とします。
  ``` typescript
  <Routes>
    <Route
      path="example"
      element={
        <RouteAuthGuard>
          <Example />
        </RouteAuthGuard>
      }
    />
  </Routes>
  ```
  このとき、ログイン認証せずに`/example`にアクセスしようとすると、`/login`にリダイレクトされます。
  もし、リダイレクト先をカスタマイズしたい場合は、`RouteAuthGuard`のPropsに`redirect`を指定してください。

##### Tips 処理後、他のページにリダイレクトさせたい場合
1. `useNavigate`をimportします。
``` typescript
import { useNavigate } from 'react-router-dom';
```
2. 関数コンポーネントのトップレベルでnavigateを定義します。
``` typescript
const navigate = useNavigate();
```
3. リダイレクトさせたい処理の後に、下記のようにしてリダイレクトさせたいページを設定します。
``` typescript
navigate('/');
```
※ `window.location.href = '/'`のように記述すると、ライフサイクルがおかしくなる場合があります。

##### Tips アラートメッセージを表示させたい場合
処理後に「処理に成功しました。」、エラー時に「エラーが発生しました。」など、ユーザに対してアラートメッセージを表示させたいこともあるでしょう。
現在のページ上でアラートを表示させる場合とリダイレクト先のページでアラートメッセージを表示させる場合のそれぞれの場合の表示方を説明します。

###### 現在のページ上でアラートメッセージを表示させる場合
1. `AlertContext`をimportします。
``` typescript
import { AlertContext } from '../../context/AlertProvider';
```
2. コンポーネントのトップレベルで`setAlert`を取得、定義します。
``` typescript
const { setAlert } = useContext(AlertContext)!;
```
3. 処理後などに、`setAlert`で表示させたいメッセージとアラート色を設定します。
``` typescript 
setAlert({
  color: 'failure',
  msg: `処理中にエラーが発生しました。`,
});
```

###### リダイレクト先のページでアラートメッセージを表示させる場合
Tips 処理後、他のページにリダイレクトさせたい場合のように、先にリダイレクト先を設定しておいてください。
1. `navigate`の第2引数にオブジェクトとしてメッセージとアラート色を設定します。 
``` typescript
navigate('/', { 
  state: { msg: 'ログインしました。', color: 'info' } 
});
```

##### Tips ログインしているユーザ情報を取得したい場合
1. `useContext`, `AuthInfoContext`をimportします。
``` typescript
import React, { useContext } from 'react';
import { AuthInfoContext } from '../../context/AuthProvider';
```
2. コンポーネントのトップレベルで`userInfo`を取得、定義します。
``` typescript
const { userInfo } = useContext(AuthInfoContext)!;
```
3. 必要に応じて、取得したユーザ情報を使用します。
``` typescript
<InputFormWithLabel
  labelText="メールアドレス"
  formName="email"
  value={userInfo.email}
  onChange={inputChangeHandler}
/>
```

※そもそもログイン済みかを判別するときは?
`userInfo`が`undefined`かでもチェックできますが、なんか嫌なので。
1. `useContext`, `AuthInfoContext`をimportします。
``` typescript
import React, { useContext } from 'react';
import { IsAuthedContext } from '../../context/AuthProvider';
```
2. コンポーネントのトップレベルで`isAuthed`を取得、定義します。
``` typescript
  const { isAuthed } = useContext(IsAuthedContext)!;
```
3. 条件分岐などで使用します
``` typescript
if (isAuthed) {
  // 処理
}

rerurn (
  <span>
    {isAuthed && (
      <PrimaryButton 
        text="ログアウト"
        id="logout-button"
        onClick={logoutHandler}
      />
    )}
  </span>
);
```



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
