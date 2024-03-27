// utils.js or a similar utility file
export const getUserDetails = () => {
    const userDetailsString = localStorage.getItem('userDetails');
    return userDetailsString ? JSON.parse(userDetailsString) : null;
  };

export const getQuestionId = () => {
  return localStorage.getItem('questionId');
};

export const getCurrentMentorID = () => {
  return localStorage.getItem('currentMentor');
};
  