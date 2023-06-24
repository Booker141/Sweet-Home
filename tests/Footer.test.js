import { render, screen} from '@testing-library/react';

import Footer from '../components/Footer/Footer';

describe('Footer Component', () => {

  test('Renders Footer with links', () => {
    render(<Footer />);
    const column1Title = screen.getByText('Sweet Home');
    const column2Title = screen.getByText('Ayuda');
    const column3Title = screen.getByText('Encuentra en Sweet Home');
    const column4Title = screen.getByText('Síguenos');
    expect(column1Title).toBeInTheDocument();
    expect(column2Title).toBeInTheDocument();
    expect(column3Title).toBeInTheDocument();
    expect(column4Title).toBeInTheDocument();
  });

  test('Renders the FAQ link', () => {
    render(<Footer />);
    const linkElement = screen.getByLabelText('Ir a Preguntas frecuentes');
    expect(linkElement).toBeInTheDocument();
  });

  test('Renders the Rules link', () => {
    render(<Footer />);
    const linkElement = screen.getByLabelText('Ir a Reglas y políticas de Sweet Home');
    expect(linkElement).toBeInTheDocument();
  });

  test('Renders the Attendances link', () => {
    render(<Footer />);
    const linkElement = screen.getByLabelText('Ir a Cuidados');
    expect(linkElement).toBeInTheDocument();
  });

  test('Renders the News link', () => {
    render(<Footer />);
    const linkElement = screen.getByLabelText('Ir a Noticias');
    expect(linkElement).toBeInTheDocument();
  });


});