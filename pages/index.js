import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Rectangle from './Components/Rectangle';
import Header from './Components/Header';
import Footer from './Components/footer';
export default function Home() {

  const randomHue = Math.trunc(Math.random() * 360);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5241317257603459"
     crossorigin="anonymous"></script>
      </Head>
      <Header />
      <div className={styles.a}>
        <Rectangle title={randomHue} />
        <section><ul id="log" contentEditable="true"></ul></section>
      </div>
      <hr />
      <Footer />
    </>
  )
}
