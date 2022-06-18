import { Homework } from "./components/4_map/Homework";
import { Clone } from "./components/practice/Clone";
import { Frontlanguage } from "./db/Data";
import { GlobalStyled } from "./style/GlobalStyled";

const App = () => {
  return (
    <>
      <GlobalStyled />
      {/* <Homework ftl={Frontlanguage} /> */}
      <Clone />
    </>
  );
};

export default App;
