import { FIND_EMPLOYEE, FIND_EMPLOYEE_SAGA, FIND_CUSTOMER_SAGA, FIND_CUSTOMER } from "../types";

export const findEmployee = () => {
  return { type: FIND_EMPLOYEE_SAGA };
};

export const findCustomer = () => {
  return { type: FIND_CUSTOMER_SAGA };
};