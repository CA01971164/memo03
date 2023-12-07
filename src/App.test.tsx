// App.test.tsx

import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/components/App";
import React from "react";

describe("App Component", () => {
  test("renders App component", () => {
    render(<App />);

    // Check if the component renders without crashing
    expect(screen.getByText("メモアプリ")).toBeInTheDocument();
  });

  test("adds a memo", () => {
    render(<App />);

    // Simulate typing in the text field
    userEvent.type(screen.getByLabelText("メモを追加"), "Test Memo");

    // Click the 追加 button
    fireEvent.click(screen.getByText("追加"));

    // Check if the memo is added to the list
    expect(screen.getByText("Test Memo")).toBeInTheDocument();
  });

  test("deletes a memo", () => {
    render(<App />);

    // Add a memo
    userEvent.type(screen.getByLabelText("メモを追加"), "Test Memo");
    fireEvent.click(screen.getByText("追加"));

    // Check if the memo is added to the list
    expect(screen.getByText("Test Memo")).toBeInTheDocument();

    // Click the 削除 button
    fireEvent.click(screen.getByText("削除"));

    // Check if the memo is removed from the list
    expect(screen.queryByText("Test Memo")).not.toBeInTheDocument();
  });
});
