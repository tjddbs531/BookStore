import { http, HttpResponse } from "msw";
import type { Book } from "../models/book.model";
import { faker } from "@faker-js/faker/locale/ko";

const bestBooksData: Book[] = Array.from({length: 10}).map((_, index) => ({
    id: index,
    title: faker.lorem.sentence(),
    img: faker.helpers.rangeToNumber({ min: 0, max: 2 }),
    form: "종이책",
    isbn: faker.string.numeric(13),
    summary: faker.lorem.paragraph(),
    detail: faker.lorem.paragraph(),
    author: faker.person.firstName(),
    pages: faker.helpers.rangeToNumber({ min: 50, max: 100 }),
    contents: faker.lorem.paragraph(),
    price: faker.helpers.rangeToNumber({ min: 10000, max: 50000 }),
    likes: faker.helpers.rangeToNumber({ min: 0, max: 100 }),
    pub_Date: faker.date.past().toISOString(),
}));

export const bestBooks = http.get("http://localhost:9999/books/best", () => {
    return HttpResponse.json(bestBooksData, { status: 200 });
});
