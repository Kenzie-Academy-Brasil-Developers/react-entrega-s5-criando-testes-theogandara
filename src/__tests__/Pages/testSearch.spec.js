import { render, fireEvent, waitFor, screen } from "@testing-library/react";

import App from "../../App";
import Providers from "../../providers/";

import api from "../../services/index";
import MockAdapter from "axios-mock-adapter";

const apiMock = new MockAdapter(api);

describe("Page App", () => {

  it("is possible to search for a zip code", async () => {
    apiMock.onGet("18400150").replyOnce(200, {
      bairro: "Centro",
      cep: "18400150",
      cidade: "Itapeva",
      cidade_info: { area_km2: "1826,258", codigo_ibge: "3522406" },
      estado: "SP",
      estado_info: {
        area_km2: "248.221,996",
        codigo_ibge: "35",
        nome: "São Paulo",
      },
      logradouro: "Rua Josino Brisola",
    });

    render(
      <Providers >
        <App />
      </Providers>
    );

    const cepField = screen.getByPlaceholderText("Insira o CEP");
    const button = screen.getByText("Buscar pelo CEP");

    fireEvent.change(cepField, { target: { value: "18400150" } });
    fireEvent.click(button);

    await waitFor(() => {
      const complementoTeste = screen.getByPlaceholderText("Apartamento, bloco, ...");

      expect(cepField).toHaveValue(18400150);
      expect(complementoTeste).toBeTruthy();
    });
  });
});
