/* eslint-disable no-console */
import { React } from 'react';

import TotalSalary from '../services/TotalSalary';
const EmployeeDetails = (context) => {
	const { data } = context;

	const employeeList = TotalSalary(data);

	return employeeList.map((emp, i) =>
		<tr key={ i }>
			<td>{ emp.empId }</td>
			<td>{ emp.empName }</td>
			<td>{ emp.age }</td>
			<td>{ emp.hiredate }</td>
			<td>{ emp.basic }</td>
			<td>{ emp.allowance }</td>
			<td>{ emp.monthlySalary }</td>
			<td>{ emp.bonusPercent }%</td>
			<td>{ emp.bonusAmount }</td>
			<td>{ emp.TotalSalary }</td>
		</tr>);
};

export default EmployeeDetails;
