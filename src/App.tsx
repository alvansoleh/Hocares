import {
  ChakraProvider,
  theme
} from "@chakra-ui/react"
import { CUtilityImage, CUtilityMeta, CUtilityRouting } from "controllers"

export const App = () => {
  
  const { setFavIcon } = CUtilityMeta();

  setFavIcon(CUtilityImage.logo);

  return (<ChakraProvider theme={theme}>
    <CUtilityRouting />
  </ChakraProvider>)
}
