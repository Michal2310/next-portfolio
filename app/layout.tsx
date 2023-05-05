import "./globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { GlobalContextProvider } from "./context/store";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio website",
  icons: {
    icon: {
      url: "../public/logo-min.png",
      type: "image/png",
    },
    shortcut: { url: "../public/logo-min.png", type: "image/png" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <GlobalContextProvider>
          <Navbar />
          <main>{children}</main>
          <Sidebar />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
