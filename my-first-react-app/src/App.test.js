import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("カウンターアプリタイトルが表示される", () => {
  render(<App />);
  const titleElement = screen.getByText(/簡単なカウンター/i);
  expect(titleElement).toBeInTheDocument();
});

test("初期カウント値は0", () => {
  render(<App />);
  const countElement = screen.getByText("0");
  expect(countElement).toBeInTheDocument();
});

test("+1ボタンをクリックするとカウントが増える", () => {
  render(<App />);
  const incrementButton = screen.getByText("+1");
  const countElement = screen.getByText("0");

  fireEvent.click(incrementButton);

  expect(screen.getByText("1")).toBeInTheDocument();
});

test("-1ボタンをクリックするとカウントが減る", () => {
  render(<App />);
  const decrementButton = screen.getByText("-1");

  // まず+1して1にする
  const incrementButton = screen.getByText("+1");
  fireEvent.click(incrementButton);
  expect(screen.getByText("1")).toBeInTheDocument();

  // 次に-1して0に戻す
  fireEvent.click(decrementButton);
  expect(screen.getByText("0")).toBeInTheDocument();
});

test("説明文が表示される", () => {
  render(<App />);
  const descriptionElement = screen.getByText(
    /これは React の状態管理の基本例です/i
  );
  expect(descriptionElement).toBeInTheDocument();
});
