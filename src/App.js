import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import "@/App.scss";
const Login = React.lazy(() => import("@/pages/Login"));
const Home = React.lazy(() => import("@/pages/Home"));
function App() {
  return (
    <Router>
      <div>
        {/* Switch开关: 由上到下匹配，当匹配成功一个后就会停止当前匹配*/}
        {/* Redirect重定向: 当Route没有匹配成功时，就会执行这行代码*/}
        {/* exact属性表示精准匹配:  */}
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Redirect exact from="/" to="/home"></Redirect>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
