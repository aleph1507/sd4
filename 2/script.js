let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
for(let i =0 ; i<days.length; i++)
  console.log(`${days[i]}: ${i<days.length - 2 ? 'Working' : 'Weekend'}`);
