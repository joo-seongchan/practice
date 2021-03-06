import { ClickEx } from "./5_Event/ClickEx";
import { Bganimation } from "./backgroundanimation/Bganimation";
import { bubbletime } from "./backgroundanimation/bubbletime";
import { Homework } from "./components/4_map/Homework";
import { ClickHomework } from "./components/5_Click/ClickHomework";
// import { Clone } from "./components/practice/Clone";
import { Grid } from "./components/practice/Grid";
import { Frontlanguage, griddb } from "./db/Data";
import { TextStroke } from "./stroke/TextStroke";
import { GlobalStyled } from "./style/GlobalStyled";
import { Welcome } from "./welcome/Welcom";
import { welcomedb } from "./welcome/welcomedb";

const App = () => {
  return (
    <>
      <GlobalStyled />
      {/* <Homework ftl={Frontlanguage} /> */}
      {/* <Clone /> */}
      {/* <Grid grid={griddb} /> */}
      {/* <ClickEx />
      <ClickHomework /> */}
      <Bganimation time={bubbletime} />
      <TextStroke />
      <Welcome style={welcomedb} />
    </>
  );
};

export default App;
