import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <style jsx global>{`
          body {
            background: #F0F2F5;
          }
        `}</style>
      </Layout>
    </>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
