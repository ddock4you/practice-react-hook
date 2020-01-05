import React, { useState } from "react";

const UseStateHook = () => {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);
    return (
        <div className="App">
            <h1>useState 기본 {item}</h1>
            <h2>Start editing to see some magic happen!</h2>
            <button onClick={incrementItem}>증가</button>
            <button onClick={decrementItem}>감소</button>
        </div>
    );
};

/// 기존의 class 컴포넌트로 작성 시
// export class AglyApp extends React.Component {
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

export default UseStateHook;
