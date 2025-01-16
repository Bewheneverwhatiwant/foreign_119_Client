import CustomBox from "./components/CutomBox"
import CustomColumn from "./components/CustomColumn"

import NoticeBanner from "./mainComponents/NoticeBanner";
import Listening from "./mainComponents/Listening";
import ResultDiv from "./mainComponents/ResultDiv";

function App() {

  return (
    <CustomBox $backgroundcolor="transparent" $width="100%" $height="100vh" $borderradius="0" $padding="1rem" $justifycontent="flex-start">
      <CustomColumn $width="100%" $height="70vh" $alignitems="center" $justifycontent="space-between">

        <NoticeBanner />
        <Listening />
        {/* <ResultDiv /> */}

      </CustomColumn>
    </CustomBox>
  )
}

export default App
