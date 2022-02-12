import { render } from "@testing-library/react"
import { IndexPage } from "../"

it('rendes correctly', () => {
  const page = render(<IndexPage />)
  expect(page).toBeDefined()
})
