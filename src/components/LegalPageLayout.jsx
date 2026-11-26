import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import styles from './legal.module.css';

export default function LegalPageLayout({ badge, title, updatedAt, children }) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand}>
            <img
              src="/brand/Logo_Munirix_sin_fondo.png"
              alt="Munirix"
              className={styles.logo}
            />
            <span>Munirix</span>
          </Link>

          <nav className={styles.nav}>
            <Link href="/privacidad">Privacidad</Link>
            <Link href="/terminos">Términos de uso</Link>
            <Link href="/seguridad">Seguridad</Link>
            <Link href="/" className={styles.backBtn}>
              <ArrowLeft size={14} />
              <span>Volver al inicio</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.heroBox}>
          <span className={styles.badge}>
            <ShieldCheck size={14} />
            <span>{badge}</span>
          </span>
          <h1>{title}</h1>
          <p className={styles.updated}>Última actualización: {updatedAt} · Operado por Adriel&apos;s Systems</p>
        </div>

        <article className={styles.article}>{children}</article>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>Munirix · by Adriel&apos;s Systems · munirix.net</span>
          <div className={styles.footerLinks}>
            <Link href="/privacidad">Política de Privacidad</Link>
            <Link href="/terminos">Términos de Uso</Link>
            <Link href="/seguridad">Seguridad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
