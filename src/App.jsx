import LoginFrom from "./Forms/LoginFrom"
import RegistrationForm from "./Forms/RegistrationForm"

function App() {

  return (
    <>
      <h1 className="text-center text-5xl">Practice <a className="underline underline-offset-8" href="https://react-hook-form.com/" target="_blank" rel="noopener noreferrer">React Hook From</a> </h1>
      <LoginFrom />

      <hr className="my-5" />
      <RegistrationForm />

    </>
  )
}

export default App
