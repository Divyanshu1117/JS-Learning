const a1 = {
  name: "Harry",
  section: 1,
  isPrincipal: false
};

a1['friend'] = "Shubham";  // Add new property
a1['name'] = "Lovish";     // Modify existing property

console.log(a1);
/*
{
  name: "Lovish",
  section: 1,
  isPrincipal: false,
  friend: "Shubham"
}
*/