import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from "./aws-exports";
import { Amplify } from 'aws-amplify'
import { BrowserRouter , Route , Routes  } from 'react-router-dom';
import CreateNotePage from "./pages/CreateNotePage";
import HomePage from './pages/HomePage';
import React,{ useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ResetPasswordPage from './pages/ResetPasswordPage';
import DeleteAccountPage from './pages/DeleteAccountPage';
import BinPage from './pages/BinPage';
import ReminderPage from './pages/ReminderPage';
import NotFound404Page from './pages/NotFound404Page';
import { AppFunc } from './overrides/AppOverride';
import BoardPage from './pages/BoardPage';
import SelectProjectPage from './pages/SelectProjectPage';
import CreateProjectPage from './pages/CreateProjectPage';
import ProfilePage from './pages/ProfilePage';
import ResetPasswordKAIPage from './pages/ResetPasswordKAIPage';
import DeleteAccountKAIPage from './pages/DeleteAccountKAIPage';
import EditTicketFullPage from './pages/EditTicketFullPage';
import { TicketProvider } from './providers/TicketProvider';
import { UserProvider } from './providers/UserProvider';
import { ProjectProvider } from './providers/ProjectProvider';
import { ToolbarSelectProvider } from './providers/ToolbarSelectProvider';
import { SubtaskProvider } from './providers/SubtaskProvider';
import { ActivityProvider } from './providers/ActivityProvider';
import { IssueTemplateProvider } from './providers/IssueTemplateProvider';
import BacklogPage from './pages/BacklogPage';
import { PISprintProvider } from './providers/PISprintProvider';
import EditProjectPage from './pages/EditProjectPage';
import { GithubProvider } from './providers/GithubProvider';
import { PrivateModeError } from './ui-components';
import ToolbarGlobalComponent from './components/global/ToolbarGlobalComponent';


const {
    AppComponentOverride,
    logoURL
} = AppFunc();

const originalWarn = console.warn;
console.warn = function(message) {
    if (message.indexOf('DataStore') === -1 )
        originalWarn.apply(console, arguments);
};
const consoleError = console.error;
console.error = function (...args) {
  if (/Warning.*each child in a list/.test(args[0])) {
    return;
  }
  consoleError.apply(console, args);
};

Amplify.configure(awsExports);
export default function App() {
  useEffect(() => {
    document.title = "KAI";
  },[]);
  
  return (
    <>
    <Authenticator components={AppComponentOverride}>
    <div className='amplify-container' style={{
      display: 'flex',alignItems: 'flex-start', flexDirection: "column",overflow:"auto",
      justifyContent: 'space-between' }}>
      <Helmet>
      <link rel="icon" href={logoURL} />
      </Helmet>
      <BrowserRouter>

      <UserProvider>
      <ProjectProvider>
      <PISprintProvider>
      <TicketProvider>
      <IssueTemplateProvider>
      <ToolbarSelectProvider>
      <ActivityProvider>
      <SubtaskProvider>
      <GithubProvider>
      <Routes>
        <Route path="/board" element={<BoardPage/>}/>
        <Route path="/backlog" element={<BacklogPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/create-project" element={<CreateProjectPage/>}/>
        <Route path="/edit-project" element={<EditProjectPage/>}/>
        <Route path="/edit-ticket" element={<EditTicketFullPage/>}/>
        <Route path="/" element={<SelectProjectPage/>}/>
        <Route path='*' element={<NotFound404Page/>}/>
        <Route path="/note" element={<HomePage/>}/>
        <Route path="/reminder" element={<ReminderPage/>}/>
        <Route path="/bin" element={<BinPage/>}/>
        <Route path='/create-note' element={<CreateNotePage/>}/>
        <Route path='/reset-password' element={<ResetPasswordPage/>}/>
        <Route path='/delete-account' element={<DeleteAccountPage/>}/>
        <Route path='/error-private-mode' element={<PrivateModeError/>}/>

        <Route path='/reset-password-kai' element={<ResetPasswordKAIPage/>}/>
        <Route path='/delete-account-kai' element={<DeleteAccountKAIPage/>}/>

      </Routes>
      <ToolbarGlobalComponent/>
      </GithubProvider>
      </SubtaskProvider>
      </ActivityProvider>
      </ToolbarSelectProvider>
      </IssueTemplateProvider>
      </TicketProvider>
      </PISprintProvider>
      </ProjectProvider>
      </UserProvider>

    </BrowserRouter></div></Authenticator></>);
  }
//export default withAuthenticator(App ,  true  /*{signIn},{signOut},{signUp},*/);
//export default  App;