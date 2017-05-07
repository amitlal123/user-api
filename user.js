var user =
{
  name: 'Mr X',
  location: 'SLC',
  occupations: ['developer', 'learner'],
  hobbies: [
    {
      name: 'movies',
      type: 'past'
    },
    {
      name: 'music',
      type: 'current'
    },
    {
      name: 'travel',
      type: 'current'
    }
  ],
  family: [
    {
      name: 'Ms Y',
      relation: 'Wife',
      gender: 'F'
    },
    {
      name: 'Mr P',
      relation: 'Dad',
      gender: 'M'
    },{
      name: 'Ms Q',
      relation: 'Mom',
      gender: 'F'
    }
  ],
  restaurants: [
    {
      name: 'Best Thai',
      type: 'Thai',
      rating: 8
    },
    {
      name: 'The Italian',
      type: 'Italian',
      rating: 9
    },
    {
      name: 'Hummus',
      type: 'Mediterranian',
      rating: 10
    }
  ]
};

module.exports = user;
