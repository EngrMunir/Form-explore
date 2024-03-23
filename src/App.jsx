
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
// import HookForm from './Components/HookForm/HookForm'
import ReusableForm from './Components/ReusableForm/ReusableForm'
// import RefForm from './Components/RefForm/RefForm'
// import SavedForm from './Components/SavedForm/SavedForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'


function App() {

// const handleSignUpSubmit = data=>{
//   console.log('sign up data', data);
// }

// const handleUpdateProfile = data =>{
//   console.log('update profile', data);
// }

  return (
    <>
      <h1>Form master</h1>

      <Grandpa></Grandpa>
      {/* <HookForm></HookForm>
      <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign up</h2>
          <p>Give your info</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText={'Update'}></ReusableForm> */}
    </>
  )
}

export default App
