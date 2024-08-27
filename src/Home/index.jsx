import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListarProdutos';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home(){
const [produtos,setProdutos] = useState([
{
    id: 1,
    Produto: 'Pc gamer',
    atributo:'Produto Novo',
    preco: 2000.00,
    Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.terabyteshop.com.br%2Fproduto%2F28487%2Fgabinete-gamer-liketec-mad-rock-dark-mid-tower-vidro-temperado-argb-m-atx-black-sem-fonte-sem-fan&psig=AOvVaw1FORHYLMKBLkRHOjcFGr61&ust=1724811577272000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICFhv2NlIgDFQAAAAAdAAAAABAE'
  },
  {
    id: 2,
    Produto: 'Monitor 144hz',
    atributo:'Produto Novo',
    preco: 1400.00,
    Imagem:'https://www.google.com/imgres?q=monitor%20144hz&imgurl=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F434391%2Fmonitor-gamer-lg-ultragear-24-full-hd-144hz-1ms-ips-hdmi-e-displayport-99-srgb-hdr-freesync-premium-vesa-24gn60r-b-awzm_1680616910_gg.jpg&imgrefurl=https%3A%2F%2Fwww.kabum.com.br%2Fproduto%2F434391%2Fmonitor-gamer-lg-ultragear-24-144hz-full-hd-1ms-ips-displayport-e-hdmi-99-srgb-hdr-freesync-premium-vesa-24gn60r-b-awzm&docid=qaasoxX5yHTZiM&tbnid=Uf_md06LEDfoNM&vet=12ahUKEwiJodGcjpSIAxWwLbkGHZ8-H6QQM3oECHAQAA..i&w=1000&h=1000&hcb=2&ved=2ahUKEwiJodGcjpSIAxWwLbkGHZ8-H6QQM3oECHAQAA'
  },
  {
    id: 3,
    Produto: 'Ps5',
    atributo:'Produto Novo',
    preco: 4000.00,
    Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.xongeek.com.br%2Fconsole-playstation-5-ssd-825gb-bundle-marvels-spider-man-2-versao-com-leitor-ps5-sony&psig=AOvVaw00a2qWxwTur7QjJ6YVEVN3&ust=1724811696072000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjR7baOlIgDFQAAAAAdAAAAABAE'
  },
  {
    id: 4,
    Produto: 'Celular Gamer',
    atributo:'Produto Novo',
    preco: 3800.00,
    Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kabum.com.br%2Fproduto%2F399112%2Fsmartphone-gamer-asus-rog-phone-6-256gb-8gb-ram-octa-core-camera-tripla-50mp-tela-de-6-7-amoled-preto-90ai00b5-m001s0&psig=AOvVaw2MwNRtlsd18IW89T-0W9jm&ust=1724811730817000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjaoMaOlIgDFQAAAAAdAAAAABAE'
  },
  {
    id: 5,
    Produto: 'Cadeira Gamer',
    atributo:'Produto Novo',
    preco: 1200.00,
    Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.terabyteshop.com.br%2Fproduto%2F20586%2Fcadeira-gamer-terabyte-pink-throne-reclinavel-2d-suporta-ate-140kg-rosa-e-branco&psig=AOvVaw053WYJBMSRFSfqVJzjAyMw&ust=1724811794569000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLC4heWOlIgDFQAAAAAdAAAAABAE'
  },
]);

return(
    <>
<header />
<br></br>
<main className='main-container'>
<div className='logo-container'>
    <Img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DW3qlYINY5Q8&psig=AOvVaw2VpZPHcCc1-Nmwp2wFRJf-&ust=1724812144231000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjgqIyQlIgDFQAAAAAdAAAAABAE' alt="logo" className="logo" />
<div className='logo=text'>loja Zezao</div>
</div>
</main>
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
    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Farmazem.zezao%2F%3Flocale%3Dpt_BR&psig=AOvVaw0_o_XYOsrJlm5fQpmfs9yy&ust=1724812528283000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICQvMKRlIgDFQAAAAAdAAAAABAJ" alt="Slide" />
</div>
<div>
    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.quizur.com%2Ftrivia%2Fvc-conhece-o-zezao-xn6q&psig=AOvVaw2cBOTCS_q7JILZX20J1ye4&ust=1724812600903000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMj4zOaRlIgDFQAAAAAdAAAAABAE" alt="Slide" />
</div>
<div>
    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.blogcardososilva.com.br%2Farmazem-zezao-em-caico-e-o-lugar-certo-para-quem-quer-construir-ou-reformar-121%2F&psig=AOvVaw2z26yvRGgYW2EE4EeJZut8&ust=1724812641626000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjQ8_uRlIgDFQAAAAAdAAAAABAE" alt="Slide" />
</div>
</Carousel>
<ListarProdutos ListarProdutos={produtos} />
<footer></footer>
</>
);
}
