const useAuth = () => {
  // Return a mock authenticated user
  return {
    data: {
      user: {
        _id: 'mock-user-id',
        name: 'Mock User',
        email: 'mock@example.com',
        currentWorkspace: { _id: 'mock-workspace-id' }
      }
    },
    isLoading: false
  };
};

export default useAuth;
