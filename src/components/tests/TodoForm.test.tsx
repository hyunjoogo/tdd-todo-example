import TodoForm from "../TodoForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("TodoForm 테스트하기", () => {
  it("투두 텍스트 입력 후 버튼 누르면 빈 값 되는지 확인하기", async () => {
    const fakeFn = jest.fn();
    const user = userEvent.setup();
    const fakeExample = "TODO 추가하기";

    render(<TodoForm addTodo={fakeFn} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    await user.type(input, fakeExample);
    await user.click(button);

    expect(fakeFn).toBeCalledTimes(1);
    expect(input).toHaveValue("");
  });
});
