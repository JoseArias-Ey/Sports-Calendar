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
import { jwtDecode } from "jwt-decode";

const WrappedView = () => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  const handleLogIn = () => {
    instance
      .loginRedirect({
        ...loginRequest,
      })
      .catch((error) => console.log(error));
  };

  const handleLogOut = () => {
    instance
      .logoutRedirect("http://localhost:3000")
      .catch((error) => console.log(error));
  };

  const getRoles = () => {
    if (activeAccount && activeAccount.idToken) {
      console.log("ID Token:", activeAccount.idToken);
      const decodedToken = jwtDecode(activeAccount.idToken);
      console.log("Decoded Token:", decodedToken);
      if (decodedToken.roles[0] === "user.admin") {
        return true;
      }
      if (decodedToken.roles[0] === "user.read") {
        return false;
      }
    }
  };
  const getUserRole = () => {
    if (activeAccount && activeAccount.idToken) {
      const decodedToken = jwtDecode(activeAccount.idToken);
      return decodedToken.roles;
    }
  };
  const getUser = () => {
    if (activeAccount && activeAccount.idToken) {
      const decodedToken = jwtDecode(activeAccount.idToken);
      return decodedToken.name;
    }
  };

  const roleuser = getUserRole();
  const user = getUser();

  const roles = getRoles();
  console.log("estos son los roles: ", roles);

  return (
    <div>
      <UnauthenticatedTemplate>
        <div className="loginBox">
          <h1>Sport Task Manager</h1>
          <PrimaryButton
            text="Sign in"
            style={{ padding: "20px" }}
            onClick={handleLogIn}
          ></PrimaryButton>
        </div>
      </UnauthenticatedTemplate>

      <AuthenticatedTemplate>
        {roles ? (
          <div className="container">
            <p>
              You log in as: {user}
              <span style={{ marginInline: "50px" }}>
                {" "}
                Your role is: {roleuser}
              </span>
              <PrimaryButton
                text="log out"
                onClick={handleLogOut}
                style={{
                  padding: "10px",
                  position: "absolute",
                  right: "520px",
                }}
              ></PrimaryButton>
            </p>
            <Header></Header>
            <AddTodoForm></AddTodoForm>
            <TodoList />
            <TotalCompleteItems />
            <PreviousCompleted></PreviousCompleted>
            <Posts></Posts>
            <Footer></Footer>
          </div>
        ) : (
          <div className="container">
            <p>
              You log in as: {user}
              <span style={{ marginInline: "50px" }}>
                {" "}
                Your role is: {roleuser}
              </span>
              <PrimaryButton
                text="log out"
                onClick={handleLogOut}
                style={{
                  padding: "10px",
                  position: "absolute",
                  right: "100px",
                }}
              ></PrimaryButton>
            </p>
            <Header></Header>
            <TodoList />
            <TotalCompleteItems />
            <Footer></Footer>
          </div>
        )}
      </AuthenticatedTemplate>
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
