// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      companies {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getCompany = `query GetCompany($id: ID!) {
  getCompany(id: $id) {
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
export const listCompanys = `query ListCompanys(
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getEmployee = `query GetEmployee($id: ID!) {
  getEmployee(id: $id) {
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
export const listEmployees = `query ListEmployees(
  $filter: ModelEmployeeFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      company {
        id
        name
        cif
        image
        address
        phone
        email
        web
      }
    }
    nextToken
  }
}
`;
