import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/Login.module.css";
import { useRouter } from 'next/router'
import { magic } from "../lib/magic-client";
import PersonIcon from '@mui/icons-material/Person';

const Login = () => {
  const router = useRouter();

  const [usrMsg, setUsrMsg] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(false);
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('routeChangeError', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('routeChangeError', handleRouteChange)
    }
  }, [router]);

  const handleOnChangeEmail = (e) => {
    console.log("h");
    setUsrMsg("");
    const email = e.target.value;
    setEmail(email);
  };

  const handleLoginWithEmail = async (e) => {
    e.preventDefault();
    console.log("hello");

    if (email) {
      if (email === "aunghtetmyatoo888@gmail.com") {
        // log in a user by their email
        try {
          setIsLoading(true);
          const didToken = await magic.auth.loginWithMagicLink({ email });
          console.log("DidToken", didToken);
          if (didToken) {
            router.push("/");
          }
        } catch (error) {
          console.error("Something went wrong loggin in", error);
        }
      } else {
        setUsrMsg("Something went wrong loggin in");
      }
    } else {
      setUsrMsg("Enter a valid email address");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Dashboard SignIn</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.formLogin}>
          <h1 className={styles.form_header}>🔥 Fire-Admin Dashboard</h1>
          <div className={styles.inputGroup}>
            <span><PersonIcon /></span>
            <input
              type="text"
              placeholder="Email address"
              className={styles.emailInput}
              onChange={handleOnChangeEmail}
            />
            <button onClick={handleLoginWithEmail}>
              {isLoading ? 'Loading...' : 'Sign In'}
            </button>
          </div>
          <p className={styles.userMsg}>{usrMsg}</p>
        </div>
      </main>
    </div>
  );
};

export default Login;
