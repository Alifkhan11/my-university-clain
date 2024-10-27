export const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  export const monthOptions = monthNames.map((item) => ({
    value: item,
    label: item,
  }));


  export const gender=['Male','Female','Other']

  export const genderOption=gender.map((item)=>({
    value:item,
    label:item
  }))

  export const bloodGroup=['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']


  export const bloodGroupOption=bloodGroup.map((item)=>({
    value:item,
    label:item
  }))