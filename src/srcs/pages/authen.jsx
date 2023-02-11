import styled from 'styled-components'
import '../Styles/authen.css'

export default function Authen() {

    return (
        <>
            <Container1>
                <box-icon name='whatsapp' type='logo' color='#fdfdfd' size="60px"></box-icon>
                <h1>Whatsapp Webb</h1>
            </Container1>
            <Container2>
                <div className='box box1'>
                    <h2>Para usar WhatsApp en tu computadora:</h2>
                    <ol>
                        <li>
                            Abre WhatsApp en tu teléfono
                        </li>
                        <li>
                            Cuando se active la cámara, apunta tu teléfono hacia esta pantalla para escanear el código
                        </li>
                    </ol>
                </div>
                <div className='box box2'>
                    <img 
                        src='https://www.ocu.org/-/media/ta/images/qr-code.png?rev=2e1cc496-40d9-4e21-a7fb-9e2c76d6a288&hash=AF7C881FCFD0CBDA00B860726B5E340B&mw=960' 
                        alt='qr'
                        width={330}
                        height={350}
                        />
                </div>

            </Container2>

        </>
    )
}

const Container1 = styled.div`
    background: #0CD085;
    height:34vh;
    display: flex;
    flex-direction: row;
    padding-inline: 10%;
    align-items: center;
    gap: 20px;


    h1{
        color: white;
        font-size: 42px;
    }

`

const Container2 = styled.div`
    
    display: flex;
    flex-direction: row;
    border-width: 11px;
    background:red;
    position: fixed;
    top:25%;
    left:15%;
    width:74%;
    gap:20px;
    align-self: center;
    padding-block: 2%;
    padding-inline: 4%;
    background-color:white
    


`