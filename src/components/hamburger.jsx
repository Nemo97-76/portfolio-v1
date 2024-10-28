export default function Hamburger({isOpen}){
    return(
        <>
        <div className="hamburger">
            <div style={{transform:`${isOpen?'rotate(30deg)':"rotate(0)"}`}} className="burger burger1"></div>
            <div style={{transform:`${isOpen?"translateX(100%)":"translateX(0)"}`,opacity:`${isOpen?"0":"1"}`}} className="burger burger2"></div>
            <div style={{transform:`${isOpen?'rotate(-30deg)':"rotate(0)"}`}} className="burger burger3"></div>
        </div>
        </>
    )
}