cd; // file path: src/profile.js

const printProfile = function (profileData) {
  const {
    name,
    company
  } = profileData;
  console.log(`${name} from ${company}`);
};