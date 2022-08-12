import { AppProps } from "next/app"
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "./layout"
import theme from "../src/styles/theme"

function Uneasy({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route}/>
      </Layout>
    </ChakraProvider>
  )
}

export default Uneasy


