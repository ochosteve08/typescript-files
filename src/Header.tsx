
export interface Props {
    title: string
    color?: string
}
const Header=(props: Props)=>{

    let {title, color} = props
   return(
     <header>
        <h1 style={{color: color? color: "blue"}}>{title}</h1>
    </header>
   )

}

export default Header