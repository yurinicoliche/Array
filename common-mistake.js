const user = [{name: 'Charlie', age: '35'}, {name: 'Alice', age: '32'}, {name: 'Mick', age: '25'}];

function sortUsersbyname() {
  const sortedUsers = [...user].sort((a, b) => a.name.localeCompare(b.name));
  return sortedUsers;
}

const sortedUsers = sortUsersbyname();

console.log(user);

console.log(sortedUsers);
