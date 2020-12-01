export interface IQuestions {
    id: number,
    question: string,
    answers: {
        A: string,
        B: string,
        C: string,
        D: string
    },
    correctAnswer: string
}
