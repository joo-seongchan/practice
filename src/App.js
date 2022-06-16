import { Homework } from "./components/4_map/Homework";
import { Frontlanguage } from "./db/Data";
import { GlobalStyled } from "./style/GlobalStyled";

const App = () => {
  return (
    <>
      <GlobalStyled />
      <Homework ftl={Frontlanguage} />
    </>
  );
};

export default App;
