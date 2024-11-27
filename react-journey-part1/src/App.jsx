import Student from "./React-Props/Student"
import UserLogin from "./Conditional Props/UserLogin"


function App() {
  return (
    // Fragment
    <>
      {/* <Student name="John Ford" age={22} college={true} />
      <Student name="Shiella" age={21} college={false} />
      <Student /> */}

      <UserLogin isLoggedIn={false} username="John Ford" />
    </>
  )
}

export default App
