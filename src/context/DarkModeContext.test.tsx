import DarkModeProvider, { useDarkMode } from "./DarkModeContext";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("다크모드 컨텍스트", () => {
  const user = userEvent.setup();
  it("랜더링 확인", async () => {
    render(
      <DarkModeProvider>
        <TestComponent />
      </DarkModeProvider>,
    );
    const toggleButton = screen.getByRole("button", { name: /토글/i });
    await user.click(toggleButton);

    const darkModeValue = screen.getByRole("heading");
    expect(darkModeValue).toHaveTextContent("true");
  });
});

const TestComponent = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div>
      <h1>{darkMode.toString()}</h1>
      <button onClick={toggleDarkMode}>토글</button>
    </div>
  );
};
