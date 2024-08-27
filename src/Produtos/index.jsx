import React,{useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListarProdutos  from "../components/ListarProdutos";

export default function Produtos() {
 const [produtos,setProdutos] =useState([
    {

        id: 1,
        Produto: 'Cadeira Gamer',
        Observaçao: 'Produto Novo',
        preco: 200.00,
        Imagem:'https//static.mobly.com.br/p/Mobly-Cadeira-Gamer-Craft-Preta-e-Vermelha-5554-175355-1-zoom.jpg'
    },
    {

        id: 2,
        Produto: 'Mesa Gamer',
        Observaçao: 'Produto Novo',
        preco: 600.00,
        Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.chinalink.com.br%2Fescritorio%2Fmesa-gamer%2Fmesa-gamer-led-pelegrin-pel-007p-preta-metal-e-mdf&psig=AOvVaw13owebLJ1Nxsi5qwvMjgNr&ust=1724803199739000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPja8ePuk4gDFQAAAAAdAAAAABAE'
    },
    {

        id: 3,
        Produto: 'Pc Gamer',
        Observaçao: 'Produto Novo',
        preco: 2800.00,
        Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.magazineluiza.com.br%2Fpc-gamer-amd-ryzen-5-5600gt-16gb-3200mhz-xpg-rgb-radeon-vega-7-b450m-ssd-480gb-m-2500w-80-plus-gabinete-aquario-3-fans-argb-neologic-nli87566%2Fp%2Fdkh96fk2jg%2Fin%2Fcptg%2F&psig=AOvVaw1_kciXKkBr57hxiooEGCmk&ust=1724803299881000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD435Lvk4gDFQAAAAAdAAAAABAE'
    },
    {

        id: 4,
        Produto: 'Mouse Gamer',
        Observaçao: 'Produto Novo',
        preco: 210.00,
        Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mercadolivre.com.br%2Fmouse-gamer-marvo-g980-de-6-botoes-6000-dpi-ps4-semelhante-ao-cyborg%2Fp%2FMLB24591878&psig=AOvVaw1Q0Tuzzcm0FJ-m0ltK2qBx&ust=1724803405598000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPD898jvk4gDFQAAAAAdAAAAABAE'
    },
    {

        id: 5,
        Produto: 'Teclado Novo',
        Observaçao: 'Produto Novo',
        preco: 250.00,
        Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mercadolivre.com.br%2Fteclado-gamer-machenike-k500-b94-qwerty-red-cor-branco%2Fp%2FMLB22507258&psig=AOvVaw3I045JZNbJznSsxIddwNMe&ust=1724803528205000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMDMjoDwk4gDFQAAAAAdAAAAABAE'
    },
    {

        id: 6,
        Produto: 'Mousepad Gamer',
        Observaçao: 'Produto Novo',
        preco: 3000.00,
        Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adricomercio.com.br%2Fmouse-pad-gamer-redragon-kunlun-extended-preto-e-vermelho-880x420x4mm&psig=AOvVaw0KGQQvk5vEShaGWctsQkPq&ust=1724803716492000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiC2drwk4gDFQAAAAAdAAAAABAE'
    },
    {

        id: 7,
        Produto: 'Controle Ps5',
        Observaçao: 'Produto Novo',
        preco: 500.00,
        Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.buscape.com.br%2Fcontrole-joystick%2Fcontrole-ps5-sem-fio-dualsense-sony&psig=AOvVaw3AeufpeN08vRCjtBrh8T7Y&ust=1724803827331000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiNv5nxk4gDFQAAAAAdAAAAABAE'
    },
    {

        id: 8,
        Produto: 'Controle Ps4',
        Observaçao: 'Produto Novo',
        preco: 245.00,
        Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kabum.com.br%2Fproduto%2F102051%2Fcontrole-sony-dualshock-4-ps4-sem-fio-camuflado-cuh-zct2u&psig=AOvVaw1_hXsDvvs_2xrweZ6C5kYG&ust=1724803931313000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjGn8Dxk4gDFQAAAAAdAAAAABAJ'
    },
    {

        id: 9,
        Produto: 'Controle Xbox Serie',
        Observaçao: 'Produto Novo',
        preco: 560.00,
        Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.br%2FControle-sem-Fio-Xbox-Shock%2Fdp%2FB09BY1FTF7&psig=AOvVaw3vEE6vELZRBjk9LR7vs77l&ust=1724804111502000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOC8oJXyk4gDFQAAAAAdAAAAABAE'
    },
    {

        id: 10,
        Produto: 'Controle Xbox 360',
        Observaçao: 'Produto Novo',
        preco: 240.00,
        Imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.geekgames.com.br%2FMLB-2152808778-controle-original-para-xbox-360-branco-s-fio-manete-gamepad-_JM&psig=AOvVaw1UIi9h6-0h7whxqeu7FeoK&ust=1724804204403000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIC7m8Tyk4gDFQAAAAAdAAAAABAE'
    },
    {

        id: 11,
        Produto: 'Monitor 75hz',
        Observaçao: 'Produto Novo',
        preco: 400.00,
        Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kabum.com.br%2Fproduto%2F171132%2Fmonitor-gamer-aoc-24-polegadas-full-hd-75hz-1ms-ips-hdmi-vga-freesync-preto-e-vermelho-24g2he5&psig=AOvVaw09O4RrRcp9R-UE0jop3nH3&ust=1724804265560000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCUpd_yk4gDFQAAAAAdAAAAABAE'
    },
    {

        id: 12,
        Produto: 'Braço Articulado',
        Observaçao: 'Produto Novo',
        preco: 200.00,
        Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.progaming.com.br%2Fbraco-articulado-para-microfone-trust-gamer-gxt-253-emita-t22563-p4090&psig=AOvVaw0vvIPDB4BV58w9oh9ua0U7&ust=1724804377800000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKC9hZTzk4gDFQAAAAAdAAAAABAE'
    },
    {

        id: 13,
        Produto: 'Regua /Filtro de linha',
        Observaçao: 'Produto Novo',
        preco: 50.00,
        Imagem:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eletricabel.com.br%2Fmateriais-eletricos%2Ffiltro-de-linha-6-tomadas-com-protecao-epe-1006-intelbras&psig=AOvVaw3ev4o7cfVyE0vVYnvFUH0e&ust=1724804471449000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCQisHzk4gDFQAAAAAdAAAAABAK'
    },
    {

        id: 14,
        Produto: 'Cabo Display',
        Observaçao: 'Produto Novo',
        preco: 100.00,
        Imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.centralcabos.com.br%2Fcabo-displayport-para-hdmi-3m-4k%2Fp&psig=AOvVaw0eaU5SyMBu1PYv99ehwCZH&ust=1724804558267000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC2-unzk4gDFQAAAAAdAAAAABAE'
    },
    {

        id: 15,
        Produto: 'Cabo Rede',
        Observaçao: 'Produto Novo',
        preco: 200.00,
        Imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tiburciosstuff.com.br%2Fring-light%2Fcabos-e-hubs%2Fcabo-de-rede-para-internet-10-100-1000-mbps-s-com-rj45&psig=AOvVaw1OzsSnQ-trnNaFyDyq-IbK&ust=1724804627051000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOi_uIv0k4gDFQAAAAAdAAAAABAE'
    },

]);

return(
<div>
 <Header />
<main className="main-content">
<ListarProdutos produtos={produtos} />
</main>
<Footer/>
</div>
);
};

