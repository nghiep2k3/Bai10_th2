import { useState } from "react";
import styles from './component/styles.module.css'

// export default function App() {
//   const [numClicked, setNumClicked] = useState(0);
//   const handleClick = () => {
//     setNumClicked(numClicked + 1);
//   };
//   const textStyle = (numClicked % 2 === 0) ? styles.textBlue : styles.textRed;
//   return (
//     <div className="App">
//       <button onClick={handleClick}>Click here</button>
//       <h2 className={textStyle}>You clicked {numClicked} times</h2>
//     </div>
//   );
// }

export default function App() {
  const [numClicked, setNumClicked] = useState(0);
  const handleClick = () => {
    setNumClicked(numClicked + 1);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Click here</button>
      <h2
        style={{
          color: (numClicked % 2 === 0) ? 'blue' : 'red'
        }}
      >You clicked {numClicked} times</h2>
    </div>
  );
}