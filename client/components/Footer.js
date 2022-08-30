import React from "react";
import styles from "../styles/index.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-row justify-center gap-x-96 content-between">
          <p className="self-start">
            Developed by <b>Eren</b>
          </p>
          <div className="self-end">
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </div>
        </div>
      </a>
    </footer>
  );
};

export default Footer;
