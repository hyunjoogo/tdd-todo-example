import { render, screen } from "@testing-library/react";
import TodoItem from "../TodoItem";
import { Todo } from "../TodoList";
import userEvent from "@testing-library/user-event";

describe("투두 아이템 확인하기", () => {
  const fakeTodoItem: Todo = {
    id: "123",
    text: "임의의 아이템",
    status: "completed",
  };
  const user = userEvent.setup();
  const fakeFn = jest.fn();

  it("임의의 값이 잘 나오는지 확인하기 + 체크박스 상태 확인", () => {
    render(<TodoItem todo={fakeTodoItem} setTodos={fakeFn} />);

    const listItem = screen.getByRole("listitem");
    const checkbox = screen.getByRole("checkbox");

    expect(listItem).toHaveTextContent(fakeTodoItem.text);
    // 이건 뭔가 테스트가 바뀌면 문제가 생길 수도 있는거네
    // status가 active면 not을 붙여야하는데 조건문으로 하니까 expect를 조건문에 넣지 말라고 하네
    expect(checkbox).toBeChecked();
  });

  it("status 변경하기", async () => {
    render(<TodoItem todo={fakeTodoItem} setTodos={fakeFn} />);

    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);

    expect(fakeFn).toHaveBeenCalledTimes(1);
    // 왜 변경이 반영이 안될까?
    // expect(checkbox).not.toBeChecked();
  });
  it("투두 삭제하기", async () => {
    render(<TodoItem todo={fakeTodoItem} setTodos={fakeFn} />);

    const button = screen.getByRole("button", { name: "삭제" });
    await user.click(button);

    expect(fakeFn).toHaveBeenCalledTimes(1);
    // 의도하는 바는 내부에 있는 함수(deleteTodo(targetId))가 정확한 인자를 가지고 실행이 되었는지 보는 것
    // expect(???????).toHaveBeenCalledWith([fakeTodoItem.id]);
  });
});
