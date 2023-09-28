import "./App.css";
// bootstrap link
import "bootstrap/dist/css/bootstrap.min.css";
import { Hero } from "./components/Hero";
import { Join } from "./components/Join";
import { MyFooter } from "./components/MyFooter";
import { Frequently } from "./components/Frequently";
import { Welcome } from "./components/Welcome";
import { View } from "./components/View";
import { Updated } from "./components/Updated";
import BackToTop from "./components/common/BackToTop";
function App() {
  return (
    <>
      <div className=" bg_whiteEF overflow-hidden">
        <BackToTop/>
        <Hero />
        <Welcome />
        <Join />
        <View />
        <Updated />
        <Frequently />
        <MyFooter />
      </div>
    </>
  );
}

export default App;
