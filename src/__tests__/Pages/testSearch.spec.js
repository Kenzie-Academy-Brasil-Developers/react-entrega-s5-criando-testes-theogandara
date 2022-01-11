import { render, fireEvent, waitFor, screen } from "@testing-library/react";

import App from "../../App";
import Providers from "../../providers";

describe("Page App", () => {
  it("is possible to search for a zip code", async () => {
    render(
      <Providers>
        <App />
      </Providers>
    );

    const cepField = screen.getByPlaceholderText("Insira o CEP");
    const button = screen.getByText("Buscar pelo CEP");

    fireEvent.change(cepField, { target: { value: "18406340" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(cepField).toHaveValue(18406340);
    });
  });
});
