import { render, screen } from "@testing-library/react";
import TodoList from "../TodoList";

describe("리스트 구현", () => {
  it("임의 리스트를 있는 것을 확인하기", () => {
    render(<TodoList />);

    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(2);
  });
});
