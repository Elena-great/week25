import logo from './logo.svg';
import './App.css';
import {Pie} from 'react-chartjs-2';


function App() {
  return (
    <div className="App">
      <h1>Образование мусора в мире</h1>
      <Pie data={
        {
          labels: [
            'Ближний Восток и Северная Африка',
            'Восточная Азия и Тихий Океан',
            'Европа и Центральная Азия',
            'Южная Азия',
            'Северная Америка',
            'Латинская Америка и Карибские острова',
            'Южная Африка',
          ],
          datasets: [{
            data: [6, 23, 19, 17, 14, 12, 9],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 211, 191, 0.2)',
            ],

            borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 211, 191, 1)',
      ],
            borderWidth: 1,
          }]
        }
      }
        
      />
    </div>
  );
}

export default App;
