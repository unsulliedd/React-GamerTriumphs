import { Grid, GridItem, Show } from "@chakra-ui/react"
import './App.css'

function App() {
  return (
  <Grid templateAreas={{
    base:'"nav" "main" "footer"',
    lg:`"nav nav" "aside main" "footer footer"`,
  }}>
    <GridItem area="nav" className="nav">
      Nav
    </GridItem>
    <Show above="lg">
      <GridItem area="aside" className="aside">
        Aside
      </GridItem>
    </Show>
    <GridItem area="main" className="main" >
      Main
    </GridItem>
    <GridItem area="footer" className="footer">
      Footer
    </GridItem>
  </Grid>
)}
    
export default App