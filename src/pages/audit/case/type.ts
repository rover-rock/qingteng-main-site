export interface ISearchParams {
    start,
    end,
    question,
    comment,
    current_page,
    page_size,
    sort
}

export interface IData {
    author: string
    comment_text: string
    comment_time: string
    count: number
    link: string
    question_author: string
    question_text: string
    title: string
}