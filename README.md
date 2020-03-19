# Using react-cumulio to show a [Cumul.io](https://cumul.io/main) dashboard

![dashboard example](dashboardExample.png)

## [Demo Part 1](https://stackblitz.com/edit/react-cumulio-demo-part-1) | [Code Part 1](https://github.com/cumulio/react-cumulio-demo-part-1)

# Contents

- [What is react-cumulio](#What-is-react-cumulio)
- [What we will build](#What-we-will-build)
  - Part 1: display and customize a dashboard
  - Part 2: embed dashboards in a multiple page website
- [Requirements](#Requirements)
- [Part 1 - Embedding a Cumul.io dashboard](#Part-1---Embedding-a-Cumul.io-dashboard)
  - [Setup React App](#Setup-React-App)
  - [Displaying the dashboard](#Displaying-the-dashboard)
  - [Code](#Code)
- [Conclusion](#Conclusion)

---

## What is react-cumulio

react-cumulio is an React library. With this library you can easily embed one or more Cumul.io dashboards in your web application.  
The library is compatible with versions of React 16.12 and higher. We use the new React hooks so your react version needs to be up to date.
For more information about react-cumulio, [visit the readme on npm](https://www.npmjs.com/package/react-cumulio). For more information about Cumul.io or making your own dashboard, [visit the website](https://cumul.io/main).

---

## What we will build

This tutorial is split up in 2 parts, this is part 1. In this part we will make a simple one page React application with an embedded Cumul.io dashboard.  
In [part 2](https://github.com/cumulio/react-cumulio-demo-part2/blob/master/README.md), we will make a multipage React application with several dashboards.

---

## Requirements

Basic knowledge of React, React hooks with state management and npm  
Terminal / command line

---

# Part 1 - Embedding a Cumul.io dashboard

In this part we will make a simple React application with an embedded dashboard. You can use the dashboards we provide further in the tutorial or you can use your own dashboards. If you want to make your own dashboards, head over to [Cumul.io](https://cumul.io/main) and sign up to start a free trial. Here you can make your own dashboards.

## Setup React App

**Let's get started!**  
First, create a new react project with typescript:

```bash
yarn create react-app my-dashboard-website --template typescript
```

We can start this React app by using the **`yarn start`** command, but be sure you are in the correct directory.  
Go to [**`localhost:3000`**](https://localhost:3000/) to see your app in action.

Next, install the library by using the following command in your **`terminal`**:

```bash
yarn add react-cumulio
```

OR

```bash
npm i react-cumulio
```

---

## Displaying the dashboard

The `App.tsx` is already created and can be modified. 

**First import the definitions from our library.**

```typescript
import {
    CumulioComponent,
    CumulioContext,
    initialState,
    reducer
} from "react-cumulio";
```

**Use the useReducer hook from React**

For more information about the use of React hooks, [click here.](https://reactjs.org/docs/hooks-reference.html)

Now we will need to add some HTML and CSS to add a simple toolbar and footer.
Replace the **`App component`** with the following code:

```typescript
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="main">
      <div className="toolbar" role="banner">
        <span>My Website</span>
      </div>
      <div className="content" role="main">
        <CumulioContext.Provider value={{ state, dispatch }}>
          <CumulioComponent
            dashboardId="763177aa-9b93-4ae7-903e-3cb07dc593d8"
          />
        </CumulioContext.Provider>
      </div>
      <footer className="footer"><span></span></footer>
    </div >
  );
}
```
and put this styling in **`App.css`**

```CSS
body {
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 14px;
  color: #333;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.toolbar {
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #3a3a3a;
  color: white;
  font-weight: 600;
}

.toolbar span {
  padding-left: 1rem;
}


.content {
  display: flex;
  margin: 32px auto;
  padding: 0 16px 16px;
  flex-direction: column;
  align-items: center;
}

.footer {
  height: 60px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3a3a3a;
  color: white;
  font-weight: 600;
}
```

Now you should see a dashboard appear.  
Remember, you can also use your own dashboards or try some other ones below:

```typescript
"55cfb99c-d602-492b-b192-6c15277fdb9a"
"763177aa-9b93-4ae7-903e-3cb07dc593d8"
"722fa789-89c8-4149-be4d-bc3eb348a65f"
"eb8a3bec-2d19-4229-b40a-2f31ad379780"
"8ce7c60d-0c80-439b-b2af-2874472ad1b5"
"2007fd48-59ef-4c5f-ace7-b63048d9fc11"
"035c0304-0bfe-4b7c-8c10-a4acb8eb9d76"
"8929b954-b8b0-4d71-8679-e857dbf30649"
"b114e125-017f-430d-b6d4-96d9e6af97a0"
"cba39d0a-f5ac-4cd9-b1a2-e26bbb98e22b"
"7f51e6a5-e31e-4f34-8c88-27edc51570f2"
"ff16ad9f-fd27-4e09-b4a8-a6ab71b980dc"
```

Our background color doesn't match the color of our dashboard background.  
The color of this dashboard is **`rgb(238, 243, 246)`**.  
When you create a dashboard you can choose dashboard background color, but now we will have to change the background of our application. Change the body background color in the main **`index.css`**.

```CSS
html, body {
  height: 100%;
  margin: 0;
}
body {
  background-color: rgb(238, 243, 246);
}
```

Now we can add some variables to our dashboard. Here is a list of all the variables we can add to our dashboard.  
For a more detailed description of the variables go to the readme page of the library: [react-cumulio](https://www.npmjs.com/package/react-cumulio)

```Typescript
dashboardId: string;
chartId: string;
key: string;
token: string;
language: string;
screenmode: string;
switchScreenmodeOnResize: boolean;
loaderBackground: string;
loaderFontColor: string;
loaderSpinnerColor: string;
loaderSpinnerBackground: string;
loaderLogoColor: string;
```

For now let us add a background color to the loader so that when your dashboard is loading, it has the same background color as the body.

```typescript
<CumulioComponent
  dashboardId="763177aa-9b93-4ae7-903e-3cb07dc593d8"
  loaderBackground="rgb(238, 243, 246)"
/>
```

Let's say we want to change our loader colors to match our dashboard.

```typescript
<CumulioComponent
  dashboardId="763177aa-9b93-4ae7-903e-3cb07dc593d8"
  loaderBackground="rgb(238, 243, 246)"
  loaderFontColor="rgb(238, 243, 246)"
  loaderSpinnerColor="rgb(238, 243, 246)"
  loaderSpinnerBackground="rgb(238, 243, 246)"
/>
```

Now the loader and the font color are in a blue color.
You can also have multiple dashboards on one page if you want. Just add another **`CumulioComponent`** in the **`content`** div and watch the magic happen.

---

## Code
[Github Code](https://github.com/cumulio/react-cumulio-demo-part-1) 
---

# Conclusion

As you can see it is easy to add a Cumul.io dashboard to your website by using this library.  
You only have to do some minimal styling in your application, because the dashboard will always take up the full width of the parent and then calculate the height it needs to show the full dashbaord. The only tricky thing you need to do is find a nice spot in your application for your dashboard.

[Code Part 1](https://github.com/cumulio/react-cumulio-demo-part-1) | [Demo Part 1](https://stackblitz.com/edit/react-cumulio-demo-part-1)  
[Go to part 2 to make a multipage application with several embedded dashboards!](https://github.com/cumulio/react-cumulio-demo-part2/blob/master/README.md)

---
