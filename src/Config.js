import { LogLevel } from "@azure/msal-browser";

export const config = {
  auth: {
    clientId: "7712b17d-0d21-42fe-bcd0-953e857e7339",
    authority:
      "https://login.microsoftonline.com/06ce5419-127c-4e75-807f-1cdbadd6e556",
    redirectUri: "http://localhost:3000",
    navigateToLoginRequesUrl: false,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },

  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: ["user.read"],
};
