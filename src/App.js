import { React } from 'react';
import './App.scss';
import EmployeeTable from './components/EmployeeTable';

const App = (context) =>
	<div className="App">
		<font size="+5">EMPLOYEE DETAILS.</font>
		<EmployeeTable { ...context }/>
	</div>;

export default App;
