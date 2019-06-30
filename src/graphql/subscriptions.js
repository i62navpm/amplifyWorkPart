// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateCompany = `subscription OnCreateCompany {
  onCreateCompany {
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
export const onUpdateCompany = `subscription OnUpdateCompany {
  onUpdateCompany {
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
export const onDeleteCompany = `subscription OnDeleteCompany {
  onDeleteCompany {
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
export const onCreateEmployee = `subscription OnCreateEmployee {
  onCreateEmployee {
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
export const onUpdateEmployee = `subscription OnUpdateEmployee {
  onUpdateEmployee {
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
export const onDeleteEmployee = `subscription OnDeleteEmployee {
  onDeleteEmployee {
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
