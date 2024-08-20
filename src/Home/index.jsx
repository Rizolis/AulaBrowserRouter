import Header from "../components/Header";
import{Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home(){
return(
    <>
    <Header/>
    <p>Minha Home</p>
    

<Carousel
infiniteLoop
useKeyboardArrows
autoPlay
showArrows={true}
showStatus={false}
showThumbs={false}
dynamicHeight
>
<div>
    <img src="" alt="Slide 1" />
</div>
<div>
    <img src="" alt="Slide 1" />
</div>
<div>
    <img src="" alt="Slide 1" />
</div>

</Carousel>
</>
);
}
