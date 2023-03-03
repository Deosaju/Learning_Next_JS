import styled from 'styled-components'


const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
`   

function CSSJS() {
    return (
        <div>
            <h1 style={
                { color: 'red' }
            }> CSS in JS </h1>
            <Title> Styled Components </Title>
        </div>
    )
}

export default CSSJS