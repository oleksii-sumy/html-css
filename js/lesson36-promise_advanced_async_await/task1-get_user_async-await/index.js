export const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      return null;
    }
    const userData = await response.json();
    returnuserData;
  } catch (err) {
    throw new Error('Failed to get user data');
  }
};

