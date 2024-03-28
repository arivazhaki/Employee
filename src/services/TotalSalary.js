/* eslint-disable no-magic-numbers */
import { bonus } from '../data/Employee';

const getTotalSalary = (details) => {
	const bonusPercent = bonus.find((x) =>
		x.salary <= details.monthlySalary).bonus;
	const bonusAmount
	= Math.floor((bonusPercent / 100) * details.monthlySalary);

	return {
		...details,
		bonusPercent: bonusPercent,
		bonusAmount: bonusAmount,
		TotalSalary: details.monthlySalary * 12 + bonusAmount,
	};
};
const getemployeeDetails = (details) => ({
	empId: details.employeeid,
	empName: details.name,
	age: details.age,
	hiredate: details.hiredate,
	basic: details.basic,
	allowance: details.allowance,
	monthlySalary: details.basic + details.allowance,
});

const TotalSalary = (employee) => {
	const employeeDetail = employee.map(getemployeeDetails);
	const TotalSal = employeeDetail.map(getTotalSalary);

	return TotalSal ;
};

export default TotalSalary;
