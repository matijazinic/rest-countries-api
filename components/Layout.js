import Header from "./Header";
// import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <>{children}</>
    </>
  );
}
