
import './App.css';
import Card from './components/Card';

function App() {
  const item = {
    title: 'Наш заголовок карточки',
    text: 'Наш текст карточки',
    link: 'Наша ссылка',
  }
  return (
    <Card item={item}>
    {/* Вставляемое изображение */}
    {/* <img src='' className='card-img' alt='' />  */}
    </Card>
  )
}

export default App;
