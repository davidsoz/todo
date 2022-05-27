
import styled from "styled-components";
import NotesContainer from "./NotesContainer";

const Container = styled.div`
    width: 1050px;
    margin: 0 auto;
    border-top: 30px solid #8334eb;
    background-color: #eeeee4;
    >div:first-child {
        font-size: 36px;
        font-weight: bold;
        text-align: center;
        color: #c034eb;
    }
`

function AppContainer() {
    return (
        <Container>
            <div>Todos</div>
            <NotesContainer />
        </Container>
    )
}

export default AppContainer;