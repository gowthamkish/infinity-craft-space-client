import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/login/Login";
import Register from "./components/register/Register";
import Layout from "./components/common/Layout";
import NotFound from "./components/common/NotFound";
import Profile from "./components/profile/Profile";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Home />} /> */}
            <Route path="/" element={<LoginPage />} />
            <Route path="register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
