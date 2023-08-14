import React from "react";

type HeaderProps = {
  filters: string[];
  selectedFilter: string;
  changeFilter: React.Dispatch<React.SetStateAction<string>>;
};
function Header({ filters, selectedFilter, changeFilter }: HeaderProps) {
  return (
    <ul>
      {filters.map((filter) => (
        <li key={filter}>
          <button onClick={() => changeFilter(filter)}>{filter}</button>
        </li>
      ))}
    </ul>
  );
}

export default Header;
