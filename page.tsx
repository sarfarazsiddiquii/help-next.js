"use client";
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [number, setNumber] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!Number.isInteger(Number(number)) || Number(number) < 0) {
      alert('Please enter a valid positive number');
      return;
    }
    try {
      await router.push(`/number/${encodeURIComponent(number)}`);
    } catch (error) {
      console.error("An error occurred while navigating:", error);
    }
  };

  return (
    <div className={styles.page}>
      <Head>
        <title>Number to Words Converter</title>
        <meta name="description" content="Convert numbers to words in English and convert digits to words in English. Find number spelling, Prime number, square, and other number conversions." />
        <meta name="title" content="Numbers to Words | Digits to Words" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" type="image/png" href="/Digits2Words Favicon.png"></link>
        <link rel="canonical" href="https://digitstowords.com"></link>
        <link href="https://digitstowords.com" hrefLang="en-CA" rel="alternate"></link>
        <link href="https://digitstowords.com" hrefLang="en-GB" rel="alternate"></link>
        <link rel="apple-touch-icon" href="/digits2words.png" sizes="64x64"></link>
        <meta name="theme-color" content="#fb8a00"></meta>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window._izq = window._izq || [];
              window._izq.push(['init']);
            `,
          }}
        ></script>
        <script async src="https://cdn.izooto.com/scripts/21cd4891db572694c88e17511f6346a8a5f8457d.js"></script>
      </Head>

      <header className={styles.header}>
        <p><a href="http://www.digitstowords.com" style={{ color: '#fff', textDecoration: 'none' }}>Number to words</a></p>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Number to Words Converter</h1>
        <p className={styles.description}>Convert number to english words</p>
        <form onSubmit={handleSubmit} className={styles.formGroup}>
          <div className={styles.inputGroup}>
            <label htmlFor="numberInput" className={styles.label}>Enter Your Number</label>
            <input
              id="numberInput"
              className={styles.input}
              type="number"
              min="1"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              placeholder="Enter a number"
            />
            <button type="submit" className={styles.button}>Convert Number to Words</button>
          </div>
        </form>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 DigitsToWords. All rights reserved.</p>
        <Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/about">About</Link>
      </footer>
    </div>
  );
}
