const year = 2025
const month = 8
const day = 20

function formatDate(){
    return year + '年' + month + '月' + day + '日'
}


const Banner = (props) =>{
    return (
        <>
        <div>函数式组件</div>
        <div>今天是: {formatDate()}</div>
        <div>名字：{props.name}</div>
        <div>年龄：{props.age}</div>
        </>
    )
}

export default Banner;