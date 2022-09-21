import styles from './css-modules/landing.module.css'

function Landing({ heading, paras }) {
  return (
    <div className={styles.container}>
      <div className={styles.shape_container}>
        <div className={styles.container_50}>
          <div className={styles.circle_projects}>
          </div>
        </div>
        <div className={styles.container_25}>
          <div className={styles.circle_about}>
          </div>
        </div>
        <div className={`${styles.container_25} ${styles.container_left}`}>
          <div className={styles.circle_decoration}></div>
          <div className={styles.circle_resume}>
          </div>
        </div>

        <div className={styles.heading_container}>
          <h1 className={styles.heading}>{heading}</h1>
        </div>
      </div>

      <div className={styles.paragraph_container}>
        {paras && paras.length > 0 && paras.map((para, index) => {
          return <p key={'para' + index} className={styles.description}>{para}</p>
        })}
      </div>
    </div>
  );
}

export default Landing;
