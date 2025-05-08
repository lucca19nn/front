import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.container}>
            <Image className={styles.image} src="/images/world.png" alt="Maiko Xikixiki" width={300} height={300}/>
            <h1 className={styles.title}>Clique em baixo e conheça todos os países</h1>
            <Link href="/countries">
            <button className={styles.button}>Acessar Países</button>
            </Link>
        </div>
    );
}