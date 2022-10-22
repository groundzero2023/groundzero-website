import styles from "./style";

/* Main entry point of the web application. */
const App = () => (
  <div className="bg-black-gradient w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        Navigation Bar
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Homepage / About
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Sign up call
        Teaser
        Past Events
        Reasons To Join
        Problem Statements
        Workshops
        Timeline
        Partners
        Contact Us
        Footer 
      </div>
    </div>

  </div>
);

export default App;
