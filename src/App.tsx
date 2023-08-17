import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import DarkModeProvider from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];
function App() {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header
        filters={filters}
        selectedFilter={selectedFilter}
        changeFilter={setSelectedFilter}
      />
      <TodoList filter={selectedFilter} />
    </DarkModeProvider>
  );
}

export default App;
