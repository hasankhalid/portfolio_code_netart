import styles from './css-modules/landing.module.css'

function Landing({ heading }) {
  return (
    <div className={styles.container}>
      <div className={styles.shape_container}>
        <div className={styles.container_50}>
          <div className={styles.circle_projects}>
            <p className={styles.circle_projects_title}>

            </p>
          </div>
        </div>
        <div className={styles.container_25}>
          <div className={styles.circle_about}>
            <p className={styles.circle_projects_title}>
              
            </p>
          </div>
        </div>
        <div className={styles.container_25}>
          <div className={styles.circle_decoration}></div>
          <div className={styles.circle_resume}>
            <p className={styles.circle_projects_title}>
              
            </p>
          </div>
        </div>

        <div className={styles.heading_container}>
          <h1 className={styles.heading}>{heading}</h1>
        </div>
      </div>

      <div className={styles.paragraph_container}>
        <p className={styles.description}>Hasan Khalid is a New-York based developer, designer and electronic music producer currently pursuing his masters at the Parsons school of design </p>
        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
      </div>
    </div>
  );
}

export default Landing;
