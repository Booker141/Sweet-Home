/*Static imports*/

import {render, screen, fireEvent} from '@testing-library/react'
import Modal from '../components/Modal/Modal'



describe('Modal component', () => {


        test("Modal rendered with children", () => {
            render(<Modal><p>Test</p></Modal>);
            const modal = screen.getByText('Test');
            expect(modal).toBeInTheDocument();
        });

    })
