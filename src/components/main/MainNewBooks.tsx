import styled from "styled-components";
import type { Book } from "../../models/book.model";
import BookItem from "../books/BookItem";

interface Props{
    books: Book[];
}

function MainNewBooks({books} : Props){
    return (
        <MainNewBooksStyle>
            {books.map((book) => (
                <BookItem key={book.id} book={book} view="grid" />
                ))}
        </MainNewBooksStyle>
    );
}

const MainNewBooksStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap : 16px;

    @media screen AND ${({theme}) => theme.mediaQuery.mobile}{
        grid-template-columns: repeat(2, 1fr);
    }
`;

export default MainNewBooks;