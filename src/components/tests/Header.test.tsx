import Header from "../Header";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Header", () => {
  // filter의 이름이 변경이 되어도 이 테스트는 계속 사용되어야 한다.
  //
  const filters = ["Filter 1", "Filter 2", "Filter 3"];
  const selectedFilter = "Filter 1";
  const secondFilter = filters[1];
  const changeFilterMock = jest.fn();

  it("필터 변경 함수가 호출이 되는지", () => {
    render(
      <Header
        filters={filters}
        selectedFilter={selectedFilter}
        changeFilter={changeFilterMock}
      />,
    );

    filters.forEach((filter) => {
      const filterButton = screen.getByText(filter);
      expect(filterButton).toBeInTheDocument();
    });
  });

  it("필터 버튼이 클릭될 때 변경 필터를 호출 확인", async () => {
    const user = userEvent.setup();
    render(
      <Header
        filters={filters}
        selectedFilter={selectedFilter}
        changeFilter={changeFilterMock}
      />,
    );

    const filter2Button = screen.getByText(secondFilter);
    await user.click(filter2Button);

    expect(changeFilterMock).toBeCalledWith(secondFilter);
  });
});
