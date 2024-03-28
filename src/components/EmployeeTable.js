import React from 'react';
import { Employee } from '../data/Employee';
import EmployeeDetails from './EmployeeDetails';

const EmployeeTable = (context) => {
	const { config: { labels }} = context;

	return <div>
		<table border="3" color="blue">
			<thead>
				<tr>
					{ labels.map((label, i) =>
						<th key={ i }>{ label }</th>) }
				</tr>
			</thead>
			<tbody>
				<EmployeeDetails { ...{ ...context, data: Employee } }/>
			</tbody>
		</table>
	</div>;
};

export default EmployeeTable;
