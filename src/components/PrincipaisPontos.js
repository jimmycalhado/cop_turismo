import './css/pontos.css';
import theatro from './img/theatro-da-paz.jpg'
import bosque from './img/bosque-rodrigues-alves-jardim-zoobotanico.jpg'
import docas from './img/estacao-das-docas-de-belem.jpg'
import mangal from './img/mangal-das-garcas.jpg'
import ver_o_peso from './img/mercado-ver-o-peso.jpg'
import museu from './img/museu-paraense-emilio-goeldi.jpg'
import basilica from './img/basilica-de-nossa-senhora-de-nazare.jpg'
import parque from './img/parque-da-residencia.jpg' 
import { Link } from 'react-router-dom';
import mark from './img/maps.webp'

function Pontos() {
    return (

        <div className="point">
            <h3>Principais Pontos turisticos</h3>
            <hr className='traço'></hr>
            <div className='turismo t1'>
                <img src={theatro} className="pt"/>
                <div className='conteudo'>
                    <h4>Theatro Da Paz</h4>
                    <p>Teatro municipal neoclássico e centenário que apresenta grandes produções cênicas, de música erudita e jazz.</p>
                </div>
                <button className='button'><a href='https://maps.app.goo.gl/rNTdyx7JsRpSgZDc9'><img src={mark} className="mark"/></a></button>
            </div>
            <div className='turismo t2'>
                <img src={bosque} className="pt"/>
                <div className='conteudo'>
                    <h4>Bosque Rodrigues Alves Jardim Zoobotanico</h4>
                    <p>Jardim botânico urbano e preservação da natureza com abundante fauna e flora.</p>
                </div>
                <button className='button'><a href='https://maps.app.goo.gl/Rhah1Aez1yrgctUJ8'><img src={mark} className="mark"/></a></button>
            </div>
            <div className='turismo t3'>
                <img src={docas} className="pt"/>
                <div className='conteudo'>
                    <h4>Estação das Docas</h4>
                    <p>Docas de carga transformadas em restaurantes modernos, lojas, bares e espaços para eventos culturais ao vivo.</p>
                </div>
                <button className='button'><a href='https://maps.app.goo.gl/N6AhxP65rjocVqy66'><img src={mark} className="mark"/></a></button>
            </div>
            <div className='turismo t4'>
                <img src={mangal} className="pt"/>
                <div className='conteudo'>
                    <h4>Mangal Das Garças</h4>
                    <p>Jardins paisagísticos amplos com uma torre de observação à beira-rio e lagos que abrigam flamingos e garças.</p>
                </div>
                <button className='button'><a href='https://maps.app.goo.gl/cbjPWYqzVjKzQHC97'><img src={mark} className="mark"/></a></button>
            </div>
            <div className='turismo t5'>
                <img src={ver_o_peso} className="pt"/>
                <div className='conteudo'>
                    <h4>Mercado Ver O Peso</h4>
                    <p>Destino tradicional com alimentos e ervas medicinais em edifícios históricos e um mercado ao ar livre.</p>
                </div>
                <button className='button'><a href='https://maps.app.goo.gl/YGCe8W2bnqjzChHUA'><img src={mark} className="mark"/></a></button>
            </div>
            <div className='turismo t6'>
                <img src={museu} className="pt"/>
                <div className='conteudo'>
                    <h4>Museu Paraense Emilio Goeldi</h4>
                    <p>Respeitável instituição de pesquisa e museu com parque botânico e zoológico, além de exposição de artefatos.</p>
                </div>
                <button className='button'><a href='https://maps.app.goo.gl/HR7tK43vD9hnph8XA'><img src={mark} className="mark"/></a></button>
            </div>
            <div className='turismo t7'>
                <img src={basilica} className="pt"/>
                <div className='conteudo'>
                    <h4>Basilica De Nossa Senhora De Nazare</h4>
                    <p>Basílica em estilo neoclássico construída em 1909 com vitrais ornamentados e mosaicos reluzentes.</p>
                </div>
                <button className='button'><a href='https://maps.app.goo.gl/RYnoGyNHH9duAKEw6'><img src={mark} className="mark"/></a></button>
            </div>
            <div className='turismo t8'>
                <img src={parque} className="pt"/>
                <div className='conteudo'>
                    <h4>Parque Da Residencia</h4>
                    <p>Parque com a antiga casa dos governadores, um teatro e uma sorveteria dentro de um vagão de trem.</p>
                </div>
                <button className='button'><a href='https://maps.app.goo.gl/7yL84o88Cd2qXUfY9'><img src={mark} className="mark"/></a></button>
            </div>
        </div>
        
    )

}

export default Pontos