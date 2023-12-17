import './App.css';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';


const line_data = [
  {
    name: 'Python',
    student: 13,
    fees: 10,
  },
  {
    name: 'JavaScript',
    student: 15,
    fees: 12,
  },
  {
    name: 'PHP',
    student: 9,
    fees: 8,
  },
  {
    name: 'C#',
    student: 10,
    fees: 9,
  },
  {
    name: 'C',
    student: 9,
    fees: 9,
  },
  {
    name: 'C++',
    student: 11,
    fees: 10,
  }
]

function App() {
  return (
    <div>
      <h1 className='chart-headding'>Line Chart</h1>
      <ResponsiveContainer width={'100%'} aspect={3}>
        <LineChart data={line_data} width={500} height={300} margin={{top:5,right:200,left:20,bottom:5}} >
        <CartesianGrid strokeDasharray={'3 3'} />
        <XAxis dataKey={'name'} interval={'preserveStartEnd'} tickFormatter={(value)=>
          value+' programming'
        } />
        <YAxis />
        <Tooltip contentStyle={{ backgroundColor:'yellowgreen' }} />
        <Legend />
          <Line type={"monotone"} dataKey={'student'} stroke='red' activeDot={{r:8}} />
          <Line type={"monotone"} dataKey={'fees'} stroke='green' activeDot={{r:8}} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
