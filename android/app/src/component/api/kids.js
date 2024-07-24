



const kidsstories = [
    { 
        id: 1, title: 'The Brave Tiger and the Value of Friendship', link: require('../../images1/ravi.mp4'), image: require('../../images1/five.png')
    },
    {
        id: 2, title: 'Radha and the Magical Book', link: require('../../images1/one.mp4'), image: require('../../images1/six.png')
    },
    { 
        id: 3, title: 'Five Monkeys', link: require('../../images1/two.mp4'), image: require('../../images1/five.png')
    },
    {
        id: 4, title: 'Tu Ani Me', link: require('../../images1/ravi.mp4'), image: require('../../images1/six.png')
    },
    {
        id: 5, title: 'March of the Ants', link: require('../../images1/one.mp4'), image: require('../../images1/five.png')
    },
    {
        id: 6, title: 'The Song of Birds', link: require('../../images1/two.mp4'), image: require('../../images1/six.png')
    },
    {
        id: 7, title: 'The Brave Tiger and the Value of Friendship', link: require('../../images1/ravi.mp4'), image: require('../../images1/five.png')
    },
    {
        id: 8, title: 'Gajraj and the Magical River', link: require('../../images1/one.mp4'), image: require('../../images1/six.png')
    },
    {
        id: 9, title: 'Chikus Cleverness', link: require('../../images1/two.mp4'), image: require('../../images1/five.png')
    },
    {
        id: 10, title: 'Sunrise Symphony', link: require('../../images1/ravi.mp4'), image: require('../../images1/six.png')
    },
    {
        id: 11, title: 'The Power of Unity The Tale of the Forester Ants', link: require('../../images1/one.mp4'), image: require('../../images1/five.png')
    },
    {
        id: 12, title: 'The Natures Symphony', link: require('../../images1/two.mp4'), image: require('../../images1/six.png')
    },
    {
        id: 13, title: 'Chunnu the Brave Squirrel', link: require('../../images1/ravi.mp4'), image: require('../../images1/five.png')
    },
    {
        id: 14, title: 'Melodies of Petals', link: require('../../images1/one.mp4'), image: require('../../images1/six.png')
    },
    {
        id: 15, title: 'The Clever Little Rabbit', link: require('../../images1/two.mp4'), image: require('../../images1/five.png')
    },
    {
        id: 16, title: 'The Clever Bird and the Jackal', link: require('../../images1/ravi.mp4'), image: require('../../images1/six.png')
    },
    {
        id: 17, title: 'Queen Butterflys Dream', link: require('../../images1/one.mp4'), image: require('../../images1/five.png')
    },
    {
        id: 18, title: 'Gajraj and the Rivers Friendship', link: require('../../images1/two.mp4'), image: require('../../images1/six.png')
    },
    {
        id: 19, title: 'March of the Ants', link: require('../../images1/ravi.mp4'), image: require('../../images1/five.png')
    },
    {
        id: 20, title: 'Meena and the Magical Pen', link: require('../../images1/one.mp4'), image: require('../../images1/six.png')
    },
    {
        id: 21, title: 'The Bugs Adventure', link: require('../../images1/two.mp4'), image: require('../../images1/five.png')
    },
    {
        id: 22, title: 'Timmy and the Magical Book', link: require('../../images1/ravi.mp4'), image: require('../../images1/six.png')
    },
    {
        id: 23, title: 'The Grasshoppers Lesson A Tale of Work and Play', link: require('../../images1/one.mp4'), image: require('../../images1/five.png')
    },
    {
        id: 24, title: 'Golu and the Magical Tree', link: require('../../images1/two.mp4'), image: require('../../images1/six.png')
    },
    {
        id: 25, title: 'The Power of Unity The Tale of the Forester Ants', link: require('../../images1/ravi.mp4'), image: require('../../images1/five.png')
    }
  ];
  
  export const getKids = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(kidsstories);
      }, 1000); 
    });
  };
  