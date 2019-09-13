const projects = [
  {
    name: 'rilis.',
    subheading: 'Discover the latest releases on Spotify from your favourite artists',
    description: `
    <p>
      Rilis was built to show the latest releases from artists you follow on Spotify.
      <br>
      The main reason that pushed me to create Rilis is that Spotify does not provide
      a handy way to do that, even if it was requested multiple times by multiple
      users.
    </p>
    <p>
      My goal was to create a simple-to-use web application using for the first time
      <a href="//vuejs.org" target="_blank">Vue.js</a> and Spotify's Web APIs, along
      with <a href="//vuex.vuejs.org/" target="_blank">Vuex</a> and
      <a href="//sass-lang.com" target="_blank">Sass</a>.

    </p>`,
    links: [
      {
        name: 'repository',
        icon: 'github',
        link: 'https://github.com/macarie/rilis'
      },
      {
        name: 'website',
        icon: 'link',
        link: `https://rilis.macarie.me/`
      }
    ],
    image: {
      link: '/projects/rilis.png',
      description: 'placeholder'
    }
  }
]

export default projects
