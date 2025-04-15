import CSS from "../Category/Category.css"
import Level from "../../Components/Level"
import { useAuth } from "../../Components/context"

function Category() {
    const levels = [
        {name: "Penjumlahan", display: "2+2", color:"red"},
        {name: "Pengurangan", display: "4-1", color:"blue"},
        {name: "Pembagian", display: "10/5", color:"green"},
        {name: "Perkalian", display: "2X2", color:"purple"}
    ]
    
    const levelCircles = levels.map((level)=>{
        return <Level 
        levelName={level.name} 
        levelDisplay={level.display}
        color={level.color}
        key={level.name}
        />
    })

    const {name, setNameFunction} = useAuth()


  return (
    <main className='categories-main'>
        <div className="top">
            <p>Hello {name} 👋<br />
             Silahkan pilih kategori yang anda ingin mainkan</p>
        </div>
        

        <div className="categories-body">
            <h1>Categories</h1>

        <div className="categories-container">
            {levelCircles}
            
            </div>
            
        </div>
    </main>
  )
}

export default Category