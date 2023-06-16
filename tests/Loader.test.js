/*Static imports*/

import {render, screen} from '@testing-library/react'
import Loader from '../components/Loader/Loader'


describe("Loader component", () => {
    
    test("Loader component is rendered with an image", () => {
      render(<Loader />);
      const loaderImage = screen.getByAltText("loader");
      expect(loaderImage).toBeInTheDocument();
    });
  

  });