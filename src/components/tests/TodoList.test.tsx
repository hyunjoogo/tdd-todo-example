import { render, screen } from "@testing-library/react";
import TodoList from "../TodoList";
import userEvent from "@testing-library/user-event";

describe("리스트 구현", () => {
  it("임의 리스트를 있는 것을 확인하기", () => {
    render(<TodoList />);

    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(2);
  });
  it("리스트 추가하기 기능", async () => {
    const user = userEvent.setup();
    const fakeExample = "TODO 추가하기";

    render(<TodoList />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    await user.type(input, fakeExample);
    await user.click(button);

    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(3);
  });
});
