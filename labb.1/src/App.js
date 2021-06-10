import './App.css';
import Books from './components/Books';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [books] = useState([
    {
      id: 1,
      title: 'A Man Called Ove',
      author: 'Fredrik Backman',
      summary: '60-year-old widower Ove Lindahl lives in a townhouse neighborhood, where he used to be the chairman of the neighborhood association, until he was replaced by Rune, his former friend. Rune is now paralysed after suffering a stroke, and being cared for by his wife, Anita.',
      img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405259930l/18774964.jpg'
    },
    {
      id: 2,
      title: 'Britt-Marie Was Here',
      author: 'Fredrik Backman',
      summary: 'The plot of the novel focuses on a "nag-hag" woman who has recently left her cheating husband and has taken on a job in the city of Borg, working at the recreation center. The city itself is barely a full town, with only a pizzeria and a florist shop open. There, Britt-Marie finds herself responsible for a group of children in an impoverished area of town in need of revamping.',
      img: 'https://images-na.ssl-images-amazon.com/images/I/91T35G9IgNL.jpg'
    },
    {
      id: 3,
      title: 'Book 3',
      author: 'Author 3',
      summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error aut doloribus, dignissimos cumque facilis optio id culpa consequuntur quam molestiae eius rem voluptatem quia, dolorum quisquam voluptatibus, nobis tempore nam veritatis beatae sint? Quos nostrum ratione voluptatem ut ea fugit?',
      img: 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg'
    },
    {
      id: 4,
      title: 'Book 4',
      author: 'Author 4',
      summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error aut doloribus, dignissimos cumque facilis optio id culpa consequuntur quam molestiae eius rem voluptatem quia, dolorum quisquam voluptatibus, nobis tempore nam veritatis beatae sint? Quos nostrum ratione voluptatem ut ea fugit?',
      img: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80'
    },
    {
      id: 5,
      title: 'Veronika Decides to Die',
      author: 'Paulo Coelho',
      summary: 'Veronika is a young woman from Ljubljana, Slovenia, who appears to have a perfect life, but nevertheless decides to commit suicide by overdosing with sleeping pills. While she waits to die, she cancels the suicide letter she starts to her parents while suddenly provoked by a magazine article.',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81UqvCm-RnL.jpg'
    }
  ])
  const [logIn, setLogIn] = useState(false)

  const handleLogIn = () => {
    setLogIn(prev => !prev)
  }

  return (
    <div>
      <Navbar handleLogIn={ handleLogIn } logIn={ logIn } />
      {
        logIn ? <div className="container">
                { books.map(book => ( <Books key={ book.id } book={ book }/> )) }
                </div> : ""
      }
    </div>
  );
}

export default App;
