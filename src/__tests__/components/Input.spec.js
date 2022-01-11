import {render, screen} from "@testing-library/react"
import Search from "../../components/Search"

test("the Input should appear on the screen", () => {
    render(
    <Search />
    )
    
    expect(screen.getAllByPlaceholderText("Insira o CEP")).toBeTruthy()
})