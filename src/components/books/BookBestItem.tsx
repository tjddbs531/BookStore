import styled from "styled-components";
import type { Book } from "../../models/book.model";
import BookItem, { BookItemStyle } from "./BookItem";

interface Props{
    book: Book;
    itemIndex: number;
}

function BookBestItem({book, itemIndex}: Props){
    return(
        <BookBestItemStyle>
            <BookItem book={book} view="grid" />
            <div className="rank">
                {itemIndex + 1}
            </div>
        </BookBestItemStyle>
    )
}

const BookBestItemStyle = styled.div`
    ${BookItemStyle} {
        .summary,
        .price,
        .likes{
            display: none;
        }
    }

    h2{
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
        
    position: relative;

    .rank{
        position: absolute;
        top : 5px;
        left: 5px;
        width: 35px;
        height: 35px;
        background: ${(props) => props.theme.color.primary};
        border-radius: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: #fff;
        font-weight: 700;
        font-style: italic;
    }
`;

export default BookBestItem;