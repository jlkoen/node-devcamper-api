db.createUser({
  user: 'devcamper_user',
  pwd: 'devcamper_pass',
  roles: [
    {
      role: 'dbOwner',
      db: 'devcamper',
    },
  ],
});
