import styled from 'styled-components';

export default function Input({titulo, contento, setContexto}:any) {
    return (
        <div>
            <Inputs type="text" placeholder={titulo} value={contento} onChange={(e) => setContexto(e.target.value)} />
        </div>
    );
}

const Inputs = styled.input`
    display: inline;
    width: 200px;
    height: 50px;
    margin: 40px;
    border-radius: 8px;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
`;
