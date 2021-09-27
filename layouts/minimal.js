import u from '../styles/Utility.module.css';

export default function MinimalLayout({ children }) {
  return <section className={u.uForeGround}>{children}</section>;
}
