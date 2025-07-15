
const Filterbtn = ({onClick,value,Buttons,className}) => {


  return (
      <>
            <button type="button" className={className} value={value} onClick={onClick} >{Buttons}</button>
            </>
  )
}

export default Filterbtn
