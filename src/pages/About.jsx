// вставьте переменную info в текст страницы About
export const info = 'Текст-переменная страницы About, для вставки в JSX';

function About(props) {
  return (
    <div>
      {info}
      {props.component}      
    </div>
  );
}

export default About;
