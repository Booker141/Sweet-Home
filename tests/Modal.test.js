/*Static imports*/

import {render, screen} from '@testing-library/react'
import Modal from '../components/Modal/Modal'



describe('Modal component', () => {


        test("Modal rendered with children", () => {
            render(<Modal>
                <p>Test del Modal</p>
                <div role="dialog">
                    <p>Comprobamos que funcione con varios elementos</p>
                </div>
                </Modal>);
            const title = screen.getByText('Test del Modal');
            const role = screen.getByRole('dialog');
            expect(title).toBeInTheDocument();
            expect(role).toBeInTheDocument();
        });

    })
