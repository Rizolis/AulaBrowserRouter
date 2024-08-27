import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListarProdutos from "../components/ListarProdutos";

export default function Ofertas() {
    const [produtos,setProdutos] = useState([
    {
  id: 1,
  Produto: 'Processador',
  atributo:'Produto Novo',
  preco: 859.00,
  Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.br%2FProcessador-AMD-Ryzen-4600G-Graphics%2Fdp%2FB09Z5NH6SJ&psig=AOvVaw2mq_s6swvspHby1UcULbVg&ust=1724806313489000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJigwq_6k4gDFQAAAAAdAAAAABAE'
},
{
    id: 2,
    Produto: 'Placa de Video',
    atributo:'Produto Novo',
    preco: 2100.00,
    Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kabum.com.br%2Fproduto%2F191932%2Fplaca-de-video-galax-nvidia-geforce-gt-210-1gb-ddr3-64-bits-21ggf4hi00np&psig=AOvVaw3W1GcZMxFu11-p5qi9IItT&ust=1724806593190000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLj3wbT7k4gDFQAAAAAdAAAAABAE'
  },
  {
    id: 3,
    Produto: 'Leitor de CD',
    atributo:'Produto Novo',
    preco: 1200.00,
    Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.magazineluiza.com.br%2Fgravador-e-leitor-de-cd-e-dvd-externo-slim-usb-dex%2Fp%2Fdf7jgad6gk%2Fin%2Flgcd%2F&psig=AOvVaw1DJOcNcCPJAiLvQpqSYRXB&ust=1724806668094000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjT3tj7k4gDFQAAAAAdAAAAABAE'
  },
  {
    id: 4,
    Produto: 'Placa de Captura',
    atributo:'Produto Novo',
    preco: 250.00,
    Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lorben.com.br%2Fplaca-de-captura-de-video-camlink-hdmi-usb-30-full-hd-1080p&psig=AOvVaw0KAVD1z7zr7545bs_Mu63H&ust=1724806703983000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICaufb7k4gDFQAAAAAdAAAAABAE'
  },
  {
    id: 5,
    Produto: 'Memoria Ram',
    atributo:'Produto Novo',
    preco: 280.00,
    Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amztech.com.br%2Fmemoria-ram-para-desktop-16gb-ddr4-3200-krv---kingston%2Fp&psig=AOvVaw17MjWhcVG0lyDDa3PzJS3N&ust=1724806465258000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCawfj6k4gDFQAAAAAdAAAAABAE'
  },
  {
    id: 6,
    Produto: 'Placa mae',
    atributo:'Produto Novo',
    preco: 759.00,
    Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.terabyteshop.com.br%2Fproduto%2F20307%2Fplaca-mae-asus-prime-h610m-e-d4-chipset-h610-intel-lga-1700-matx-ddr4-90mb19n0-m0eay0&psig=AOvVaw2EXutGYvj_tggb2GDu7XkQ&ust=1724806521573000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODvxJL7k4gDFQAAAAAdAAAAABAE'
  },
  {
    id: 7,
    Produto: 'Water Cooler',
    atributo:'Produto Novo',
    preco: 800.00,
    Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pichau.com.br%2Fwater-cooler-cooler-master-masterliquid-360l-core-argb-360mm-branco-mlw-d36m-a18pz-rw&psig=AOvVaw01O-9m0BY2XOE36IUeZsS0&ust=1724806774313000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKD9gY_8k4gDFQAAAAAdAAAAABAJ'
  },
  {
    id: 8,
    Produto: 'Kit fans ARGB',
    atributo:'Produto Novo',
    preco: 500.00,
    Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kabum.com.br%2Fproduto%2F129926%2Fkit-3-cooler-fan-cooler-master-masterfan-mf120-halo-360mm-argb-mfl-b2dn-183pa-r1&psig=AOvVaw1mg-hYOR_QwYrSTwCmv09-&ust=1724806895746000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDt1MX8k4gDFQAAAAAdAAAAABAE'
  },
  {
    id: 9,
    Produto: 'Controlodora de Fans',
    atributo:'Produto Novo',
    preco: 100.00,
    Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.magazineluiza.com.br%2Fhub-e-controladora-argb-5v-3-pinos-ate-10-fans-cor-preta-coolmoon%2Fp%2Fkf0d25fkj9%2Fin%2Fhubb%2F&psig=AOvVaw0j3qzyWPvhbnLtBUTaNXgH&ust=1724807047928000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKixzo39k4gDFQAAAAAdAAAAABAE'
  },
  {
    id: 10,
    Produto: 'Gabinete Aquario',
    atributo:'Produto Novo',
    preco: 500.00,
    Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shopinfo.com.br%2Fgabinete-gamer-liketec-unreal-dark-vidro-aquario-preto-atx-psu-cover-77345%2Fp&psig=AOvVaw21qpkEzmCVwd4wAACw07sm&ust=1724807166060000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOCC5MX9k4gDFQAAAAAdAAAAABAE'
  },

]);

return (
        <div>
         <Header />
        <main className="lista-produtos">
        <ListarProdutos Listarproduto={produtos} />
        </main>
        <Footer/>
        </div>
        );
};