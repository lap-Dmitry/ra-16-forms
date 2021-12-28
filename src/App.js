import './App.css';
import ConverterColor from './components/converterColor/ConverterColor';
import StepsBook from './components/steps/StepsBook';

function App() {
  return (
    <>
    <div className='container'>
      <div className='title'>Конвертер цветов</div>
      <ConverterColor color={'#9921ff'} />
      </div>
    <div className='container'>      
    <div className='title'>Учёт тренировок</div>
      <StepsBook trainings={[]}/>
    </div>
    </>
  );
}

export default App;
