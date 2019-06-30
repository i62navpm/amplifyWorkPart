// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    email
    companies {
      items {
        id
        name
        cif
        image
        address
        phone
        email
        web
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    email
    companies {
      items {
        id
        name
        cif
        image
        address
        phone
        email
        web
      }
      nextToken
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    email
    companies {
      items {
        id
        name
        cif
        image
        address
        phone
        email
        web
      }
      nextToken
    }
  }
}
`;
export const createCompany = `mutation CreateCompany($input: CreateCompanyInput!) {
  createCompany(input: $input) {
    id
    name
    cif
    image
    address
    phone
    email
    web
    user {
      id
      email
      companies {
        nextToken
      }
    }
    employees {
      items {
        id
        name
        nif
        image
        address
        phone
        email
        description
        fullSalary
        halfSalary
      }
      nextToken
    }
  }
}
`;
export const updateCompany = `mutation UpdateCompany($input: UpdateCompanyInput!) {
  updateCompany(input: $input) {
    id
    name
    cif
    image
    address
    phone
    email
    web
    user {
      id
      email
      companies {
        nextToken
      }
    }
    employees {
      items {
        id
        name
        nif
        image
        address
        phone
        email
        description
        fullSalary
        halfSalary
      }
      nextToken
    }
  }
}
`;
export const deleteCompany = `mutation DeleteCompany($input: DeleteCompanyInput!) {
  deleteCompany(input: $input) {
    id
    name
    cif
    image
    address
    phone
    email
    web
    user {
      id
      email
      companies {
        nextToken
      }
    }
    employees {
      items {
        id
        name
        nif
        image
        address
        phone
        email
        description
        fullSalary
        halfSalary
      }
      nextToken
    }
  }
}
`;
export const createEmployee = `mutation CreateEmployee($input: CreateEmployeeInput!) {
  createEmployee(input: $input) {
    id
    name
    nif
    image
    address
    phone
    email
    description
    fullSalary
    halfSalary
    company {
      id
      name
      cif
      image
      address
      phone
      email
      web
      user {
        id
        email
      }
      employees {
        nextToken
      }
    }
  }
}
`;
export const updateEmployee = `mutation UpdateEmployee($input: UpdateEmployeeInput!) {
  updateEmployee(input: $input) {
    id
    name
    nif
    image
    address
    phone
    email
    description
    fullSalary
    halfSalary
    company {
      id
      name
      cif
      image
      address
      phone
      email
      web
      user {
        id
        email
      }
      employees {
        nextToken
      }
    }
  }
}
`;
export const deleteEmployee = `mutation DeleteEmployee($input: DeleteEmployeeInput!) {
  deleteEmployee(input: $input) {
    id
    name
    nif
    image
    address
    phone
    email
    description
    fullSalary
    halfSalary
    company {
      id
      name
      cif
      image
      address
      phone
      email
      web
      user {
        id
        email
      }
      employees {
        nextToken
      }
    }
  }
}
`;
