import styled, { ThemeProvider } from 'styled-components';
import Input from './Input';
import { useContexto } from '../hooks';

export default function Principal() {
    const { red, green, blue, setRed, setGreen, setBlue } = useContexto()
    const color = {
        cor: `${red},${green},${blue}`
    }
    return (
        <ThemeProvider theme={color}>
            <Caixa>
                <Input titulo={'red'} contento={red} setContexto={setRed} />
                <Input titulo={'green'} contento={green} setContexto={setGreen} />
                <Input titulo={'blue'} contento={blue} setContexto={setBlue} />
            </Caixa>
        </ThemeProvider>
    )
}

const Caixa = styled.div`
    width: 900px;
    height: 200px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(${props => props.theme.cor});
`;

