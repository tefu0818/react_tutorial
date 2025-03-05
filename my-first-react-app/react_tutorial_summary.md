# React チュートリアル記録

## 環境設定
- Node.js と npm が必要
- `npx create-react-app my-first-react-app` で新しいプロジェクト作成
- `npm start` で開発サーバー起動

## プロジェクト構造
- `public/index.html`: アプリのHTML容器
- `src/index.js`: エントリーポイント
- `src/App.js`: メインコンポーネント
- `node_modules/`: 依存パッケージ
- `package.json`: プロジェクト設定

## 基本概念
1. コンポーネント: UI部品
2. JSX: JavaScriptでHTMLを書く構文
3. 状態(State): `useState` フックで管理
4. Props: 親から子へデータを渡す

## カウンターアプリ実装
```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  
  const incrementCount = () => {
    setCount(count + 1);
  };
  
  const decrementCount = () => {
    setCount(count - 1);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>簡単なカウンター</h1>
        <div className="counter">
          <h2>{count}</h2>
          <div>
            <button onClick={decrementCount}>-1</button>
            <button onClick={incrementCount}>+1</button>
          </div>
        </div>
        <p>これは React の状態管理の基本例です</p>
      </header>
    </div>
  );
}

export default App;
```

## 便利なコマンド
- `npm start`: 開発サーバー起動
- `npm run build`: 本番用ビルド
- `npm test`: テスト実行
- `npm test -- --testNamePattern="テスト名"`: 特定テスト実行