import { Header } from "../header"
import { Footer } from "../footer"

export const DefaultTemplate = ({children}) => {
    return (
        <>
          <Header />
          <main>
   ⁠         {children}
          </main>
          <Footer />
        </>
      )
}
