import "./App.css";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { createTheme, ThemeProvider } from "@mui/material";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.rinkeby],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "Minting Dapp",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    subtitle1: {
      fontFamily: "monospace",
    },
    h6: {
      fontFamily: ["Blaka", "cursive"].join(","),
    },
    h1: {
      fontFamily: ["Blaka", "cursive"].join(","),
    },
    h3: {
      fontFamily: ["Blaka", "cursive"].join(","),
    },
    button: {
      fontFamily: "fantasy",
      textTransform: "none",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInput-underline": {
            // Remove the ripple effect on input
            "&:after": {
              borderBottom: "initial",
            },
          },
        },
      },
    },
  },
  spacing: 20,
});

function ContextProvider({ children }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} coolMode>
        <ThemeProvider theme={theme}>
          <div className="App">
            <header className="App-header">{children}</header>
          </div>
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default ContextProvider;
