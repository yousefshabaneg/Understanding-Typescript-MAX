abstract class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];
  static fiscalYear = 2023;

  constructor(public readonly id: number, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;
  /**
    {
    // Extra type safety^
    // this.id = 5; // can't assign cause it is a readonly field
    console.log(`Department: ${this.id} ${this.name}`);
  }
   */

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log(`Length: ${this.employees.length}`);
    console.log(`Employees: ${this.employees}`);
  }
}

class ItDepartment extends Department {
  constructor(id: number, public admins: string[]) {
    super(id, "IT");
  }

  describe(this: Department): void {
    console.log(`IT Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error("Please pass in a valid value");

    this.addReport(value);
  }

  private constructor(id: number, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (!this.instance) this.instance = new AccountingDepartment(2, []);

    return this.instance;
  }

  describe() {
    console.log(`Accounting Department - ID: ${this.id}`);
  }

  addEmployee(employee: string) {
    if (employee === "Yousef") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const emp1 = Department.createEmployee("Max");
console.log(emp1, Department.fiscalYear);

const it = new ItDepartment(1, ["Admin1", "Admin2"]);
it.addEmployee("Yousef");
it.addEmployee("Max");
/* engineering.employees[2] = "Joe"; not valid with private modifier */

it.describe();
it.name = "NEW-NAME";
it.printEmployeesInformation();

console.log(it);

const accounting = AccountingDepartment.getInstance();
accounting.addReport("Something went wrong...");
accounting.printReports();

accounting.mostRecentReport = "New Report";

console.log(accounting.mostRecentReport);
console.log(accounting.describe());

accounting.addEmployee("Yousef");
accounting.addEmployee("Max");
accounting.printEmployeesInformation();
// const engineeringCopy = { name: "DUMMY", describe: engineering.describe };
// engineeringCopy.describe();
