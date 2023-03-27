import { fireEvent, render, screen } from "@/test/utils";
import { HomePage } from "..";

const ESCAPE_KEY = 27;

describe('HomePage', () => {
  it('should render two Buttons', () => {
    render(<HomePage />);

    const firstButton = screen.getByText('Open Long Text Modal with Close on Overlay True');
    const secondButton = screen.getByText('Open Small Text Modal with Close on Overlay False');

    expect(firstButton).toBeInTheDocument();
    expect(secondButton).toBeInTheDocument();
  });

  it('should open modal with long text when open modal with long text button is clicked', () => {
    render(<HomePage />);

    const firstButton = screen.getByText('Open Long Text Modal with Close on Overlay True');

    fireEvent.click(firstButton);

    const modal = screen.getByRole('dialog');

    expect(modal).toBeInTheDocument();
  });

  it('should open modal with small text when open modal with small text button is clicked', () => {
    render(<HomePage />);

    const firstButton = screen.getByText('Open Small Text Modal with Close on Overlay False');

    fireEvent.click(firstButton);

    const modal = screen.getByRole('dialog');

    expect(modal).toBeInTheDocument();
  });

  it('should call onClose function if Long Text Modal was closed', async () => {
    render(<HomePage />);

    const firstButton = screen.getByText('Open Long Text Modal with Close on Overlay True');

    fireEvent.click(firstButton);

    const overlay = screen.getByRole('dialog')
    const modal = screen.getByTestId('modal')

    expect(modal).toBeVisible()

    await fireEvent.click(overlay)

    expect(modal).not.toBeVisible()
  })

  it('should call onClose function if Small Text Modal was closed', async () => {
    render(<HomePage />);

    const firstButton = screen.getByText('Open Small Text Modal with Close on Overlay False');

    fireEvent.click(firstButton);

    const overlay = screen.getByRole('dialog')
    const modal = screen.getByTestId('modal')

    expect(modal).toBeVisible()

    await fireEvent.keyDown(document, { keyCode: ESCAPE_KEY })

    expect(modal).not.toBeVisible()
  })
});