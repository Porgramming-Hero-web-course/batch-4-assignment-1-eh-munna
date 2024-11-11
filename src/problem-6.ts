{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const myProfile = {
    name: 'Alice',
    age: 25,
    email: 'alice@example.com',
  };

  const updateProfile = (profile: Profile, update: Partial<Profile>) => {
    return { ...profile, ...update };
  };
}
