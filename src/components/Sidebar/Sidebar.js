import React from 'react'

const Sidebar = () => {
    const [firstChange, setfirstChange] = useState(0)
    const [secondChange, setSecondChange] = useState(0)

    const onClickHandler=(e)=>{
        e.preventDefault();

        setfirstChange(1);
        setSecondChange(2);
    }

  return (
    <div>
      <button onClick={onClickHandler}>Click Me</button>
    </div>
  )
}

export default Sidebar
