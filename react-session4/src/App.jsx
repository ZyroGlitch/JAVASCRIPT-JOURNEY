import Student from "./Student"

function App() {

  return (
    <>
      <Student name="John Ford" age={22} isStudent={true} />
      <Student name="Mae" age={20} isStudent={false} />
      <Student name="Justine" age={25} isStudent={true} />
      <Student />
    </>
  )
}

export default App
