const currentInputValues = {
    firstName: 'hahaha', // Must be at least 2 characters
    lastName: 'ea', // Must be at least 2 characters
    zipCode: '65486', // Must be exactly 5 characters
    state: 'JK', // Must be exactly 2 characters
}

const atLeast = min => value => value.length >= min
const exactly = exact => value => value.length === exact

const inputCriteria = {
    firstName: [atLeast(2)],
    lastName: [atLeast(2)],
    zipCode: [exactly(5)],
    state: [exactly(2)],
};

const getErrorMessages = (inputs, criteria) => Object.keys(inputs).reduce((acc, fieldName) => 
    [...acc,
      ...criteria[fieldName].reduce((acc2, validator) => {
      if (!validator(inputs[fieldName])) {
        return [...acc2, JSON.stringify(fieldName) + ' fails validation']
      } else {
        return acc2
      }
    }, [])]
  , [])


console.log(getErrorMessages(currentInputValues, inputCriteria));

/*
    Expected Output: [
        'First name must be at least 2 characters',
        'Last name must be at least 2 characters',
        'Zip code must be exactly 5 characters',
        'State must be exactly 2 characters',
    ]
    */