import styles from "./style";
import { NavigationBar, About, SignUp, Teaser, PastEvents, ReasonsToJoin, ProblemStatements, Workshops, Timeline, Partners, ContactUs, Footer } from './components';

/* Main entry point of the web application. */
const App = () => (
  <div className="bg-black-gradient w-full overflow-hidden">
    
    <NavigationBar />

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <About />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <SignUp />
        <Teaser />
        <PastEvents />
        <ReasonsToJoin />
        <ProblemStatements />
        <Workshops />
        <Timeline />
        <Partners />
        <ContactUs />
        <Footer />
      </div>
    </div>

  </div>
);

export default App;
