import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import PreviousCompleted from "./components/PreviousCompleted";
import { loginRequest } from "./Config";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
  MsalProvider,
} from "@azure/msal-react";
import { PrimaryButton } from "@fluentui/react";

const WrappedView = () => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  const handleRedirect = () => {
    instance
      .loginRedirect({
        ...loginRequest,
        prompt: "create",
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <AuthenticatedTemplate>
        {activeAccount ? (
          <div className="container">
            <p>You log in as: </p>"user label"
            <Header></Header>
            <AddTodoForm />
            <TodoList />
            <TotalCompleteItems />
            <PreviousCompleted></PreviousCompleted>
            <Posts></Posts>
            <Footer></Footer>
          </div>
        ) : null}
      </AuthenticatedTemplate>
      <div className="loginBox">
        <h1>Sport Task Manager</h1>
        <UnauthenticatedTemplate>
          <PrimaryButton
            text="Sign in"
            style={{ padding: "20px" }}
            onClick={handleRedirect}
          ></PrimaryButton>
        </UnauthenticatedTemplate>
      </div>
    </div>
  );
};

const App = ({ instance }) => {
  return (
    <MsalProvider instance={instance}>
      <WrappedView />
    </MsalProvider>
  );
};

export default App;
