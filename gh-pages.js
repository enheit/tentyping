import ghpages from 'gh-pages'

ghpages.publish(
  'build',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/enheit/tentyping.git',
    user: {
      name: 'enheit',
      email: 'roman.mahotskyi@gmail.com'
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
)