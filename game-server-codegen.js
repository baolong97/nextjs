module.exports = {
  overwrite: true,
  schema: {
    'https://3nfu22h7lvdjff62uhpg6ztaki.appsync-api.us-east-2.amazonaws.com/graphql':
    {
      headers: {
        'x-api-key': `${process.env.GAME_SERVER_X_API_KEY}`,
      },
    },
  },
  documents: 'src/game-server-graphql/**/*.graphql',
  generates: {
    'src/generated/game-server-graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
    },
  },
};
