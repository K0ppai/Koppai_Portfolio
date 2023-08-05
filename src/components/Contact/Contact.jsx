
const Contact = ({theme}) => {
  return (
    <div className={`${theme === 'light' ? 'bg-gray-500': 'bg-black'}`}>
      Contact
    </div>
  )
}

export default Contact
