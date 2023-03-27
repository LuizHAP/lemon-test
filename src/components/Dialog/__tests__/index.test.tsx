import { render, screen, fireEvent } from "@/test/utils";
import { vi } from "vitest";
import { Dialog } from "..";

const ESCAPE_KEY = 27;
const TAB_KEY = 9;
const ENTER_KEY = 13;

const onClose = vi.fn()

describe('Dialog Component', () => {
  it('should be visible when isOpen is true', () => {
    render(<div>
      <Dialog isOpen={true} onClose={() => { }} title="Modal">
        <div data-testid='dialog-content'>Hello World</div>
      </Dialog>

      <button data-testid='open-button'>Open Modal</button>
    </div>)

    const openButton = screen.getByRole('button', {
      name: 'Open Modal',
    })

    fireEvent.click(openButton)

    const dialogContent = screen.getByTestId('dialog-content')
    expect(dialogContent).toBeVisible()
  });

  it('should not be visible when isOpen is false', () => {
    render(<div>
      <Dialog isOpen={false} onClose={() => { }} title="Modal">
        <div data-testid='dialog-content'>Hello World</div>
      </Dialog>

      <button data-testid='open-button'>Open Modal</button>
    </div>)

    const openButton = screen.getByRole('button', {
      name: 'Open Modal',
    })

    fireEvent.click(openButton)

    const dialogContent = screen.queryByTestId('dialog-content')
    expect(dialogContent).toBeNull()
  })

  it('should not call onClose when clicking on the overlay when closeOnOverlayClick is false', async () => {
    render(<div>
      <Dialog isOpen={true} onClose={onClose} title="Modal" closeOnOverlayClick={false}>
        <div data-testid='dialog-content'>Hello World</div>
      </Dialog>

      <button data-testid='open-button'>Open Modal</button>
    </div >)

    const openButton = screen.getByRole('button', {
      name: 'Open Modal',
    })

    fireEvent.click(openButton)

    const modal = screen.getByTestId('modal')

    const overlay = screen.getByRole('dialog')

    expect(modal).toBeVisible()

    await fireEvent.click(overlay)

    expect(onClose).not.toBeCalled()
  })

  it('should call onClose when clicking on the overlay when closeOnOverlayClick is true', async () => {
    render(<div>
      <Dialog isOpen={true} onClose={onClose} title="Modal" closeOnOverlayClick>
        <div data-testid='dialog-content'>Hello World</div>
      </Dialog>

      <button data-testid='open-button'>Open Modal</button>
    </div >)

    const openButton = screen.getByRole('button', {
      name: 'Open Modal',
    })

    fireEvent.click(openButton)

    const modal = screen.getByTestId('modal')

    const overlay = screen.getByRole('dialog')

    expect(modal).toBeVisible()

    await fireEvent.click(overlay)

    expect(onClose).toBeCalled()
  })

  it('should call onClose when ESCAPE_KEY is pressed', () => {
    render(<div>
      <Dialog isOpen={true} onClose={onClose} closeOnOverlayClick title="Modal">
        <div data-testid='dialog-content'>Hello World</div>
      </Dialog>

      <button data-testid='open-button'>Open Modal</button>
    </div>)

    const openButton = screen.getByRole('button', {
      name: 'Open Modal',
    })

    fireEvent.click(openButton)

    fireEvent.keyDown(document, { keyCode: ESCAPE_KEY })

    expect(onClose).toBeCalled()
  })

  it('should call onClose when TAB_KEY and pressed close button', () => {
    render(<div>
      <Dialog isOpen={true} onClose={onClose} closeOnOverlayClick title="Modal">
        <div data-testid='dialog-content'>Hello World</div>
      </Dialog>

      <button data-testid='open-button'>Open Modal</button>
    </div>)

    const openButton = screen.getByRole('button', {
      name: 'Open Modal',
    })

    fireEvent.click(openButton)

    fireEvent.keyDown(document, { keyCode: TAB_KEY })

    const closeButton = screen.getByTestId('close-button')

    fireEvent.keyDown(document, { keyCode: ENTER_KEY })

    expect(closeButton).toBeVisible()

    expect(onClose).toBeCalled()
  })

  it('should try to click on the first focusable element', () => {
    render(<div>
      <Dialog isOpen={true} onClose={onClose} closeOnOverlayClick title="Modal">
        <div data-testid='dialog-content'>Hello World</div>
      </Dialog>

      <button data-testid='open-button'>Open Modal</button>
    </div>)

    const openButton = screen.getByRole('button', {
      name: 'Open Modal',
    })

    fireEvent.click(openButton)

    const modal = screen.getByTestId('modal')

    fireEvent.click(modal)

    expect(onClose).toBeCalled()
  })
})