/* Static imports */

import CommentsCounter from "../components/CommentsCounter/CommentsCounter";
import { render, screen } from "@testing-library/react";



describe("Comments Counter Component", () => {

  test("Displays number of comments initially", () => {
    render(<CommentsCounter comments={[1, 2, 3]} />);
    const comments = screen.getByText("Número de comentarios:");
    const number = screen.getByText("3");
    expect(comments).toBeInTheDocument();
    expect(number).toBeInTheDocument();
  });

  test('Renders Comments Counter', () => {
    const comments = [
        { id: 1, text: 'Comment 1' },
        { id: 2, text: 'Comment 2' }
    ];
    const { getByText } = render(<CommentsCounter comments={comments} />);
    expect(getByText('Número de comentarios:')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
   
    });

    test('Renders comments Counter when comments are added', () => {
        const comments = [
            { id: 1, text: 'Comment 1' },
            { id: 2, text: 'Comment 2' }
        ];
        const { getByText, rerender } = render(<CommentsCounter comments={comments} />);
        expect(getByText('2')).toBeInTheDocument();
        const newComments = [
            { id: 1, text: 'Comment 1' },
            { id: 2, text: 'Comment 2' },
            { id: 3, text: 'Comment 3' }
        ];
        rerender(<CommentsCounter comments={newComments} />);
        expect(getByText('3')).toBeInTheDocument();
    });
});