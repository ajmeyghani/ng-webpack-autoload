export default ngModule => {
  ngModule.factory('mainService', () => {
    return {
      data: [1, 2, 3, 4],
      getName() {
        console.log('this is the main service');
      }
    };
  });
};
