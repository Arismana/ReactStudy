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

export default function Button() {

  return (

    <div className="Toolbar" onClick={() => {
      alert('点击了 toolbar');
    }}>
      <button onClick={(e) => {
        e.stopPropagation()
        alert("点击了button")
      }}>
        播放电影
      </button>
    </div>
  );
}