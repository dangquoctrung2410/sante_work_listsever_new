import styles from './Styles.module.scss';

type Props = {};

const HeaderPrinterConfig = (_props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentLeft}>
        <span>DCOM Printer</span>
        <div className={styles.itemLeft}>a</div>
        <div className={styles.footerLeft}>
          <button>aaa</button>
          <button>aaa</button>
          <button>aaa</button>
          <button>aaa</button>
          <button>aaa</button>
        </div>
      </div>
      <div className={styles.contentRight}>
        <span>Print Setting</span>
      </div>
    </div>
  );
};

export default HeaderPrinterConfig;
