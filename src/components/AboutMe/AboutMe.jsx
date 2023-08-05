
const AboutMe = ({theme}) => {
  return (
    <div className={`${theme === 'light' ? 'text-orange-100': 'text-black'}`}>
      AboutMe
    </div>
  )
}

export default AboutMe
