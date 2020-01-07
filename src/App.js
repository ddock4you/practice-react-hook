import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UseStateJs from "./components/UseStateJs";
import Header from "./components/Header";
import UseTabHook from "./components/UseStateJs/UseTabsHook";
import UseEffectHook from "./components/UseEffectJs/UseEffectHook";
import UseTitleHook from "./components/UseEffectJs/UseTitleHook";
import UseClickHook from "./components/UseEffectJs/UseClickHook";
import UseConfirmHook from "./components/UseEffectJs/UseConfirmHook";
import UsePreventLeaveHook from "./components/UseEffectJs/UsePreventLeaveHook";
import UseBeforeLeaveHook from "./components/UseEffectJs/UseBeforeLeaveHook";

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={UseStateJs} />
                <Route path="/use_tab" exact component={UseTabHook} />
                <Route path="/use_effect" exact component={UseEffectHook} />
                <Route path="/use_title" exact component={UseTitleHook} />
                <Route path="/use_click" exact component={UseClickHook} />
                <Route path="/use_confirm" exact component={UseConfirmHook} />
                <Route
                    path="/use_prevent_leave"
                    exact
                    component={UsePreventLeaveHook}
                />
                <Route
                    path="/use_before_leave"
                    exact
                    component={UseBeforeLeaveHook}
                />
            </Switch>
        </Router>
    );
};

// function App() {
//     const [item, setItem] = useState(1);
//     const incrementItem = () => setItem(item + 1);
//     const decrementItem = () => setItem(item - 1);
//     return (
//         <div className="App">
//             <h1>Hello {item}</h1>
//             <h2>Start editing to see some magic happen!</h2>
//             <button onClick={incrementItem}>증가</button>
//             <button onClick={decrementItem}>감소</button>
//         </div>
//     );
// }

// 기존의 class 컴포넌트로 작성 시
// class App extends React.Component {
//     state = {
//         item: 1
//     };

//     incrementItem = () => {
//         this.setState({
//             item: this.state.item + 1
//         });
//     };

//     decrementItem = () => {
//         this.setState({
//             item: this.state.item - 1
//         });
//     };

//     render() {
//         const { item } = this.state;

//         return (
//             <div className="App">
//                 <h1>Hello {item}</h1>
//                 <h2>Start editing to see some magic happen!</h2>
//                 <button onClick={this.incrementItem}>증가</button>
//                 <button onClick={this.decrementItem}>감소</button>
//             </div>
//         );
//     }
// }

export default App;
