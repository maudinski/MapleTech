import Header from "./Header"
import MainBody from "./MainBody"


function App() {
  // it would make most sense to have this all within the main body class,
  // then pass the main body class down to the NavBar, which passes down to each NavBarButton,
  // then each button calls mainBody.changeState(mainBody.cwk_state) or something


  return (
    <>
    <Header></Header>
    <br></br>
    <MainBody></MainBody>
    </>
  )
}

export default App;
