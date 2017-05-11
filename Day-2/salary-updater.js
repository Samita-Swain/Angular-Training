"use strict";
exports.__esModule = true;
var Organization_1 = require("./Organization");
var salary_upgrader_1 = require("./salary-upgrader");
var org = new Organization_1.Organization('ABC');
org.createEmployees();
org.printEmployeesInfo();
var salaryUpgrader = new salary_upgrader_1.SalaryUpgrader();
salaryUpgrader.incrementSalary(10, org.getEmployeeList());
org.printEmployeesInfo();
