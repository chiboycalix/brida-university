import './styles/read-our-blog.scss';
import ChooseUniversityOne from '../../../assets/choose-university-1.png'
import ChooseUniversityTwo from '../../../assets/choose-university-2.png'
import ChooseUniversityThree from '../../../assets/choose-university-3.png'
import { Button } from '../../../components';

type BlogProps = {
  id?: number,
  text: string,
  title: string;
  image: string;
}
const BlogCard = ({ text, title, image }: BlogProps) => {
  return <div className='blog__wrapper'>
    <img src={image} alt="image" />
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
}

const blogs = [{
  id: 1,
  title: 'Tips on choosing a university',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  image: ChooseUniversityOne
}, {
  id: 2,
  title: 'Tips on choosing a university',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  image: ChooseUniversityTwo
}, {
  id: 3,
  title: 'Tips on choosing a university',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  image: ChooseUniversityThree
}]
const ReadOurBlog = () => {
  return (
    <div className='read-our-blog__wrapper'>
      <h1>Read our blogs to learn more about cyber security</h1>
      <p>Our CyberNews Investigation team uses white hacking techniques to find and safely cybersecurity threats & vulnerabilities.</p>
      <div className='blog-cards__wrapper'>
        {
          blogs.map((blog: BlogProps) => {
            return <BlogCard key={blog.id} text={blog.text} title={blog.title} image={blog.image} />
          })
        }
      </div>
      <div className='btn__Wrapper'>
        <Button text='Get Started' onClick={() => null}/>
        </div>
    </div>
  )
}

export default ReadOurBlog