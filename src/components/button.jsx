// export default function Button() {
//   function handleClick() {
//     alert('你点击了我！');
//   }

//   return (
//     <button onClick={handleClick}>
//       点我
//     </button>
//   );
// }

// export default function Button() {

//   return (

//     <div className="Toolbar" onClick={() => {
//       alert('点击了 toolbar');
//     }}>
//       <button onClick={(e) => {
//         e.stopPropagation()
//         alert("点击了button")
//       }}>
//         播放电影
//       </button>
//     </div>
//   );
// }

import { useState } from 'react';
export default function Button() {

  const [pending, setPending] = useState(0);
  async function handleClick() {
      setPending(pending + 1);
      setTimeout(() => {
        console.log(pending)
        }, 3000);
    }

  return (
    <div className="Toolbar">
      <h1>{pending}</h1>
      <button onClick={handleClick}>
        Number+1
      </button>
    </div>
  );
}

// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   })
// }