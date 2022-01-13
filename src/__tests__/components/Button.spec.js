import { render, screen } from "@testing-library/react";
import Search from "../../components/Search";

test("the Buttton should appear on the screen", () => {
  render(<Search />);

  expect(screen.getByText("Buscar pelo CEP")).toBeTruthy();
});
